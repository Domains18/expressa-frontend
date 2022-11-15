import React from 'react'
import './Header.css'
import Typewriter from 'typewriter-effect'
const Header = () => {
  return (
    <div className="header">
        <div className="header-txt">
            <h1>Scribe Studio</h1>
        </div>

        {/* body */}

        <div className="content-container">
            <Typewriter
                options={{
                    strings: [
                        'Hello', 'welcome to scribe'
                        , 'For all your writing services'
                    ],
                    autoStart: true,
                    loop: true
                }}
            />
        </div>
    </div>
  )
}

export default Header