import Image from 'next/image';

import React from 'react';
const Content_box1 = ({ imag, heading, imag2, para, imag3 ,showBar=true,button ,inputBar=false , img=true,color, colorButton=true }) => {

  const options = [
    { value: "homepage" },
    { value: "header" },
    { value: "footer" },
    { value: "content" },]
    
      // label: "──────────",
      const options2= [
        { value: "https://dashboard.accessibe.com", },
        { value: "/support",  },
        { value: "/compliance", label: "Compliance" },
        { value: "/accessscan", label: "Free audit" },
        { value: "/accesswidget", label: "Products" },
        { value: "/accessservices", label: "Services" },
        { value: "/company", label: "Company" },
        { value: "/partners", label: "Partners" },
        { value: "/reviews", label: "Reviews" },
        { value: "/pricing", label: "Pricing" },
        { value: "/accesswidget/examples", label: "Examples" },
        { value: "/accesswidget/artificial-intelligence", label: "Artificial intelligence" },
        { value: "/accesswidget/interface", label: "Accessibility interface" },
        { value: "/accesswidget/competition", label: "Accessibe vs competitors" },
        { value: "/integrations", label: "Cms integrations" },
        { value: "/accesswidget/security", label: "Security & privacy" },
        { value: "/company", label: "About accessibe" },
        { value: "/reviews", label: "Reviews" },
        { value: "/company/impact", label: "Our impact" },
        { value: "/company/vision", label: "Vision" },
        { value: "/company/careers", label: "Careers" },
        { value: "/blog", label: "Our blog" },
        { value: "/compliance", label: "Overview" },
        { value: "/compliance/wcag-21", label: "Wcag" },
        { value: "/compliance/ada-title-iii", label: "Ada" },
        { value: "/compliance/aoda", label: "Aoda" },
        { value: "/compliance/section-508", label: "Section 508" },
        { value: "/compliance/eaa", label: "Eaa/en301549" },
        { value: "/support/account", label: "My account" },
        { value: "/support/partners", label: "Partners" },
        { value: "/support/technical-support", label: "Tech support" },
        { value: "/support/customization", label: "Customization" },
        { value: "/support/installation", label: "Installation guides" },
        { value: "/support/product", label: "Product assistance" },
        { value: "/partners", label: "Partner program" },
        { value: "/partners/strategic", label: "Strategic partners" },
        { value: "/partners/affiliates", label: "Affiliate program" },
        { value: "/braille-monitor-letter", label: "Braille monitor letter" },
        { value: "/blog/knowledgebase/diy-the-full-guide-to-testing-your-websites-accessibility-wcag-and-ada-compliance-level", label: "Diy testing guide" },
        { value: "/accessscan", label: "Web accessibility audit" },
      ]
    
  return (
 
   <div className={`bg-[#F2F7FA] rounded-xl max-w-full  mb-5 py-[20px] px-[25px] cursor-pointer  "}`}>
 
      <div className="flex justify-center gap-3 mb-5">
         { img ?
          <Image height={20} width={20} src={imag} alt=""  />
        :
        null
        }
          <h2 className='text-[14px]'>{heading} </h2>
        </div>
       {inputBar ?
        <div className='bg-white  p-2 rounded-full cursor-pointer '>
          <select name="" id="" className='outline-none flex justify-between w-full'>
            <option value="">select an option</option>
            
            {options.map((item,index)=>{
              return(
                
                  <option key={index}>{item.value}</option>
                
              )
            })}
            <hr  />
            
            {options2.map((item,index)=>{
              return(
                
                  <option key={index}>{item.label}</option>
                
              )
            })}
          
          
          </select>
        </div>
      :
      null  
      }
         {
        showBar ?
         <div className="flex justify-between items-center bg-white rounded-full ">
              <div className='p-3 bg-[#146FF8] rounded-full flex justify-center items-center '>
                <Image height={10} width={10} src={imag2} alt="" />

              </div>
              <p className='text-[#146FF8] text-[13px] '>{para}</p>
              <div className='p-3 bg-[#146FF8] rounded-full flex justify-center items-center '>
                <Image height={10} width={10} src={imag3} alt=""  />

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