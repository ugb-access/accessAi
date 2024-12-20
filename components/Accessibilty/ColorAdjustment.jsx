import React from 'react'
import Content_box2 from './Content_box2';
import Content_box1 from './Content_box1';

const ColorAdjustment = () => {


  return (






<div className='m-5 bg-[#fff] p-5 rounded-xl '>
<h2 className='text-[18px] pb-5'>Content Adjustments</h2>

<div className='flex flex-wrap lg:flex-nowrap gap-5'>
<div className=' flex flex-wrap gap-5 md:gap-0 lg w-full lg:w-[30%] '>
        <Content_box2
            imag={"/images/svgviewer-output (29).svg"}
            heading={"Dark Contrast"}
        />
        <Content_box2
            imag={"/images/svgviewer-output (32).svg"}
            heading={"High Saturation"}
        />
        <Content_box2
            imag={"/images/svgviewer-output (33).svg"}
            heading={"Monochrome"}
        />
        <Content_box2
            imag={"/images/svgviewer-output (34).svg"}
            heading={"Low Saturation"}
        />
  

    </div>
    <div className='w-full lg:flex-1'>
    <div className='flex gap-5 '>
 <Content_box2
       imag={"/images/svgviewer-output (30).svg"}
       heading={"Adjust Text Colors"}
        />
 <Content_box2
       imag={"/images/svgviewer-output (31).svg"}
       heading={"Adjust Title Colors"}
        />

 </div>
        <Content_box1
            heading={"Adjust Text Colors"}
            button={"cancel"}
            showBar={false}
            colorButton={true}
            img={false}
        />
        <Content_box1
            heading={"Adjust Title Colors"}
            showBar={false}
            img={false}
            colorButton={true}
            button={"cancel"}
        />
        <Content_box1
            heading={"Adjust Background Colors"}
            showBar={false}
            img={false}
            colorButton={true}
            button={"cancel"}
        />


    </div>
   
</div>
</div>
  )
}

export default ColorAdjustment;