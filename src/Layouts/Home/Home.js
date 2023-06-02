//eslint-disable-next-line
import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/home.layouts.scss'

const Home = () => {
    return (
        <div className="home">
            <div className="upperHome">
                <div className="logo">
                    <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="logo" />
                </div>
                <div className="right-options">
                    <p> <Link to="/ourprofile">About Us</Link> </p>
                    <p>Contribute</p>
                    <p>Reach Out</p>
                    <p>Faqs</p>
                    <div className="bold-option">
                        GET STARTED
                    </div>
                </div>
            </div>
            <div className="lowerHome">
                <div className="banner">
                    <div className="banner-text">
                        <h1>
                            Using Tech and Engineering to beat scammers, fraud and ingenuine PSVs in kenyan public transport
                        </h1>
                        <p>
                            We are a team of engineers and tech enthusiasts who are passionate about solving the problem of ingenuine PSVs in kenyan public transport
                        </p>
                    </div>
                </div>
                <div className="nav-buttons">
                <button>User</button>
                <button>Developer</button>
            </div>
            </div>
            
        </div>
    )
}

export default Home
