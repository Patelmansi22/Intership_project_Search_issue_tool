import React from 'react'
import "../Styles/Adminpanel.css";
import {MdOutlineDashboard } from "react-icons/md";
import {  Link} from "react-router-dom"
import SidebarMenu from 'react-bootstrap-sidebar-menu';
const Adminsidebar = () => {
  let data = localStorage.getItem("data");
data = JSON.parse(data)
  return (
    <>


 <aside id="sidebar" class="sidebar">

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

    </>
  )
}

export default Adminsidebar