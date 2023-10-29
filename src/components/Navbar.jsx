"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'

const navLinks = [
  {
    title: "About",
    path: "#about"
  },
  {
    title: "Projects",
    path: "#projects"
  },
  {
    title: "Contact",
    path: "#contact"
  }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 md:p-8">

        <Link href={"/"} className='flex flex-row items-center justify-center'>
          <Image
            src="/images/logo.png"
            alt="Logo"
            height={40}
            width={40}
          />
          <div className='text-white text-2xl font-bold px-4'>Kunstlab</div>
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className='flex flex-row items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className='flex flex-row items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id='navbar'>
          <ul className='flex md:flex-row md:space-x-8 mt-0'>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />

                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} />
        : null
      }
    </nav>
  )
}

export default Navbar