import React from 'react'
import logo from '../../logo.png'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo"/>
      <ul className='nav-links'>
        <li><Link to="/" className='nav-link'>home</Link></li>
        <li><NavLink to="about" className='nav-link'>about</NavLink></li>
        <li><NavLink to="/tours" className='nav-link'>tours</NavLink></li>
      </ul>
    </nav>
  )
}