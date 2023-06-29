import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Adminsidebar from './Adminsidebar'
import "../Styles/Adminpanel.css";
import { useNavigate, Link } from "react-router-dom"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import constants from '../Constants/EmployeConstant';
import { FaTrash, FaEdit,FaEye } from 'react-icons/fa'


const Employe = () => {
  const [show, setShow] = useState(false);
  const [deleteItm, setDeleteItm] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = (val) => {
    console.log("valll",val);
    setShow(true);
    setDeleteItm(val)
  }

  let tn =localStorage.getItem("data")
  tn =JSON.parse(tn)
  let token1 =tn[0]?.token
  const [data1, setData1] = useState([]);
  // console.log("first", data)
  const navigate = useNavigate();


  const editItem = (val) => {
    navigate(`/addemploye/${val._id}`)

  };

  const removeItem = () => {
    
    setShow(false)
    // console.log("de;",i)
    // let email =i.email

    const Add_SONG = 'http://localhost:3030/admin/deleteUser';
    var myHeaders = new Headers();
    myHeaders.append("Authorization",token1)  ;
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
    // console.log("first" , list)

  };

useEffect(()=>{


  const Add_SONG = 'http://localhost:3030/admin/getUser';
  var myHeaders = new Headers();
  myHeaders.append("Authorization",token1)  ;
  myHeaders.append("Content-Type", "application/json");

 

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,

  };

  fetch(Add_SONG, requestOptions)
    .then(response => response.json())
    .then((data)=>setData1(data.Users))
    .catch(error => console.log('error', error));
  },[data1])



  return (
    <div>
      <AdminNavbar />
      <Adminsidebar />

      <main id="main" class="main">

        <div class="pagetitle">
          <h1>{constants.Employes}</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">{constants.Home}</a></li>
              <li class="breadcrumb-item">{constants.Employes}</li>

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
                        to="/addemploye/add">
                        <button class="button-22">   {constants.Addemploye}</button>
                     
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
                            <Link to="/employeedetails" state={{data : val}} style={{color:"#4154f1"}}><FaEye /></Link>
                          <span style={{ color: "#4154f1" }} className='edititem' onClick={()=>editItem(val)}><FaEdit/></span>
                            <span type='button' style={{ color: "#4154f1" }} className='deleteitem' data-toggle="modal" data-target="#exampleModal" onClick={() => handleShow(val)}> <FaTrash/> </span>



                            {show &&


                              <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Are you sure you want to Delete?</Modal.Body>
                                <Modal.Footer>
                                  <Button variant="secondary" onClick={handleClose}>
                                    Close
                                  </Button>
                                  <Button variant="primary" onClick={() => removeItem(val)}>
                                    delete
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

export default Employe


