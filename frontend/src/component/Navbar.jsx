import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li><Link className='link' to="/">Home</Link></li>
          <li><Link className='link' to="/about">About</Link></li>
          <li><Link className='link' to="/contact">Contact</Link></li>
          <li><Link className='link' to="/service">Service</Link></li>
          <li><Link className='link' to="/hook">Hooks</Link></li>
          <li><Link className='link' to="/login">Login</Link></li>
          <li><Link className='link' to="/signup">Signup</Link></li>
          <li><Link className='link' to="/counter">Counter</Link></li>
          <li><Link className='link' to="/todo">Todo</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
