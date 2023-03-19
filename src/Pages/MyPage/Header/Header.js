import React from 'react'
import { NavLink } from 'react-router-dom'
import MyPhotoLogo from '../../../MyImages/MyPhotoLogo.webp'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <NavLink className="main-logo" to='/my-page'><img src={MyPhotoLogo} alt="Photo Logo" /></NavLink>


      <nav className="main">
        <ul className="main-menu">
          <li className="menu-item">
            <NavLink className="menu-value" to='/my-page'>Pagrindinis</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/my-page/wedding'>Šventės</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/my-page/portrait'>Portretai</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/my-page/product'>Produktai</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/my-page/nature'>Gamta</NavLink>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Header