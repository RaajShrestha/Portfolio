import React from 'react'
import "./Header.css"
const navbar = () => {
  return (
    <>
    <nav className='nav_bar'>
      <label className='logo'>Raj K. Shrestha</label>
      <div className='nav_menu'>
        <ul className='nav_list'>
        <li className='nav_item'>
        <a href='#home' className='nav_link'><span>H</span>ome</a>
        </li>
        <li className='nav_item'>
        <a href='#home' className='nav_link'>About</a>
        </li>
        <li className='nav_item'>
        <a href='#home' className='nav_link'>Blog</a>
        </li>
        <li className='nav_item'>
        <a href='#home' className='nav_link'>Education</a>
        </li>
        <li className='nav_item'>
        <a href='#home' className='nav_link'>Project</a>
        </li>
        <li className='nav_item'>
        <a href='#home' className='nav_link'>Contact</a>
        </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default navbar
