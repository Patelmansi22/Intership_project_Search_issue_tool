import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Adminsidebar from './Adminsidebar'
import "../Styles/Adminpanel.css";
import { useNavigate, Link } from "react-router-dom"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaTrash, FaEdit, FaEye } from 'react-icons/fa'
import constants from '../Constants/EmployeConstant';
import constant from '../Constants/ManagerConstant';


const Manager = () => {
  let tokenVal = JSON.parse(localStorage.getItem("data"))[0].token;
  
  const [show, setShow] = useState(false);
  const [data1, setData1] = useState([]);
  const [deleteItm, setDeleteItm] = useState([])
  
  const handleClose = () => setShow(false);
  const handleShow = (val) => {
    console.log("valll",val);
    setShow(true);
    setDeleteItm(val)
  }


  const [data, setData] = useState([]);
  // console.log("first", data)
  const navigate = useNavigate();


  const editItem = (val) => {
    navigate(`/addmanager/${val._id}`)

  };
  // let tn =localStorage.getItem("data")
  // tn =JSON.parse(tn)
  // let tokenVal =tn[0]?.token
  const removeItem = () => {
    setShow(false)
    // console.log("de;",i.email)
    // let email =i.email
    // if (data.length === 1) {
    //   localStorage.setItem("mng", JSON.stringify([]))

    // } else {

    //   setData(data.filter((item) => item !== i));
    //   localStorage.setItem("mng", JSON.stringify(data))
    // }

    // console.log("first" , list)

    const Add_SONG = 'http://localhost:3030/admin/deleteUser';
    var myHeaders = new Headers();
    myHeaders.append("Authorization", tokenVal)  ;
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
  
      "email": deleteItm.email,
   
    });
console.log("raw",raw)
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch(Add_SONG, requestOptions)
      .then(response => response.json())
      .then((data)=>console.log("delete",data))
      .catch(error => console.log('error', error));
  };



useEffect(()=>{


    const Add_SONG = 'http://localhost:3030/admin/getManaeger';
    var myHeaders = new Headers();
    myHeaders.append("Authorization",tokenVal )  ;
    myHeaders.append("Content-Type", "application/json");
  
   
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
  
    };
  
    fetch(Add_SONG, requestOptions)
      .then(response => response.json())
      .then((data)=>setData1(data.Manaeges))
      .catch(error => console.log('error', error));
    },[data1])


console.log("data 1 >>>",data1)

  return (
    <div>
      <AdminNavbar />
      <Adminsidebar />

      <main id="main" class="main">

        <div class="pagetitle">
          <h1>Manager</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item">{constant.Manager}</li>

            </ol>
          </nav>
        </div>

        <section class="section">
          <div class="row">
            <div class="col-lg-12">

              <div class="card">
                <div class="card-body">
                  <div class="datatable-top">
                    <div class="datatable-dropdown">
                      <label>
                        <select class="datatable-selector"><option value="5">5</option><option value="10" selected="">10</option><option value="15">15</option><option value="20">20</option><option value="25">25</option></select>
                      </label>
                      <Link
                        to="/addmanager/add">
                        <button class="button-22">{constant.Addmanager}</button>
                        
                      </Link>

                    </div>
                    {/* <div class="datatable-search">
              <input class="datatable-input" placeholder="Search..." type="search" title="Search within table"/>
          </div> */}
                  </div>
                  <div className='class="datatable-container"'>
                    <table class="table datatable">
                      <thead>
                        <tr>
                          <th scope="col">{constants.Id}</th>
                          <th scope="col">{constants.Name}</th>
                          <th scope="col">{constants.technology}</th>
                          <th scope="col">{constants.projectmanagername} </th>
                        </tr>
                      </thead>
                      {data1?.length > 0 ? data1.map((val) => {
                        return <tbody>

                          <tr>
                            <td>{val.employee_id}</td>
                            <td>{val.name}</td>
                            <td>{val.technology}</td>
                            <td>{val.projectmanagername}</td>
                            <Link to="/managerdetails" state={{data : val}} style={{color:"#4154f1"}} className='eye'><FaEye /></Link>
                            <span style={{ color: "#4154f1" }} className='edititem' onClick={()=>editItem(val)}><FaEdit/></span>
                            <span style={{ color: "#4154f1" }} type='button' className='deleteitem' data-toggle="modal" data-target="#exampleModal" onClick={() => handleShow(val)}> <FaTrash/> </span>


                            {show &&


                              <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{constant.cdel}</Modal.Body>
                                <Modal.Footer>
                                  <Button variant="secondary" onClick={handleClose}>
                                    {constant.Close}
                                  </Button>
                                  <Button variant="primary" onClick={() => removeItem(val)}>
                                    {constant.Delete}
                                  </Button>
                                </Modal.Footer>
                              </Modal>


                            }

                          </tr>

                        </tbody>


                      }) : "No data"}

                    </table>
                  </div>

                  <div class="datatable-bottom">
                    <div class="datatable-info">Showing 1 to 5 of 5 entries</div>
                    <nav class="datatable-pagination"><ul class="datatable-pagination-list"></ul></nav>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>

  )
}

export default Manager;