import React, { useState, useEffect } from 'react';
import DataTable from "react-data-table-component";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import InputField from '../Components/InputField';
import P from '../Components/P ';

import constants from '../Constants/LoginPageConstant';
// import "../Constants/profile.png";
import "../Styles/Issuepage.css";
import { MdSearch } from "react-icons/md";
import CustomMaterialPagination from "./CustomMaterialPagination"
import { FaEdit, FaEye } from 'react-icons/fa'
import AdminNavbar from './AdminNavbar';
import Adminsidebar from './Adminsidebar';
import axios from 'axios';


const getViewHistoryData = () => {
  let data = localStorage.getItem("viewHistory");
  if (data) {
    return data = JSON.parse(data)
  } else {
    return []
  }
}

// let tn =localStorage.getItem("data")
// tn =JSON.parse(tn)

// let tokenVal =tn?.token || []



const IssuePage = () => {

  let tokenVal = JSON.parse(localStorage.getItem("data"))[0].token;
  // console.log("tokenVal",tokenVal);
  let id =JSON.parse(localStorage.getItem("data"))[0].Employee_Details[0]._id
// console.log("PPP",id)
  // if  {
  
  //   let tn = localStorage.getItem("data")
  //   tn = JSON.parse(tn)
  //   let tokenVal = tn[0]?.token
  //   console.log("first", tn)
  // }

  const navigate = useNavigate();
  const [issue, setIssue] = useState(false);
  const [searchData, setSearchData] = useState("")
  const [perPage, setPerPage] = useState(1005);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDes, setInputDes] = useState("");
  const [status, setStatus] = useState("");

  const [fetchIssueData, setFetchIssueData] = useState([]);
  const [issueData, setIssueData] = useState([]);
  const [getissue, setGetIssue] = useState();

  const [viewHsitory, setviewHistory] = useState(getViewHistoryData());

  const [isEditing, setIsEditing] = useState(false);

  const [editData, setEditData] = useState([]);

  const newIssueHandler = () => {
    setIssue(true);

  }

  const home = () => {
    navigate("/")
  }


  const columns = [

    {
      style: {
        background: "orange",
        backgroundColor: "var(--color-canvas-subtle)",
        borderColor: "light grey",
        // borderStyle: "solid",
        // borderWidth:"var(--primer-borderWidth-thin, 1px)",
        margin: "calc(var(--primer-borderWidth-thin, 1px)*-1) calc(var(--primer-borderWidth-thin, 1px)*-1) 0",
        padding: "var(--primer-stack-padding-normal, 16px)",
        marginLeft: "251px",
        overflow: "hidden",
        marginRight: "0px",

      },
      selector: row =>

        <div class="Box-header d-flex flex-justify-between" id="js-issues-toolbar" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">


          <div class="">
            <div class="">
              <Link to={`/issueDetails/:${row._id}`} >
                {/* {/ <Button type="button" className="btn btn-outline-success m-4" name={constants.editItem}/> /} */}
                <span className='edititem2' style={{ color: "#7CE2AD", fontSize: "15px", marginLeft: "940px" }}  ><FaEye /></span>
              </Link>
              <span className='edititem2' style={{ color: "blue", fontSize: "15px", marginLeft: "20px" }} onClick={() => editDataHandler(row)}><FaEdit /></span>

              <div class="table-list-header-toggle states flex-auto pl-0" aria-live="polite" style={{ marginTop: "-20px", overflow: "hidden" }}>
                <b class="" data-ga-click="Issues, Table state, Open" data-turbo-frame="repo-content-turbo-frame" style={{ fontSize: "16px" }}>
                  {row?.status == "open" ?
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                    </svg> :
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
                      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                    </svg>

                  }
                  {row.title}
                  <span className={`bg-${row.status == "open" ? "success" : "danger"} text-light p-1 mx-2`} style={{ fontSize: "13px", }}>{row.status}</span>
                </b>


                <br></br>
                {/* {row.description}  */}

                {new Date(row.postDate).toLocaleString(
                  "en-US",
                  {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }
                )}

              </div>

            </div>




          </div>
        </div>


    },
    // {
    //   selector: row =><div>
    //     <Link to={`/issueDetails/:${row._id}`}> 
    //   {/* {/ <Button type="button" className="btn btn-outline-success m-4" name={constants.editItem}/> /} */}
    //   <span style={{color:"blue",fontSize:"15px"}}  ><FaEye/></span>
    //   </Link>
    //   <span  style={{color:"blue", marginLeft:"25px",fontSize:"15px"}} onClick={() => editDataHandler(row)}><FaEdit/></span>
    //   </div>
    // },

  ];
  //search 
  const columns1 = [
    {
      selector: row => <div>
        <h5 className="">{row.title}<span className={`bg-${row.status == "open" ? "success" : "danger"} text-light p-1 mx-2`} style={{ fontSize: "13px", }}>{row.status}</span> </h5>
        {/* <P className="p-1 text-secondary" name={row.description.slice(0,180)} /> */}
      </div>
    },
    {
      selector: row => <div>
        <Link to={`/issueDetails/:${row._id}`}>
          <Button type="button" className="btn btn-outline-success m-4" name={constants.editItem} />
        </Link>
        <button type="button" className="btn btn-outline-warning mx-3" onClick={() => editDataHandler(row)}>Edit</button>
      </div>
    },
    {
      selector: row => <div className="text-secondary">
        {row.timestamp}
      </div>
    }
  ];


  const addDataHandler = async () => {

    const Add_SONG = 'http://localhost:3030/issues';

    var myHeaders = new Headers();
    myHeaders.append("Authorization", tokenVal)
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "title": inputTitle,
      "description": inputDes
   

    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch(Add_SONG, requestOptions)
      .then(response => response.json()).then((data) => setIssueData(data, ...issueData))
      .catch(error => console.log('error', error));
    setInputTitle("")
    setInputDes("")
    setIssue(false);


  }

  // useEffect(() => {
  //   const GET_ISSUE = 'http://localhost:3030/issues/1&100';
  //   var myHeaders = new Headers();

  //   myHeaders.append("Authorization", tokenVal)



  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,

  //   };

  //   fetch(GET_ISSUE, requestOptions)
  //     .then(response => response.json()).then((data) => setGetIssue(data, ...issueData))

  //     .catch(error => console.log('error', error));

  // }, [])


  const fetchUsers = async page => {
    // setLoading(true);

    const response = await axios.get(`http://localhost:3030/getIssues/${page}&${perPage}`);

    // console.log(">>>>",response.data);
    setGetIssue(response.data, ...issueData)

  };



  useEffect(() => {
    fetchUsers(1); // fetch page 1 of users

  }, []);
  let data = getissue?.Data.filter((itm)=>itm.userID===id)
  // let  savedTime    = data.map((val)=>  val?.postDate)
  // const formatedDate = new Date(savedTime).toLocaleString(
  //   "en-US",
  //   {
  //     month: "short",
  //     day: "2-digit",
  //     year: "numeric",
  //   }
  //   );
  // console.log("data", data)


  const editDataWithStatus = (s) => {
    console.log("sss", s);
    console.log("editData", editData);
    setStatus(s);

    //local storage
    let result = fetchIssueData.find((item) => {
      if (item.title == editData.title && item.description == editData.description) {
        return (item.title = inputTitle, item.description = inputDes, item.status = s)
      }
    })
    console.log("status",status)

    const Add_SONG = `http://localhost:3030/issues/edit/${editData._id}`;
    var myHeaders = new Headers();
    myHeaders.append("Authorization", tokenVal);

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "title": inputTitle, "description": inputDes, "status": s
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch(Add_SONG, requestOptions)
      .then(response => response.json()).then((data) => {
        getissue.find((item, index) => {
          console.log("first",item)
          if (item._id == data.updated_issue._id) {
            return (item.title = inputTitle, item.description = inputDes,item.status=status)
          }
        })
      })
      .catch(error => console.log('error', error));

    setIsEditing(false);
    setInputTitle("")
    setInputDes("")
    setIssue(false);
  }


 
  const editDataHandler = (id) => {
    setIssue(true)
    setIsEditing(true)
    setInputTitle(id.title)
    setInputDes(id.description)
    setEditData(id)

    setviewHistory([id, ...viewHsitory])

  }
  // const profile =()=>{
  //   navigate("/profile")
  // }

  const viewHistoryHandler = (id) => {
    console.log("ididd", id)
    let histody = viewHsitory.filter((item) => item.id == id.id)
    // console.log(">>>>>", histody);
    alert(`title : ${histody[histody.length - (histody.length - 1)]?.title} description: ${histody[histody.length - (histody.length - 1)]?.description} status: ${histody[histody.length - (histody.length - 1)]?.status}`)
  }

  const filterWithTechnology = () => {

  }

  useEffect(() => {
    // localStorage.setItem("issue", JSON.stringify(fetchIssueData));
    localStorage.setItem("viewHistory", JSON.stringify(viewHsitory));

    // fetch(`http://localhost:3030/issues`).then((res)=> res.json()).then((data)=> setIssueData(data.allissues))
  }, [fetchIssueData, viewHsitory, isEditing])

  // console.log("fetchIssueData --->", data);

  const profile = () => {
    navigate("/profile")
  }

  if(!tokenVal){
    return
      }
  return (
    <div >
      <AdminNavbar />
      <Adminsidebar />
      {/* <div className="dropdown1">
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" className="dropbtn1" />
  <div className="dropdown-content1">
    <p onClick={home}>Home</p>
    <p onClick={profile}>Profile</p>
  </div>
  </div> */}
      <div className="">
      <div class="example1" style={{margin:"auto",maxWidth:"500px"}}>
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit" className='submit' onClick={newIssueHandler}>{constants.newIssueButton}</button>
        </div>
        {/* <InputField className="search1" type="search" value={searchData} onChange={(e) => setSearchData(e.target.value)} placeholder="Search" ariaLabel="Search" style={{ width: "50%" }} />
        <a style={{ marginTop: "70px", fontSize: "25px", marginLeft: "-30px" }}><MdSearch /></a>
        <Button className="issue1" type="button" onClick={newIssueHandler} name={constants.newIssueButton} /> */}
      </div>

      {issue && <div className=" " >
        <div className='d-flex row ' style={{ width: "50%", marginLeft: "251px", height: "170px" }} >
          <InputField type="text" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} placeholder="title" />
          <InputField type="text" className="my-3" value={inputDes} onChange={(e) => setInputDes(e.target.value)} placeholder="Comment" />

          <div className="d-flex">
            {/* <span className="">{constants.technologyLabel}: </span>
        <select className="form-select mx-3 " style={{width: "20%"}}>
          <option selected>All</option>
          <option value="ReactJS">ReactJS</option>
          <option value="NodeJS">NodeJS</option>
          <option value="PHP">PHP</option>
        </select> */}

            {isEditing ?

              <div class="nav1-item dropdown3 pe-3">
                <a class="nav1-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                  Edit

                </a>
                <ul class="dropdown-menu dropdown1-menu-end dropdown-menu-arrow profile">



                  <li>
                    <p onClick={() => editDataWithStatus("open")}>open</p>
                  </li>
                  <li>
                    <p onClick={() => editDataWithStatus("close")}>close</p>
                  </li>

                </ul>
              </div>



              : <button onClick={addDataHandler} className="btn btn-outline-primary" >{constants.saveButton}</button>
            }
          </div>

        </div>
      </div>}

      <div class="Box-header2 d-flex flex-justify-between" id="js-issues-toolbar" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">

        <div class="table-list-filters flex-auto d-flex min-width-0">
          <div class="flex-auto d-none d-lg-block no-wrap">

            <div class="table-list-header-toggle states flex-auto pl-0" aria-live="polite">
              <a style={{ color: "black", textDecoration: "none" }} class="" data-ga-click="Issues, Table state, Open" data-turbo-frame="repo-content-turbo-frame">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                </svg>
                {/* <span style={{fontSize:"20px"}} >open:{data.filter((item)=>item.status=="open").length} </span> */}
              </a>

              <a class="" style={{ color: "grey", textDecoration: "none", marginLeft: "20px" }} data-ga-click="Issues, Table state, Closed" data-turbo-frame="repo-content-turbo-frame">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
                  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                </svg>
                {/* <span style={{fontSize:"20px"}} >close :{data.filter((item)=>item.status=="close").length} </span> */}
{/*  */}
              </a>
              {/* <span style={{ fontSize: "20px",marginLeft:"20px" }} >total: {data.filter((item) => item.status == item.status).length} </span> */}

            </div>

          </div>



        </div>
      </div>

      {/* <div className="d-flex m-4">
          <div className="">
            {/* {/ <Button type="button" className="btn btn-outline-success" name={`opened: ${data.filter((item) => item.status == "open").length}`}/> /} */}


      {/* <span   className='btn btn-outline-success'>open:{issueData.filter((item)=>item.status=="open").length} </span> */}


      {/* <Button type="button" className="btn btn-outline-danger mx-3" name={`closed: ${data.filter((item) => item.status == "close").length}`}/>
            <Button type="button" className="btn btn-outline-secondary" name={`Total issues: ${data.filter((item) => item).length}`}/> */}


      {/* <span  className='btn btn-outline-danger mx-3'>close :{issueData.filter((item)=>item.status=="close").length} </span>
        <span  className='btn btn-outline-secondary'>total:{issueData.filter((item)=>item.status== item.status).length} </span> */}
      {/*              
          </div>
      </div> */}

      {!searchData &&

        <DataTable

          columns={columns}
          data={data}
          pagination
          highlightOnHover
         
        />
      }

      {searchData && <DataTable
        columns={columns1}
        data={fetchIssueData.filter((item) => { return item.title.toLowerCase().trim().includes(searchData.toLowerCase().trim()) })}
        pagination
        highlightOnHover
       
      />}


    </div>
  )
}

export default IssuePage