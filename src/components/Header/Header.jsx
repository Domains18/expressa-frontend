import React from 'react'
import Typewriter from 'typewriter-effect'
import './Header.css'
const Header = () => {
  return (
    <div id='Header'>
        <section>
              <div class="content">
                  <Typewriter
                  options={{
                    strings: ["Hello, Welcome to Scribe Studio",
                            "Write to us: sribeug@gmail.com",
                            'Call Us: +25674475478'
                  ],
                  autoStart: true,
                  loop: true,
                  }}
                  />
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, ducimus alias quas eveniet iste deleniti possimus nostrum ratione nulla similique assumenda voluptatem a consectetur, tenetur laborum quia optio, magnam dolorum.</p>
              </div>
        </section>
    </div>
  )
}

export default Header