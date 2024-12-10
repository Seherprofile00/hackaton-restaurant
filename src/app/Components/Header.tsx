import Link from 'next/link'
import React from 'react'
import { RiVipCrownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (<>
    <div className='Header-main' >
        <div className='Header-main-logo'>Food<span className='Header-main-logo-white'>tuck</span></div>
        
        <ul className='Header-main-ul'><div className='Header-main-div'>
        <Link className="Header-main-links" href="/">Home</Link>
        <Link className="Header-main-links" href="/">Menu</Link>
        <Link className="Header-main-links" href="/">Blog</Link>
        <Link className="Header-main-links" href="/">Pages</Link>
        <select name='English' className="Header-main-links-About  Header-main-links">
            <option value="blog, BLOG" >About</option>
            <option value="blog, BLOG" >Blog</option>
            <option value="blog, BLOG" >Services</option>
        </select>
        <Link className="Header-main-links" href="/">Shop</Link>
        <Link className="Header-main-links" href="/">Contact</Link>
<div>
        <input className="Header-search-bar"type='search' placeholder='Search..'/> 
        <CiSearch className='search' />
        <RiVipCrownLine className='crown'/>

        </div >
        
        </div>
          
        
        
         </ul>
        
         
        
        
        
        
        
        </div>

    </>
  )
}

export default Header