import React from 'react'
import Link from "next/link"

const Navbar = () => {
  let linkStr = ""
  return (
    <nav>
      <h1>Yamato Engineering</h1>
      <Link href={linkStr}>Services</Link>
      <Link href={linkStr}>Home</Link>
      <Link href={linkStr}>About</Link>
      <Link href={linkStr}>Contact</Link>
    </nav>
  )
}

export default Navbar