import React from 'react'
import {MdSearch } from "react-icons/md";
import { BsList } from "react-icons/bs";
import Adminsidebar from './Adminsidebar';
import {MdOutlineDashboard } from "react-icons/md";
import {  Link} from "react-router-dom"
const AdminNavbar = () => {
  let data = localStorage.getItem("data");
  data = JSON.parse(data)
  return (
    <div class="toggle-sidebar">
          <header id="header" class="header fixed-top d-flex align-items-center">
          <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt=""/>
        {/* <span class="d-none d-lg-block">NiceAdmin</span> */}
      </a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><BsList/></span>
    </button>
    </div>

{/* <div class="search-bar">
  <form class="search-form d-flex align-items-center" method="POST" action="#">
    <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
    <button type="submit" title="Search"><MdSearch/></button>
  </form>
</div>  */}

<nav class="header-nav " style={{    marginLeft: "765px", marginTop:"30px"}}>
  <ul class="d-flex align-items-center">

    <li class="nav-item d-block d-lg-none">
      <a class="nav-link nav-icon search-bar-toggle " href="#">
        <i class="bi bi-search"></i>
      </a>
    </li>


    <li class="nav-item dropdown3 ">

      <a class="nav-link nav-profile " href="#" data-bs-toggle="dropdown">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" alt="Profile" class="rounded-circle"/>
        <span class="d-none d-md-block dropdown-toggle ps-2">{data[0].Employee_Details[0].name}</span>
      </a>

      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li class="dropdown-header">
          <h6>{data[0].Employee_Details[0].name}</h6>
     
        </li>
        <li>
          <hr class="dropdown-divider"/>
        </li>

        <li>
          <a class="dropdown-item d-flex align-items-center" href="/profile">
            <i class="bi bi-person"></i>
            <span>My Profile</span>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider"/>
        </li>
        <li>
          <a class="dropdown-item d-flex align-items-center" href="/Login">
            <i class="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>

      </ul>
    </li>

  </ul>
</nav>

</header>
<nav class="navbar bg-body-tertiary ">
    <div class="container-fluid">
      {/* <a class="navbar-brand" href="#">Offcanvas navbar</a> */}
       <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{width:"251px"}}>
         <div class="offcanvas-header"  style={{width:"251px"}}>  
               {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
           </div>
    
           <aside id="sidebar1" class="sidebar1">

<ul class="sidebar-nav" id="sidebar-nav">

<li class="nav-item">
<Link class="nav-link " to="/admin">
<MdOutlineDashboard/>
<span>Dashboard</span>
</Link>
</li>


{data[0].Employee_Details[0].userRole=="Admin"  &&<li class="nav-item">
<Link class="nav-link collapsed"  to="/manager">
Manager   
</Link>
</li>}


{data[0].userRole=== 'manager' || data[0].Employee_Details[0].userRole=="Admin" &&   <li class="nav-item">
<Link class="nav-link collapsed"  to="/employe">
Employee   
</Link>

</li>}
<li class="nav-item">
<Link class="nav-link collapsed"  to="/issuepage">
Issue   
</Link>
</li>


</ul>
</aside> 
        </div>
       </div>
        </nav>
    </div>
  )
}

export default AdminNavbar