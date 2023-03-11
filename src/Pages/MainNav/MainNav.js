import React from 'react'
import { NavLink } from 'react-router-dom'
import './MainNav.scss'

const MainNav = () => {
    return (

        <ul className='main-navigation'>
            <li>
                <NavLink className='navItem' to='/main'>Main Page</NavLink>
            </li>
            <li>
                <NavLink className='navItem' to='/mypage'>My Photo Portfolio</NavLink>
            </li>
            <li>
                <NavLink className='navItem' to='/figma'>Figma</NavLink>
            </li>
            <li>
                <NavLink className='navItem' to='/myapi'>My Api</NavLink>
            </li>

        </ul>
    )
}

export default MainNav