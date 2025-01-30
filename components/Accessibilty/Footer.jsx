import { FOOTER_ICON } from '@/svg/footerSvgGrabber';
import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div id="accessibilty" className=' bg-primary flex justify-around py-1 rounded-b-lg fixed w-full md:w-[50%] lg:w-[48%] xl:w-[37%]   bottom-0 z-10' >
      <div id="accessibilty" className='flex '>
        <div id="accessibilty" className='text-white text-base'>Web Accessibility By</div>
        <FOOTER_ICON />
      </div>
      <div id="accessibilty" className='flex items-center gap-1 text-white text-base cursor-pointer'>Learn more
        <Image height={3} width={3} src="/images/svgviewer-output (17).svg" alt="" id="accessibilty" className='h-3   w-3 rotate-90' />
      </div>
    </div>
  )
}

export default Footer