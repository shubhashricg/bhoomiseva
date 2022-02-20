import React from 'react';
import './navbar.css';
import logo from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-transparent">
    <div class="container-fluid">
      <img src={logo} alt="Bhoomi Seva Logo" className='removePC' width="120" height="120" />
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} size="xl" style={{"color": "white"}} />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/bhoomiseva">HOME</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#!" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PROJECTS
          </a>
          <ul class="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="/bhoomiseva/#/environment">ENVIRONMENT</a></li>
            <li><a class="dropdown-item" href="/bhoomiseva/#/education">EDUCATION</a></li>
            <li><a class="dropdown-item" href="/bhoomiseva/#/orphanage-support">ORPHANAGE SUPPORT</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bhoomiseva/#/get-involved">GET INVOLVED</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bhoomiseva/#/donate">DONATE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bhoomiseva/#/contact">CONTACT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bhoomiseva/#/about-us">ABOUT US</a>
        </li>
      </ul>
        <a href="https://www.facebook.com/bhoomiseve" rel="noreferrer" target="_blank" className='social-link'><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
        <a href="#!" className='social-link'><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
        <a href="#!" className='social-link'><FontAwesomeIcon icon={faTwitter}  size="lg" /></a>
    </div>
  </div>
</nav>
    </div>
  )
}
