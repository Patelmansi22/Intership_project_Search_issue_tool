import React, { useState, useEffect } from 'react';
import DataTable from "react-data-table-component";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import InputField from '../Components/InputField';
import Modal from 'react-bootstrap/Modal';
import constants from '../Constants/LoginPageConstant';
import "../Styles/Issuepage.css";
import { MdSearch } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import NavbarLogin from './Navbar-Login';
import axios from 'axios';
import CustomMaterialPagination from "./CustomMaterialPagination"
import { FaEye } from 'react-icons/fa';


const getViewHistoryData = () => {
  let data = localStorage.getItem("viewHistory");
  if (data) {
    return data = JSON.parse(data)
  } else {
    return []
  }
}




const Home = () => {

  const handleClose = () => setIssue(false);
  const navigate = useNavigate();

  const [issue, setIssue] = useState(false);
  const [searchData, setSearchData] = useState("")
  const [fetchIssueData, setFetchIssueData] = useState([]);
  const [issueData, setIssueData] = useState([]);
  const [getissue, setGetIssue] = useState();
  const [viewHsitory, setviewHistory] = useState(getViewHistoryData());
  const [isEditing, setIsEditing] = useState(false);
  const [totaldatas, setTotaldatas] = useState(0);
  const [perPage, setPerPage] = useState(15);
  const [loading, setLoading] = useState(false);
  const newIssueHandler = () => {
    setIssue(true);

  }



  const columns = [
   
    
    {

      selector: data =>

        <div class="Box-header d-flex flex-justify-between" id="js-issues-toolbar" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">


          <div class="">
            <div class="">
              <Link to={`/issueDetails/:${data._id}`} >

                <span className='edititem2' style={{ color: "#7CE2AD", fontSize: "15px",marginLeft: "1200px" }}  ><FaEye /></span>
              </Link>


              <div class="table-list-header-toggle states flex-auto pl-0" aria-live="polite" style={{ marginTop: "-20px" }}>
                <b class="" data-ga-click="Issues, Table state, Open" data-turbo-frame="repo-content-turbo-frame" style={{ fontSize: "16px" }}>
                  {data?.status == "open" ?
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                    </svg> :
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
                      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                    </svg>

                  }

                  {data.title}


                  <span className={`bg-${data.status == "open" ? "success" : "danger"} text-light p-1 mx-2`} style={{ fontSize: "13px", }}>{data.status}</span>
                </b>


                <br></br>


                <p style={{ marginLeft: "15px" }}> {new Date(data.postDate).toLocaleString(
                  "en-US",
                  {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }
                )}
                </p>
              </div>

            </div>




          </div>
        </div>


    },

  ];
  //search 
  const columns1 = [
   
    {

      selector: data =>

        <div class="Box-header d-flex flex-justify-between" id="js-issues-toolbar" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">


          <div class="">
            <div class="">
              <Link to={`/issueDetails/:${data._id}`} >

                <span className='edititem2' style={{ color: "#7CE2AD", fontSize: "15px",marginLeft: "1200px" }}  ><FaEye /></span>
              </Link>


              <div class="table-list-header-toggle states flex-auto pl-0" aria-live="polite" style={{ marginTop: "-20px" }}>
                <b class="" data-ga-click="Issues, Table state, Open" data-turbo-frame="repo-content-turbo-frame" style={{ fontSize: "16px" }}>
                  {data?.status == "open" ?
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                    </svg> :
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
                      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                    </svg>

                  }

                  {data.title}


                  <span className={`bg-${data.status == "open" ? "success" : "danger"} text-light p-1 mx-2`} style={{ fontSize: "13px", }}>{data.status}</span>
                </b>


                <br></br>


                <p style={{ marginLeft: "15px" }}> {new Date(data.postDate).toLocaleString(
                  "en-US",
                  {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }
                )}
                </p>
              </div>

            </div>




          </div>
        </div>


    },

  ]


  const fetchUsers = async page => {
    setLoading(true);

    const response = await axios.get(`http://localhost:3030/getIssues/${page}&${perPage}`);

    console.log(">>>>",response.data);
    setGetIssue(response.data, ...issueData)

  };



  useEffect(() => {
    fetchUsers(1); // fetch page 1 of users

  }, []);

  //   useEffect(()=>{
  //   const GET_ISSUE ='http://192.168.1.246:3000/getIssues/1&10';
  //   var myHeaders = new Headers();

  //   myHeaders.append("Authorization",  token1)



  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders, 

  //   };

  //   const data = async() => {
  //     await fetch(GET_ISSUE, requestOptions)
  //     .then(response => response.json()).then((data)=>setGetIssue(data,...issueData))

  //     .catch(error => console.log('error', error));
  //   }
  //   data();

  // },[])
  console.log("??????", getissue)
  let data = getissue?.Data

  // let  savedTime    = data.map((val)=>  val?.postDate)
  // const formatedDate = new Date(savedTime).toLocaleString(
  //   "en-US",
  //   {
  //     month: "short",
  //     day: "2-digit",
  //     year: "numeric",
  //   }
  //   );
  console.log("??",data)


  useEffect(() => {
    // localStorage.setItem("issue", JSON.stringify(fetchIssueData));
    localStorage.setItem("viewHistory", JSON.stringify(viewHsitory));

    // fetch(`http://192.168.1.246:3000/issues`).then((res)=> res.json()).then((data)=> setIssueData(data.allissues))
  }, [fetchIssueData, viewHsitory, isEditing])

  return (
    <div >
      {/* style={{width:"80%"}} */}
      <NavbarLogin />

      <div className="">
        <div class="example" >
        <input type="text" value={searchData} className="search" onChange={(e) => setSearchData(e.target.value)} searchs={searchData} placeholder="SEARCH...." />
    <button type="submit" onClick={newIssueHandler}  >{constants.newIssueButton}</button>
        </div>

        {/* <p>Centered inside a form with max-width:</p> */}
        {/* <form class="example" action="/action_page.php" style={{margin:"auto",maxWidth:"300px"}}>
  <input type="text" placeholder="Search.." name="search2"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form> */}


        {/* <InputField className="search2" type="search" value={searchData} onChange={(e) => setSearchData(e.target.value)} placeholder="Search" ariaLabel="Search" style={{ width: "50%" }} />
        <a style={{ marginTop: "70px", fontSize: "25px", marginLeft: "-30px" }}><MdSearch /></a>

        {/* <Button className="issue1" type="button" onClick={newIssueHandler} name={constants.newIssueButton}/>  */}
        {/* <span type='button' style={{ color: "white" }} className='login-issue' data-toggle="modal" data-target="#exampleModal" onClick={newIssueHandler}> <p>{constants.newIssueButton}</p> </span> */}
      </div>

      {issue &&

        <Modal show={issue} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>Login</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Link to="/Login">
              <Button variant="primary" >
                Login
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      }

      <div class="Box-header2 d-flex flex-justify-between" id="js-issues-toolbar" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">

        <div class="table-list-filters flex-auto d-flex min-width-0">
          <div class="flex-auto d-none d-lg-block no-wrap">

            <div class="table-list-header-toggle states flex-auto pl-0" aria-live="polite">
              <a style={{ color: "black", textDecoration: "none", marginLeft: "-230px" }} class="" data-ga-click="Issues, Table state, Open" data-turbo-frame="repo-content-turbo-frame">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                </svg>
                {/* <span style={{fontSize:"20px"}} >open:{data.filter((item)=>item.status=="open").length}</span> */}
              </a>

              <a class="" style={{ color: "grey", textDecoration: "none", marginLeft: "20px" }} data-ga-click="Issues, Table state, Closed" data-turbo-frame="repo-content-turbo-frame">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
                  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                </svg>

                {/* <span style={{fontSize:"20px"}} >close :{data.filter((item)=>item.status=="close").length} </span> */}
              </a>
              {/* <span style={{ fontSize: "20px",marginLeft:"20px" }} >total: {data.filter((item) => item.status == item.status).length} </span> */}
            </div>

          </div>




        </div>
      </div>



      {!searchData &&

         <DataTable

          columns={columns}
          data={data}
          pagination
          // paginationComponent={CustomMaterialPagination}
          // // progressPending={loading}
          // highlightOnHover
          // responsive={true}
          // responsivePriority={[-1, 0, 1]}

        /> 
       
      }

      {searchData && <DataTable
        columns={columns1}
        data={data.filter((item) => { return item.title.toLowerCase().trim().includes(searchData.toLowerCase().trim()) })}
        pagination
        highlightOnHover

      />}


    </div>
  )
}

export default Home