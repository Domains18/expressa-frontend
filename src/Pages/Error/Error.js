//eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/error.pages.scss';

const Error = () => {
  return (
    <div className="error-container">
      <div className="error">
        <div className="error-title">
          <h1>ERROR <span>404</span></h1>
        </div>
        <div className="error-content">
          <p>Requested page <span>NOT FOUND</span></p>
          <Link>
            Go back to <span className='home-link'>Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
