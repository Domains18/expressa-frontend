import React from 'react'
import image from '../../Assets/img.jpeg'
import './About.css'
const About = () => {
  return (
    <div id='about'>
        <div className="title-container">
            <div>
              <h2>Know More About Us</h2>
            </div>
        </div>
        <div className="about-us">
            <img src={image} alt="" />
            <div className="content-about">
              <h1>what we do</h1>
              <div className="gallery">
                <article>
                  <div className="title">
                    <h2>Quality Writing</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, facere.
                  </div>
                </article>
                <article>
                  <div className="title">
                    <h2>Quality Writing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iusto?</p>
                  </div>
                </article>
                <article>
                  <div className="title">
                    <h2>Quality Writing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, veritatis?</p>
                  </div>
                </article>
                <article>
                  <div className="title">
                    <h2>Quality Writing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, veritatis?</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
    </div>
  )
}

export default About