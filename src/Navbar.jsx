import './Navbar.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

function Navbar() {
  return (
    <div className="bar">
      <h2>Flora</h2>
      <div className="pill">
        <a className='demo'>About</a>
        <a>Projects</a>
        <a>Contact</a>
        <a>Buy</a>
      </div>
    </div>
  )
}

export default Navbar
