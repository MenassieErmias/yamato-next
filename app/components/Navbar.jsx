'use client'
import React from 'react'
import Link from "next/link"
import './../nav.modules.css'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

  const [mobileMenuOn, setMobileMenuOn] = useState(false);
  return (
    <nav className='nav'>
      <div className="nav-container">
        <h1 className='nav-header'>Yamato Engineering</h1>

        <button
          className='mobile-menu-btn'
          onClick={(mobileMenuOn) => setMobileMenuOn(!mobileMenuOn)}
        >
          <RxHamburgerMenu className='hamburget-icon' />
        </button>
        <ul className="nav-links-list display-none">
          <li className="nav-link-item">
            <Link href="/services">Services</Link>
          </li>
          <li className="nav-link">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link href="/about">About</Link>
          </li>
          <li className="nav-link">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav >
  )
}

export default Navbar