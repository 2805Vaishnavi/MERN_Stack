import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar">
                <li><Link className='Link' to="/">Home</Link></li>
                <li><Link className='Link' to="/About">About</Link></li>
                <li><Link className='Link' to="/Contact">Contact</Link></li>
                <li><Link className='Link' to="/Service">Service</Link></li>
                <li><Link className='Link' to="/hook">Hook</Link></li>
                <li><Link className='Link' to="/login">Login</Link></li>
                <li><Link className='Link' to="/Signup">Signup</Link></li>
                 <li><Link className='Link' to="/todo">Todo</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar