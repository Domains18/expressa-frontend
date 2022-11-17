import React from 'react';
import {HiOutlineArrowNarrowDown} from 'react-icons/hi'
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
            <div className="typewriter">
                <Typewriter
                options={{
                    strings: [
                        
                        'Hello', 'welcome to scribe' 
                        , 'For all your writing needs',
                    ],
                    autoStart: true,
                    loop: true
                }}
            />
            </div>
            <div className="new-text">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam earum exercitationem dolorem neque praesentium! Ipsam iusto hic illo officia consequuntur, molestias animi perspiciatis quaerat obcaecati voluptatem placeat quae dolorum, eum explicabo reprehenderit commodi dignissimos nostrum et. Sint modi ullam laudantium?
                </p>
            </div>
        </div>
        <div className="arrows">
            <HiOutlineArrowNarrowDown/>
            <HiOutlineArrowNarrowDown/>
            <HiOutlineArrowNarrowDown/>
        </div>
    </div>
  )
}

export default Header