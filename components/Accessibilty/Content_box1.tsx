import React from 'react';
const Content_box1 = ({ imag, heading, imag2, para, imag3 ,showBar=true,button ,inputBar=false , img=true,color, colorButton=true }) => {
  return (
 
   <div className={`bg-[#F2F7FA] rounded-xl max-w-full  mb-5 py-[20px] px-[25px] cursor-pointer  "}`}>
 
      <div className="flex justify-center gap-3 mb-5">
         { img ?
          <img src={imag} alt="" className='h-[20px] w-[20px]' />
        :
        null
        }
          <h2 className='text-[14px]'>{heading} </h2>
        </div>
       {inputBar ?
        <div className='bg-white flex justify-between p-2 rounded-full  '>
          {/* <input type="text" placeholder='' className='outline-none placeholder:text-black px-[6px] ' /> */}
          <select name="" id="" className='outline-none'>select an option
            <option value="">s</option>
            <option value="">hlo</option>
            <option value=""></option>
          </select>
        </div>
      :
      null  
      }
         {
        showBar ?
         <div className="flex justify-between items-center bg-white rounded-full ">
              <div className='p-3 bg-[#146FF8] rounded-full flex justify-center items-center '>
                <img src={imag2} alt="" className='h-[10px] w-[10px]' />

              </div>
              <p className='text-[#146FF8] text-[13px] '>{para}</p>
              <div className='p-3 bg-[#146FF8] rounded-full flex justify-center items-center '>
                <img src={imag3} alt="" className='h-[10px] w-[10px]' />

              </div>
            </div>
            :
          null
      }
        
      {colorButton ? <div className='flex gap-1 justify-center'>
        <button className='h-[24px] w-[24px] bg-[#0076B4] border rounded-full'>{color}</button>
        <button className='h-[24px] w-[24px] bg-[#7a549c] border rounded-full'>{color}</button>
        <button className='h-[24px] w-[24px] bg-[#c83733] border rounded-full'>{color}</button>
        <button className='h-[24px] w-[24px] bg-[#D07021] border rounded-full'>{color}</button>
        <button className='h-[24px] w-[24px] bg-[#26999f] border rounded-full'>{color}</button>
        <button className='h-[24px] w-[24px] bg-[#4d7831] border rounded-full'>{color}</button>
        <button className='h-[24px] w-[24px] bg-white border rounded-full'>{color}</button>
        <button className='h-[24px] w-[24px] bg-black border rounded-full'>{color}</button>
      </div>
    : null  
  }
  <button className='mx-auto w-full mt-3'>{button}</button>
    </div>
 
  )
}

export default Content_box1
// 