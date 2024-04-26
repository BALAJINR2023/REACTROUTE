import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'
const NavigationMenu = () => {
  return (
    <>
    <nav>
      <div>
        <button><Link to="/">All</Link></button>
        <button><Link to="/full-stack-development">Full Stack Development</Link></button>
        <button><Link to="/data-science">Data Science</Link></button>
        <button><Link to="/cyber-security">Cyber Security</Link></button>
        <button><Link to="/career">Career</Link></button>
      </div>
    </nav>
    </>
  )
}
export default NavigationMenu