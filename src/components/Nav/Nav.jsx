import React from 'react';
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { GrUserExpert } from 'react-icons/gr';
import { FcServices } from 'react-icons/fc';
import { MdContactSupport } from 'react-icons/md'
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome></AiOutlineHome></a>
      <a href="#about" onClick={(e)=> setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><FcAbout></FcAbout></a>
      <a href="#experience"onClick={() => setActiveNav('experience')} className={activeNav === 'experience' ? 'active' : ''}><GrUserExpert></GrUserExpert></a>
      <a href="#services" onClick={()=> setActiveNav('services')} className={activeNav === 'services' ? 'active' : ''}><FcServices></FcServices></a>
      <a href="#contact" onClick={()=> setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><MdContactSupport></MdContactSupport></a>
    </nav>
  )
}

export default Nav