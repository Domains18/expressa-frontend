//eslint-disable-next-line
import React from 'react'
import '../../scss/Home.layout.scss'

const Home = () => {
    return (
        <div className="home">
            <div className="upperHome">
                <div className="logo">
                    <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="logo" />
                </div>
                <div className="right-options">
                    <p>About us</p>
                    <p>Services</p>
                    <p>Reach Out</p>
                    <p>Patners</p>
                    <div className="bold-option">
                        GET STARTED
                    </div>
                </div>
            </div>
            <div className="lowerHome">
                
            </div>
        </div>
    )
}

export default Home
