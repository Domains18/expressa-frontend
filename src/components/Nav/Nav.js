//eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/nav.components.scss'
const Nav = () => {
  return (
    <nav className=' nav ' >
      <div className="our-logo">
        <Link to='/'>
          <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="logo" />
        </Link>
      </div>
      <div className="nav-links">
        <span className='nav-link'>Dashboard</span>
        <span className='nav-link'>MyProfile</span>
      </div>
    </nav>
  )
}

export default Nav
