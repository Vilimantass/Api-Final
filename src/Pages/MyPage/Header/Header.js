import React from 'react'
import { NavLink } from 'react-router-dom'
import MyPhotoLogo from '../../../MyImages/MyPhotoLogo.webp'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <NavLink className="main-logo" to='/vilimantas'><img src={MyPhotoLogo} alt="Photo Logo" /></NavLink>


      <nav className="main">
        <ul className="main-menu">
          <li className="menu-item">
            <NavLink className="menu-value" to='/vilimantas'>Pagrindinis</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/vilimantas/wedding'>Šventės</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/vilimantas/Portrait'>Portretai</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/vilimantas/Product'>Produktai</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/vilimantas/Nature'>Gamta</NavLink>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Header