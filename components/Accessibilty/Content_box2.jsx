import { Accessibility } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const Content_box2 = ({ imag, heading, onClick, customStyle, customHeading, onMouseOver, id }) => {

  return (

    <div id="accessibilty" className={` bg-[#F2F7FA] rounded-xl w-[45%] md:w-full  mb-5 py-[38px] px-2 hover:outline hover:outline-2 hover:outline-primary  cursor-pointer hover:scale-100  ${customStyle}`} onClick={onClick} onMouseOver={onMouseOver}>
      <Image height={20} width={20} src={imag} alt="" id="accessibilty" className={`h-[20px] w-[20px] mx-auto ${customStyle}`} />
      <div id="accessibilty" className={`text-[#1F2533] text-[14px] text-center mt-5 ${customStyle}`}>{heading}</div>
    </div>
  )
}

export default Content_box2;
