import React from 'react'
import MyPhotoLogo from '../../../MyImages/MyPhotoLogo.webp'

const Header = () => {
  return (
    <div className='header'>
        <a className="main-logo" href="Pagrindinis.html"><img src={MyPhotoLogo} alt="Photo Logo" /></a>


        <nav className="main">
          <ul className="main-menu">
            <li className="menu-item"></li><a className="menu-value" href="Šventės.html">Šventės</a>
            <li className="menu-item"></li><a className="menu-value" href="Portretai.html">Portretai</a>
            <li className="menu-item"></li><a className="menu-value" href="Produktai.html">Produktai</a>
            <li className="menu-item"></li><a className="menu-value" href="Gamta.html">Gamta</a>
            <li className="menu-item"></li><a className="menu-value" href="Miestas.html">Miestas</a>
          </ul>
        </nav>
      </div>
  )
}

export default Header