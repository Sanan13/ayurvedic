import React from 'react'
import img from '../component/image/LOGO.png'
// import '../component/Nav.css'
function Navbar() {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ">
  <img src={img} alt="" width="150px"/>
    {/* <a className="mx-3 navbar-brand" href="/home">Meera Aayurvedic</a> */}
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#products">Products</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default Navbar
