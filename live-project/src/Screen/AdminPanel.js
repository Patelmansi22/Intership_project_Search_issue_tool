import React from 'react'
import "../Styles/Adminpanel.css";
import { BsCartFill } from "react-icons/bs";

// import {MdOutlineDashboard,MdSearch } from "react-icons/md";

// import {GrFormDown } from "react-icons/gr";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Adminsidebar from './Adminsidebar';
import AdminNavbar from './AdminNavbar';
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';


const closeNav=()=> {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("sidebar-nav").style.marginLeft= "0";
}
const pdata = [
    {
        name: 'Python',
        student: 13,
        fees: 10,
    },
    {
        name: 'Javascript',
        student: 15,
        fees: 12,
    },
    {
        name: 'PHP',
        student: 5,
        fees: 10,
    },
    {
        name: 'Java',
        student: 10,
        fees: 5,
    },
    {
        name: 'C#',
        student: 9,
        fees: 4,
    },
    {
        name: 'C++',
        student: 10,
        fees: 8,
    },
];
const AdminPanel = () => {
//  let data =localStorage.getItem("data")
// let d =JSON.parse(data)
// console.log("???",d[0]?.Employee_Details)
    return (
        <div>
            <AdminNavbar />

            <Adminsidebar />
            {/* <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>

                <section class="section dashboard">
                    <div class="">

                        <div class="">
                            <div class="row">
                                <div class="sa">
                                    <div class="card info-card sales-card">
                                        <div class="card-body">
                                            <h5 class="card-title">Total Manager <span>| Today</span></h5>
                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <BsCartFill />
                                                </div>


                                                <div class="ps-3">
                                                    <h6>145</h6>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div class="revenue">
                                    <div class="card info-card revenue-card">
                                        <div class="card-body">
                                            <h5 class="card-title">Total Employee <span>| This Month</span></h5>
                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <BsCartFill />
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="ps-3">
                                                        <h6>$3,264</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>  


                                <div class="cu" >

                                    <div class="card info-card customers-card">

                                        <div class="card-body">
                                            <h5 class="card-title"> Total Issue <span>| This Year</span></h5>
                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <BsCartFill />
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="ps-3">
                                                        <h6>1244</h6>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div class="card-body">
                                    <h5 class="card-title">Reports <span>/Today</span></h5>
                                    <div id="reportsChart"></div>
                                    <ResponsiveContainer width="125%" aspect={3}>
                                        <LineChart data={pdata} width={500} height={300} margin={{ top: 5, right: 300, left: -30, bottom: 5 }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programming"} />
                                            <YAxis />
                                            <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />

                                            <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </main> */}
            <main id="main" class="main">

<div class="pagetitle">
  <h1>Dashboard</h1>
  
</div>

<section class="section dashboard">
  <div class="row">

   
    <div class="col-lg-8">
      <div class="row">

     
        <div class="col-xxl-4 col-md-6">
          <div class="card info-card sales-card">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Sales <span>| Today</span></h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-cart"></i>
                </div>
                <div class="ps-3">
                  <h6>145</h6>
                  <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card info-card revenue-card">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Revenue <span>| This Month</span></h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-currency-dollar"></i>
                </div>
                <div class="ps-3">
                  <h6>$3,264</h6>
                  <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-xxl-4 col-xl-12">

          <div class="card info-card customers-card">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Customers <span>| This Year</span></h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-people"></i>
                </div>
                <div class="ps-3">
                  <h6>1244</h6>
                  <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

                </div>
              </div>

            </div>
          </div>

        </div>
        <div class="col-12">
          <div class="card">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Reports <span>/Today</span></h5>

     
              <div id="reportsChart">


            
   <ResponsiveContainer width="150%" aspect={3}>
                                        <LineChart data={pdata} width={500} height={300} margin={{ top: 5, right: 300, left: -30, bottom: 5 }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programming"} />
                                            <YAxis />
                                            <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />

                                            <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                
                                    </div>
                           

            </div>

          </div>
        </div>
      

      </div>
    </div>

  </div>
</section>

</main>
        </div>






//  <div>

//   <nav class="navbar bg-body-tertiary ">
//   <div class="container-fluid">
//     {/* <a class="navbar-brand" href="#">Offcanvas navbar</a> */}
//     <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//       <div class="offcanvas-header">
//         {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
//         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//       </div>
//       <Adminsidebar/>
//     </div>
//   </div>
// </nav>
//   {/* <aside id="sidebar" class="sidebar">

//     <ul class="sidebar-nav" id="sidebar-nav">

//       <li class="nav-item">
      
//         <Link class="nav-link " to="/admin">
// <MdOutlineDashboard/>
// <span>Dashboard</span>
// </Link>
        
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
//           <i class="bi bi-menu-button-wide"></i><span>Components</span><i class="bi bi-chevron-down ms-auto"></i>
//         </a>
//         <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
//           <li>
//             <a href="components-alerts.html">
//               <i class="bi bi-circle"></i><span>Alerts</span>
//             </a>
//           </li>
//           <li>
//             <a href="components-accordion.html">
//               <i class="bi bi-circle"></i><span>Accordion</span>
//             </a>
//           </li>
//           <li>
//             <a href="components-badges.html">
//               <i class="bi bi-circle"></i><span>Badges</span>
//             </a>
//           </li>
//           <li>
//             <a href="components-breadcrumbs.html">
//               <i class="bi bi-circle"></i><span>Breadcrumbs</span>
//             </a>
//           </li>
//           <li>
//             <a href="components-buttons.html">
//               <i class="bi bi-circle"></i><span>Buttons</span>
//             </a>
//           </li>
//           <li>
//             <a href="components-cards.html">
//               <i class="bi bi-circle"></i><span>Cards</span>
//             </a>
//           </li>
//           <li>
//             <a href="components-carousel.html">
//               <i class="bi bi-circle"></i><span>Carousel</span>
//             </a>
//           </li>
//           <li>
//             <a href="components-list-group.html">
//               <i class="bi bi-circle"></i><span>List group</span>
//             </a>
//           </li>
//           <li>
//             <a href="components-modal.html">
//               <i class="bi bi-circle"></i><span>Modal</span>
//             </a>
//           </li>
//           <li>
//             <a href="components-tabs.html">
//               <i class="bi bi-circle"></i><span>Tabs</span>
//             </a>
//           </li>
//           <li>
//             <a href="components-pagination.html">
//               <i class="bi bi-circle"></i><span>Pagination</span>
//             </a>
//           </li>
//           <li>
//             <a href="components-progress.html">
//               <i class="bi bi-circle"></i><span>Progress</span>
//             </a>
//           </li>
//           <li>
//             <a href="components-spinners.html">
//               <i class="bi bi-circle"></i><span>Spinners</span>
//             </a>
//           </li>
//           <li>
//             <a href="components-tooltips.html">
//               <i class="bi bi-circle"></i><span>Tooltips</span>
//             </a>
//           </li>
//         </ul>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
//           <i class="bi bi-journal-text"></i><span>Forms</span><i class="bi bi-chevron-down ms-auto"></i>
//         </a>
//         <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
//           <li>
//             <a href="forms-elements.html">
//               <i class="bi bi-circle"></i><span>Form Elements</span>
//             </a>
//           </li>
//           <li>
//             <a href="forms-layouts.html">
//               <i class="bi bi-circle"></i><span>Form Layouts</span>
//             </a>
//           </li>
//           <li>
//             <a href="forms-editors.html">
//               <i class="bi bi-circle"></i><span>Form Editors</span>
//             </a>
//           </li>
//           <li>
//             <a href="forms-validation.html">
//               <i class="bi bi-circle"></i><span>Form Validation</span>
//             </a>
//           </li>
//         </ul>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
//           <i class="bi bi-layout-text-window-reverse"></i><span>Tables</span><i class="bi bi-chevron-down ms-auto"></i>
//         </a>
//         <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
//           <li>
//             <a href="tables-general.html">
//               <i class="bi bi-circle"></i><span>General Tables</span>
//             </a>
//           </li>
//           <li>
//             <a href="tables-data.html">
//               <i class="bi bi-circle"></i><span>Data Tables</span>
//             </a>
//           </li>
//         </ul>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
//           <i class="bi bi-bar-chart"></i><span>Charts</span><i class="bi bi-chevron-down ms-auto"></i>
//         </a>
//         <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
//           <li>
//             <a href="charts-chartjs.html">
//               <i class="bi bi-circle"></i><span>Chart.js</span>
//             </a>
//           </li>
//           <li>
//             <a href="charts-apexcharts.html">
//               <i class="bi bi-circle"></i><span>ApexCharts</span>
//             </a>
//           </li>
//           <li>
//             <a href="charts-echarts.html">
//               <i class="bi bi-circle"></i><span>ECharts</span>
//             </a>
//           </li>
//         </ul>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
//           <i class="bi bi-gem"></i><span>Icons</span><i class="bi bi-chevron-down ms-auto"></i>
//         </a>
//         <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
//           <li>
//             <a href="icons-bootstrap.html">
//               <i class="bi bi-circle"></i><span>Bootstrap Icons</span>
//             </a>
//           </li>
//           <li>
//             <a href="icons-remix.html">
//               <i class="bi bi-circle"></i><span>Remix Icons</span>
//             </a>
//           </li>
//           <li>
//             <a href="icons-boxicons.html">
//               <i class="bi bi-circle"></i><span>Boxicons</span>
//             </a>
//           </li>
//         </ul>
//       </li>

//       <li class="nav-heading">Pages</li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" href="users-profile.html">
//           <i class="bi bi-person"></i>
//           <span>Profile</span>
//         </a>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" href="pages-faq.html">
//           <i class="bi bi-question-circle"></i>
//           <span>F.A.Q</span>
//         </a>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" href="pages-contact.html">
//           <i class="bi bi-envelope"></i>
//           <span>Contact</span>
//         </a>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" href="pages-register.html">
//           <i class="bi bi-card-list"></i>
//           <span>Register</span>
//         </a>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" href="pages-login.html">
//           <i class="bi bi-box-arrow-in-right"></i>
//           <span>Login</span>
//         </a>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" href="pages-error-404.html">
//           <i class="bi bi-dash-circle"></i>
//           <span>Error 404</span>
//         </a>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" href="pages-blank.html">
//           <i class="bi bi-file-earmark"></i>
//           <span>Blank</span>
//         </a>
//       </li>

//     </ul>

//   </aside> */}
// <Adminsidebar/>
//   <main id="main" class="main">

//     <div class="pagetitle">
//       <h1>Dashboard</h1>
//       <nav>
//         <ol class="breadcrumb">
//           <li class="breadcrumb-item"><a href="index.html">Home</a></li>
//           <li class="breadcrumb-item active">Dashboard</li>
//         </ol>
//       </nav>
//     </div>

//     <section class="section dashboard">
//       <div class="row">

       
//         <div class="col-lg-8">
//           <div class="row">

         
//             <div class="col-xxl-4 col-md-6">
//               <div class="card info-card sales-card">

//                 <div class="filter">
//                   <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
//                   <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li class="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>

//                     <li><a class="dropdown-item" href="#">Today</a></li>
//                     <li><a class="dropdown-item" href="#">This Month</a></li>
//                     <li><a class="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div class="card-body">
//                   <h5 class="card-title">Sales <span>| Today</span></h5>

//                   <div class="d-flex align-items-center">
//                     <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
//                       <i class="bi bi-cart"></i>
//                     </div>
//                     <div class="ps-3">
//                       <h6>145</h6>
//                       <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//             <div class="col-xxl-4 col-md-6">
//               <div class="card info-card revenue-card">

//                 <div class="filter">
//                   <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
//                   <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li class="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>

//                     <li><a class="dropdown-item" href="#">Today</a></li>
//                     <li><a class="dropdown-item" href="#">This Month</a></li>
//                     <li><a class="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div class="card-body">
//                   <h5 class="card-title">Revenue <span>| This Month</span></h5>

//                   <div class="d-flex align-items-center">
//                     <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
//                       <i class="bi bi-currency-dollar"></i>
//                     </div>
//                     <div class="ps-3">
//                       <h6>$3,264</h6>
//                       <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//             <div class="col-xxl-4 col-xl-12">

//               <div class="card info-card customers-card">

//                 <div class="filter">
//                   <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
//                   <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li class="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>

//                     <li><a class="dropdown-item" href="#">Today</a></li>
//                     <li><a class="dropdown-item" href="#">This Month</a></li>
//                     <li><a class="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div class="card-body">
//                   <h5 class="card-title">Customers <span>| This Year</span></h5>

//                   <div class="d-flex align-items-center">
//                     <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
//                       <i class="bi bi-people"></i>
//                     </div>
//                     <div class="ps-3">
//                       <h6>1244</h6>
//                       <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

//                     </div>
//                   </div>

//                 </div>
//               </div>

//             </div>
//             <div class="col-12">
//               <div class="card">

//                 <div class="filter">
//                   <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
//                   <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li class="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>

//                     <li><a class="dropdown-item" href="#">Today</a></li>
//                     <li><a class="dropdown-item" href="#">This Month</a></li>
//                     <li><a class="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div class="card-body">
//                   <h5 class="card-title">Reports <span>/Today</span></h5>

         
//                   <div id="reportsChart"></div>

                 

//                 </div>

//               </div>
//             </div>
//             <div class="col-12">
//               <div class="card recent-sales overflow-auto">

//                 <div class="filter">
//                   <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
//                   <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li class="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>

//                     <li><a class="dropdown-item" href="#">Today</a></li>
//                     <li><a class="dropdown-item" href="#">This Month</a></li>
//                     <li><a class="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div class="card-body">
//                   <h5 class="card-title">Recent Sales <span>| Today</span></h5>

//                   <table class="table table-borderless datatable">
//                     <thead>
//                       <tr>
//                         <th scope="col">#</th>
//                         <th scope="col">Customer</th>
//                         <th scope="col">Product</th>
//                         <th scope="col">Price</th>
//                         <th scope="col">Status</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <th scope="row"><a href="#">#2457</a></th>
//                         <td>Brandon Jacob</td>
//                         <td><a href="#" class="text-primary">At praesentium minu</a></td>
//                         <td>$64</td>
//                         <td><span class="badge bg-success">Approved</span></td>
//                       </tr>
//                       <tr>
//                         <th scope="row"><a href="#">#2147</a></th>
//                         <td>Bridie Kessler</td>
//                         <td><a href="#" class="text-primary">Blanditiis dolor omnis similique</a></td>
//                         <td>$47</td>
//                         <td><span class="badge bg-warning">Pending</span></td>
//                       </tr>
//                       <tr>
//                         <th scope="row"><a href="#">#2049</a></th>
//                         <td>Ashleigh Langosh</td>
//                         <td><a href="#" class="text-primary">At recusandae consectetur</a></td>
//                         <td>$147</td>
//                         <td><span class="badge bg-success">Approved</span></td>
//                       </tr>
//                       <tr>
//                         <th scope="row"><a href="#">#2644</a></th>
//                         <td>Angus Grady</td>
//                         <td><a href="#" class="text-primar">Ut voluptatem id earum et</a></td>
//                         <td>$67</td>
//                         <td><span class="badge bg-danger">Rejected</span></td>
//                       </tr>
//                       <tr>
//                         <th scope="row"><a href="#">#2644</a></th>
//                         <td>Raheem Lehner</td>
//                         <td><a href="#" class="text-primary">Sunt similique distinctio</a></td>
//                         <td>$165</td>
//                         <td><span class="badge bg-success">Approved</span></td>
//                       </tr>
//                     </tbody>
//                   </table>

//                 </div>

//               </div>
//             </div>
//             <div class="col-12">
//               <div class="card top-selling overflow-auto">

//                 <div class="filter">
//                   <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
//                   <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li class="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>

//                     <li><a class="dropdown-item" href="#">Today</a></li>
//                     <li><a class="dropdown-item" href="#">This Month</a></li>
//                     <li><a class="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div class="card-body pb-0">
//                   <h5 class="card-title">Top Selling <span>| Today</span></h5>

//                   <table class="table table-borderless">
//                     <thead>
//                       <tr>
//                         <th scope="col">Preview</th>
//                         <th scope="col">Product</th>
//                         <th scope="col">Price</th>
//                         <th scope="col">Sold</th>
//                         <th scope="col">Revenue</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <th scope="row"><a href="#"><img src="assets/img/product-1.jpg" alt=""/></a></th>
//                         <td><a href="#" class="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
//                         <td>$64</td>
//                         <td class="fw-bold">124</td>
//                         <td>$5,828</td>
//                       </tr>
//                       <tr>
//                         <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt=""/></a></th>
//                         <td><a href="#" class="text-primary fw-bold">Exercitationem similique doloremque</a></td>
//                         <td>$46</td>
//                         <td class="fw-bold">98</td>
//                         <td>$4,508</td>
//                       </tr>
//                       <tr>
//                         <th scope="row"><a href="#"><img src="assets/img/product-3.jpg" alt=""/></a></th>
//                         <td><a href="#" class="text-primary fw-bold">Doloribus nisi exercitationem</a></td>
//                         <td>$59</td>
//                         <td class="fw-bold">74</td>
//                         <td>$4,366</td>
//                       </tr>
//                       <tr>
//                         <th scope="row"><a href="#"><img src="assets/img/product-4.jpg" alt=""/></a></th>
//                         <td><a href="#" class="text-primary fw-bold">Officiis quaerat sint rerum error</a></td>
//                         <td>$32</td>
//                         <td class="fw-bold">63</td>
//                         <td>$2,016</td>
//                       </tr>
//                       <tr>
//                         <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt=""/></a></th>
//                         <td><a href="#" class="text-primary fw-bold">Sit unde debitis delectus repellendus</a></td>
//                         <td>$79</td>
//                         <td class="fw-bold">41</td>
//                         <td>$3,239</td>
//                       </tr>
//                     </tbody>
//                   </table>

//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>

//   </main>


//  </div>
    )
}

export default AdminPanel