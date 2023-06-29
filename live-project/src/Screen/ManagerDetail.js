import React from 'react'
import { useLocation } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import Adminsidebar from './Adminsidebar'
import "../Styles/Adminpanel.css";
import constants from '../Constants/EmployeConstant';
import constant from '../Constants/ManagerConstant';
const ManagerDetail = () => {
  const location = useLocation()
  const { data } = location.state
  
  let mng = localStorage.getItem("mng");
  mng = JSON.parse(mng);
console.log("data",data)
  return (
    <div>
      <AdminNavbar />
      <Adminsidebar />
      <div class="tab-pane fade show active profile-overview" id="profile-overview1">

        <h5 class="card-title"> {constant.ManagerDetails}</h5>




        <>


          <div class="row">
            <div class="col-lg-3 col-md-4 label ">{constants.Name}</div>
            <div class="col-lg-9 col-md-8">{data.name}</div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-lg-3 col-md-4 label">{constants.technology}</div>
            <div class="col-lg-9 col-md-8">{data.technology}</div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-lg-3 col-md-4 label">{constants.projectmanagername}</div>
            <div class="col-lg-9 col-md-8">{data.projectmanagername ? data.projectmanagername : '-'}</div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-lg-3 col-md-4 label">Team</div>
            <div class="col-lg-9 col-md-8">
              {data.teamName ? data.teamName : '-'}</div>
          </div>
        </>



      </div>
    </div>
  )
}

export default ManagerDetail;