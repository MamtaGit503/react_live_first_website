import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuclick, setmenuclick] = useState(false);

  const toggle = () => {
    return setmenuclick (!menuclick)
  }

  return (
    <>
    <header className='header'>
            <ul className='navul' type='none'>
                <div>
                <li><Link exact="true" to='/' className="navlinklogo">Logo</Link></li>
                </div>
                <div class= "pagediv">
                <li><NavLink exact="true" to="/" className="navlink">Home</NavLink></li>
                <li><NavLink to="/about" className="navlink">About</NavLink></li>
                <li><NavLink to="/service" className="navlink">Service</NavLink></li>
                <li><NavLink to="/contact" className="navlink">Contact</NavLink></li>
                </div>
                <div className='menuicon'><p onClick={() => toggle()} style={{cursor:"pointer"}}><i class="fa-sharp fa-solid fa-bars"></i></p></div>
            </ul>
    </header>
    <div class= {menuclick ? "mobilpagediv animate__animated animate__flipInY" : "pagediv"}>
            <ul type='none' className='ultoggle'>
                <li className='limobile'><NavLink exact="true" to="/" className="navlink">Home</NavLink></li>
                <li className='limobile'><NavLink to="/about" className="navlink">About</NavLink></li>
                <li className='limobile'><NavLink to="/service" className="navlink">Service</NavLink></li>
                <li className='limobile'><NavLink to="/contact" className="navlink">Contact</NavLink></li>
            </ul>
    </div>
</>
  )
}

export default Navbar;