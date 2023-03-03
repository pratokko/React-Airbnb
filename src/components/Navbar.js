import React from 'react'
import logo from '../images/bnb-logo.png'

function Navbar() {
  return (
    <nav className='nav'>
        <img src={logo} className='nav--image' />
    </nav>
  )
}

export default Navbar