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
              <div className="title-container">
                <h1>Quick Links</h1>
              </div>
              <div className="gallery">
                <article>
                  <div className="title">
                    <h2>Quality Writing</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, facere.</p>
                    <div><a href="/">Learn More</a></div>
                  </div>
                </article>
                <article>
                  <div className="title">
                    <h2>Quality Writing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iusto?</p>
                    <div><a href="/">Learn More</a></div>
                  </div>
                </article>
                <article>
                  <div className="title">
                    <h2>Quality Writing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, veritatis?</p>
                    <div><a href="/">Learn More</a></div>
                  </div>
                </article>
                <article>
                  <div className="title">
                    <h2>Quality Writing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, veritatis?</p>
                    <div><a href="/">Learn More</a></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
    </div>
  )
}

export default About