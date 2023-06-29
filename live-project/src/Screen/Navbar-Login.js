import React from 'react'
import {MdSearch } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const NavbarLogin = () => {
  return (
    <div >
    <header id="header" class="header fixed-top d-flex align-items-center">

<div class="d-flex align-items-center justify-content-between">
<a href="index.html" class="logo d-flex align-items-center">
<img src="assets/img/logo.png" alt=""/>
<span class="d-none d-lg-block"></span>
</a>
<i class="bi bi-list toggle-sidebar-btn"></i>
</div>

{/* <div class="search-bar">
<form class="search-form d-flex align-items-center" method="POST" action="#">
<input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
<button type="submit" title="Search"><MdSearch/></button>
</form>
</div> */}

<nav class="header-nav ms-auto">
<ul class="d-flex align-items-center">

<li class="nav-item d-block d-lg-none">
<a class="nav-link nav-icon search-bar-toggle " href="#">
  <i class="bi bi-search"></i>
</a>
</li>


<li class="nav-item dropdown3 pe-3">

<Link to="/Login">

<Button variant="outline-secondary">Sigin</Button>
</Link>



</li>

</ul>
</nav>

</header>

</div>
  )
}

export default NavbarLogin