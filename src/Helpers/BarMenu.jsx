import React from 'react'
import '../Styles/barMenu.css'
import championsLogo from '../assets/Images/champions-logo.png'
import { NavLink } from 'react-router-dom'

const BarMenu = () => {
  return (
    <nav className='barMenu'>
        <img src={championsLogo} alt="UEFA Champions League Logo" />
        <ul className='navLinks'>
            <li><NavLink to="/">Home</NavLink></li>
            <li className='dropDown'>
                <span>Statistics<i class="bi bi-arrow-down-circle"></i></span>
                <ul>
                    <li><NavLink to="/attacking">Attacking</NavLink></li>
                    <li><NavLink>Attempts</NavLink></li>
                    <li><NavLink>Defending</NavLink></li>
                    <li><NavLink>Disciplinary</NavLink></li>
                    <li><NavLink>Distributon</NavLink></li>
                    <li><NavLink>Goalkeeping</NavLink></li>
                    <li><NavLink>Goals</NavLink></li>
                    <li><NavLink>Key Stats</NavLink></li>
                </ul>
            </li>
        </ul>
    </nav>
  )
}

export default BarMenu