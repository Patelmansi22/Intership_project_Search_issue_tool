import React from 'react'
import { useLocation } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import Adminsidebar from './Adminsidebar'
import "../Styles/Adminpanel.css";
import constants from '../Constants/EmployeConstant';

const EmployeeDetails = () => {
  const location = useLocation()
  const { data } = location.state
  
  let mng = localStorage.getItem("mng");
  mng = JSON.parse(mng);

  return (
    <div>
      <AdminNavbar />
      <Adminsidebar />
      <div class="tab-pane fade show active profile-overview" id="profile-overview1">

        <h5 class="card-title">{constants.EmployeeDetails}</h5>




        <>


          <div class="row">
            <div class="col-lg-3 col-md-4 label ">{constants.Name}</div>
            <div class="col-lg-9 col-md-8">{data.name}</div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-lg-3 col-md-4 label">{constants.Id}</div>
            <div class="col-lg-9 col-md-8">{data.employee_id}</div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-lg-3 col-md-4 label">{constants.technology}</div>
            <div class="col-lg-9 col-md-8">{data.technology}</div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-lg-3 col-md-4 label">{constants.projectmanagername}</div>
            <div class="col-lg-9 col-md-8">
            {data.projectmanagername ? data.projectmanagername : '-'}</div>
          </div>
        </>



      </div>
    </div>
  )
}

export default EmployeeDetails;