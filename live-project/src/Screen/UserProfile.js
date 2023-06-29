import React from 'react'
import AdminNavbar from './AdminNavbar'
import Adminsidebar from './Adminsidebar'
import { Link, useNavigate } from "react-router-dom"
import { FaTrash, FaEdit,FaEye } from 'react-icons/fa'



const UserProfile = () => {
  let data = localStorage.getItem("data");
  data = JSON.parse(data)
  console.log(data)

  const navigate = useNavigate();

  const editItem = () => {
    navigate(`/editprofile/${data[0].Employee_Details[0]._id }`)

  };
  return (
    <div>



      <AdminNavbar />
      <Adminsidebar />

      <main id="main" class="main">

        <div class="pagetitle">
          <h1>Profile</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item">Users</li>
              <li class="breadcrumb-item active">Profile</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}
       

return (
  <>
        <section class="section profile">
          <div class="row">
            <div class="col-xl-4">

              <div class="card">
                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3DgP-r2jcJjdzms_C_WYKnBPK0SdMUE8xA&usqp=CAU" alt="Profile" class="rounded-circle" />
                  <h2>{data[0].Employee_Details[0].name ? data[0].Employee_Details[0].name : '-'}</h2>
                  <h3>{data[0].Employee_Details[0].userRole ? data[0].Employee_Details[0].userRole : '-'}</h3>
                  <div class="social-links mt-2">
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>

            </div>

            <div class="col-xl-8">

              <div class="card">
                <div class="card-body pt-3">
                  {/* <!-- Bordered Tabs --> */}
                  <ul class="nav nav-tabs nav-tabs-bordered">

                    <li class="nav-item">
                      <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                    </li>


                  </ul>
                  <div class="tab-content pt-2">
                  
                          <div class="tab-pane fade show active profile-overview" id="profile-overview">

                            <h5 class="card-title">Profile Details</h5>

                            <div class="row">
                              <div class="col-lg-3 col-md-4 label ">Full Name</div>
                              <div class="col-lg-9 col-md-8">  {data[0].Employee_Details[0].name ? data[0].Employee_Details[0].name : '-'}</div>
                            </div>

                            <div class="row">
                              <div class="col-lg-3 col-md-4 label">Company</div>
                              <div class="col-lg-9 col-md-8">  {data[0].Employee_Details[0].companyname ? data[0].Employee_Details[0].companyname : '-'}</div>
                            </div>

                            <div class="row">
                              <div class="col-lg-3 col-md-4 label">Job</div>
                              <div class="col-lg-9 col-md-8">  {data[0].Employee_Details[0].technology ? data[0].Employee_Details[0].technology : '-'}</div>
                            </div>

                            <div class="row">
                              <div class="col-lg-3 col-md-4 label">projectmanagername</div>
                              <div class="col-lg-9 col-md-8">  {data[0].Employee_Details[0].projectmanagername ? data[0].Employee_Details[0].projectmanagername : '-'}</div>
                            </div>

                            <div class="row">
                              <div class="col-lg-3 col-md-4 label">Email</div>
                              <div class="col-lg-9 col-md-8">{data[0].Employee_Details[0].email ? data[0].Employee_Details[0].email : '-'}</div>
                              {data[0].Employee_Details[0].userRole=="Admin"   &&   <span style={{ color: "#4154f1" }} className='edititem' onClick={()=>editItem()}><FaEdit/></span>}

                            </div>

                          </div>
                   

                  </div>
                  {/* <!-- End Bordered Tabs --> */}

                </div>
              </div>

            </div>
          </div>
        </section>
        </>
                      
                  

      </main>
      {/* <!-- End #main --> */}

    </div>
  )
}

export default UserProfile