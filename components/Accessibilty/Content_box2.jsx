import Image from 'next/image'
import React from 'react'

const Content_box2 = ({imag, heading }) => {

  return (
    <div className=' bg-[#F2F7FA] rounded-xl w-[45%] md:w-full  mb-5 py-[38px] px-3 hover:border border-blue-600 cursor-pointer hover:scale-[1.0]'>
      <Image height={20} width={20} src={imag} alt="" className='h-[20px] w-[20px] mx-auto' />
      <h2 className='text-[#1F2533] text-[14px] text-center mt-5'>{heading}</h2>
    </div>
  )
}

export default Content_box2
