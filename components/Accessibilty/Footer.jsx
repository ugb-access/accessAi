import { FOOTER_ICON } from '@/svg/footerSvgGrabber';
import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-[#146FF8] flex justify-around py-1 rounded-b-xl' >
      <div className='flex'>
        <h2 className='text-white text-base'>Web Accessibility By</h2>
       <FOOTER_ICON /> 
      </div>
      <div className='flex items-center gap-1 text-white text-base cursor-pointer'>Learn more
        <Image height={3} width={3} src="/images/svgviewer-output (17).svg" alt="" className='h-3   w-3 rotate-90' />
      </div>
    </div>
  )
}

export default Footer