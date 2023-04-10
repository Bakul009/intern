import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="container">
    
    <a class="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src="https://get.xometry.eu/static/media/logo.7208521cee109d963aa833c0d67cf12e.svg"
        alt=""
      />
    </a>

  
    
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      
      <ul class="navbar-nav me-auto  mb-lg-">
        <li class="nav-item">
        <button type="button" class="btn btn-light me-3">
          <a class="btn btn" href="/login">Customer area</a>
          </button>
        </li>
      </ul>
      

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-light me-3">
        <Link to="/login">Login</Link>
        
        </button>
        
       
       
    
       
      </div>
      <button type="button" class="btn btn-light me-3">
        <Link to="/login">My Account</Link>
        
        </button>
    </div>
    
  </div>
  
</nav>
    </div>
  )
}
