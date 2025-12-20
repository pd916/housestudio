import { heroSections } from '@/content'
import Image from 'next/image';
import React from 'react'

const Page = () => {
  return (
    <div className='w-full h-full bg-[#A20F11]'>
      <div className='pt-28 px-8 lg:p-28'>
      <h1 className='text-3xl rus text-white'>We create 3D worlds that your users can step  into .</h1>
      <h3 className='text-xs mono font-semibold text-white'>Crafting immersive web experiences that your users will never forget.</h3>
      </div>
      
     <div className="w-full flex flex-col gap-16 mt-12 lg:mt-0">
  {heroSections.map((section, idx) => {
    const isReverse = idx % 2 !== 0;

    return (
      <section
        key={idx}
        className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center"
      >
        <div
          className={`w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
            isReverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* TEXT */}
          <div className="z-10">
            <h1 className="text-3xl md:text-5xl rus font-bold text-white mb-4">
              {section.title}
            </h1>
            <h2 className="text-xl mono md:text-2xl text-white mb-4">
              {section.subtitle}
            </h2>
            <p className="text-white mono text-base md:text-lg max-w-md">
              {section.description}
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[300px] rounded-lg md:h-[450px] overflow-hidden">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="absolute inset-0 w-full h-full object-contain rounded-lg object-center"
            />
          </div>
        </div>
      </section>
    );
  })}
</div>



    </div>
  )
}

export default Page
