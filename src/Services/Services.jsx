import React from 'react'
import './Services.css'
import Stories from '../pages/Stories'
const Services = () => {
  return (
    <div id='services'>
      <Stories/>
      <div className="services">
        <div className="service-name">
          <h2>Service Name</h2>
          <div className="service-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla quasi tempora, error cum odit ratione nobis unde vero facere, officia explicabo ex tempore, repudiandae itaque consequatur hic aperiam? Assumenda.</p>
          </div>
        </div>
        <div className="service-name">
          <h2>Service Name</h2>
          <div className="service-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla quasi tempora, error cum odit ratione nobis unde vero facere, officia explicabo ex tempore, repudiandae itaque consequatur hic aperiam? Assumenda.</p>
          </div>
        </div>
        <div className="service-name">
          <h2>Service Name</h2>
          <div className="service-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla quasi tempora, error cum odit ratione nobis unde vero facere, officia explicabo ex tempore, repudiandae itaque consequatur hic aperiam? Assumenda.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services