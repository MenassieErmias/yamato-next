import React from 'react'
import Link from "next/link"

const Navbar = () => {
  let linkStr = ""
  return (
    <nav>
      <h1>Yamato Engineering</h1>
      <Link href="/services">Services</Link>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar