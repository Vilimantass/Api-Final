import React from 'react'
import { NavLink } from 'react-router-dom'
import MyPhotoLogo from '../../../MyImages/MyPhotoLogo.webp'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <NavLink className="main-logo" to='/'><img src={MyPhotoLogo} alt="Photo Logo" /></NavLink>


      <nav className="main">
        <ul className="main-menu">
          <li className="menu-item">
            <NavLink className="menu-value" to='/'>Pagrindinis</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/wedding'>Šventės</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/portrait'>Portretai</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/product'>Produktai</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/nature'>Gamta</NavLink>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Header