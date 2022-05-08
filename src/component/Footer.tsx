import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Footer.css'
const Footer = () => {
  return (
    <div className={"Footer_Container"}>
      <div className='Logo'>
      <h1>WHITEBOARD.</h1>
      <h3>Aesthetic Simple Board</h3>
      </div>
      <div className="footer_page">
        <Link className='link1' to={''}>Accounts</Link>
        <Link className='link2' to={''}>Contact</Link>
        
        <p>For Personal Assignment @2022</p>
      </div>
      <div className='Creator'>
        <h3>By Zumi</h3>
        <h3>Vinhou</h3>
       
      </div>
    </div>
  )
}

export default Footer