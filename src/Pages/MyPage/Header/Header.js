import React from 'react'
import { NavLink } from 'react-router-dom'
import MyPhotoLogo from '../../../MyImages/MyPhotoLogo.webp'

const Header = () => {
  return (
    <div className='header'>
      <NavLink className="main-logo" to='/mypage'><img src={MyPhotoLogo} alt="Photo Logo" /></NavLink>


      <nav className="main">
        <ul className="main-menu">
          <li className="menu-item">
            <NavLink className="menu-value" to='/mypage/wedding'>Šventės</NavLink>
            </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/mypage/Portrait'>Portretai</NavLink>
            </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/mypage/Product'>Produktai</NavLink>
            </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/mypage/Nature'>Gamta</NavLink>
            </li>
          <li className="menu-item">
            <NavLink className="menu-value" to='/mypage/City'>Miestas</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header