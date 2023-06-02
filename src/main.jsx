import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// *** React Router ***
//eslint-disable-next-line
import { BrowserRouter,  Routes, Route, Link} from 'react-router-dom'
import './global/globals.fonts.css'

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Dashboard from './Layouts/Dashboard/Dashboard.js'
import MyProfile from './components/Profile/MyProfile.js'
import Error from './Pages/Error/Error.js'
import SignUp from './settings/auth/SignUp.js'
import Auth from './settings/auth/Auth.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<App/>} />
        <Route path="/ourprofile" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/myprofile"  element={<MyProfile/>} />
        <Route path="*" element={<Error />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/signup" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
