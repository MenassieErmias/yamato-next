'use client'
import React from 'react'
import Link from "next/link"
import './../nav.modules.css'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";


const Navbar = () => {

  const [mobileMenuOn, setMobileMenuOn] = useState(false);
  return (
    <nav className='nav'>
      <div className="nav-container">
        <h1 className='nav-header'>Yamato Engineering</h1>

        {/* menu */}
        <ul className={mobileMenuOn ? 'nav-links-list' : 'nav-links-list display-none'}>
          <li className="nav-link-item">
            <Link className='nav-link' href="/services">Services</Link>
          </li>
          <li className="nav-link-item">
            <Link className='nav-link' href="/">Home</Link>
          </li>
          <li className="nav-link-item">
            <Link className='nav-link' href="/about">About</Link>
          </li>
          <li className="nav-link-item">
            <Link className='nav-link' href="/contact">Contact</Link>
          </li>
        </ul>

        <button
          className='mobile-menu-btn'
          onClick={() => setMobileMenuOn((mobileMenuOn) => !mobileMenuOn)}
        >
          {
            mobileMenuOn ?
              <IoIosClose className='hamburger-icon' />

              : <RxHamburgerMenu className='hamburger-icon' />
          }

        </button>
      </div>
    </nav >
  )
}

export default Navbar