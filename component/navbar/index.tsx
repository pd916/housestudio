
import React from 'react'
import Menu from './menu'


const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 px-8 pt-9 border-b border-white'>
        <div className='flex items-center justify-between md:w-full'>
        <h2 className='rus text-white text-lg leading-none'>AbdullzZ<br/>/Studio</h2>
        <p className='hidden lg:block rus text-xs text-white font-light'>Watch this ✨</p>
        <Menu/>
        </div>
    </nav>
  )
}

export default Navbar
