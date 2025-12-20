import Footer from '@/component/footer'
import Navbar from '@/component/navbar'
import React from 'react'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='relative overflow-hidden h-full w-full'>
        <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default MainLayout
