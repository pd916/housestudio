import { ICONS } from '@/content'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <div className="w-full z-50 px-8 py-4 pt-9 border-b bg-black border-white flex items-center justify-between space-x-2"> 
    <div className='w-full flex gap-3'>
    {ICONS.map((item, index) => {
        const IconComponent = item.icon;
        return <IconComponent key={index} className="lg:w-6 w-3 h-3 lg:h-6 text-white cursor-pointer" />;
    })} 
    </div>

  <div className='flex items-center gap-3'>
    <h3 className='text-xs text-white'>Let&apos;s start a conversation.</h3>
    <div className="border-t border-white mt-4" />
    <p className='text-xs text-white'>abdullzzdesign@gmail.com</p>
  </div>
    </div>
  )
}

export default Footer
