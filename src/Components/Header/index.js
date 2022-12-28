import {HiMenu, HiUserCircle} from 'react-icons/hi'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <div className="menu">
        <HiMenu />
      </div>
      <h1 className="logo-name">IndigoLearn</h1>
    </div>
    <div>
      <ul className="list-container">
        <li className="list-item">BUY COURSES</li>
        <li className="list-item">BUY BOOKS</li>
        <li className="list-item">PROGRAMS</li>
        <li className="list-item">FREE RESOURCES</li>
      </ul>
    </div>
    <button type="submit" className="login-btn">
      <div className="user-icon">
        <HiUserCircle />
      </div>
      Log In/Sign Up
    </button>
  </div>
)

export default Header
