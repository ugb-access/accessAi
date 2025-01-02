import Image from 'next/image'
import React from 'react'

const Content_box2 = ({ imag, heading, onClick, customStyle, customHeading, onMouseOver }) => {

  return (
    <div className={`bg-[#F2F7FA] rounded-xl w-[45%] md:w-full  mb-5 py-[38px] px-3 hover:border border-#146FF8 cursor-pointer hover:scale-[1.0] ${customStyle}`} onClick={onClick} onMouseOver={onMouseOver}>
      <Image height={20} width={20} src={imag} alt="" className='h-[20px] w-[20px] mx-auto' />
      <div className={`text-[#1F2533] text-[14px] text-center mt-5 ${customHeading}`}>{heading}</div>
    </div>
  )
}

export default Content_box2;
