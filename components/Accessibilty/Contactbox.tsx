import React from 'react'
import Content_box1 from './Content_box1'
import Content_box2 from './Content_box2'

const Contactbox = () => {
    const data = [
        {
            imag: "/images/svgviewer-output (16).svg",
            heading: "content Scaling",
            imag2: "/images/svgviewer-output (18).svg",
            para: "Default",
            imag3: "/images/svgviewer-output (17).svg",
            type: "large"
        },

        {
            imag: "/images/svgviewer-output (19).svg",
            heading: "Readable Font",
            type: "small"
        },
        {
            imag: "/images/svgviewer-output (27).svg",
            heading: "Highlight Titles",
            type: "small"
        },


        {
            imag: "/images/svgviewer-output (20).svg",
            heading: "Text Magnifier",
            type: "small"
        },
        {
            imag: "/images/svgviewer-output (28).svg",
            heading: "Highlight Links",
            type: "small"
        },
        {
            imag: "/images/svgviewer-output (23).svg",
            heading: "Text Center",
            type: "small"
        },
        ,
        {
            imag: "/images/svgviewer-output (24).svg",
            heading: "Adjust Font Sizing",
            imag2: "/images/svgviewer-output (18).svg",
            para: "Default",
            imag3: "/images/svgviewer-output (17).svg",
            type: "large"
        },


        {
            imag: "/images/svgviewer-output (21).svg",
            heading: "Align Left",
            type: "small"
        },




        {
            imag: "/images/svgviewer-output (25).svg",
            heading: "Adjust Line Height",
            imag2: "/images/svgviewer-output (18).svg",
            para: "Default",
            imag3: "/images/svgviewer-output (17).svg",
            type: "large"
        },
        {
            imag: "/images/svgviewer-output (22).svg",
            heading: "Align Right",
            type: "small"
        },
        ,
        {
            imag: "/images/svgviewer-output (26).svg",
            heading: "Adjust Letter Spacing",
            imag2: "/images/svgviewer-output (18).svg",
            para: "Default",
            imag3: "/images/svgviewer-output (17).svg",
            type: "large"
        },

        ,





    ]

    return (
        <div className='m-5 bg-[#fff] p-5 rounded-xl '>
            <h2 className='text-[18px] pb-5'>Content Adjustments</h2>

            <div className='flex flex-wrap lg:flex-nowrap gap-5'>
                <div className='w-full lg:flex-1'>
                    <Content_box1
                        imag={"/images/svgviewer-output (16).svg"}
                        heading={"content Scaling"}
                        imag2={"/images/svgviewer-output (18).svg"}
                        para={"Default"}
                        imag3={"/images/svgviewer-output (17).svg"}
                        colorButton={false}

                    />
             <div className='flex gap-5 '>
             <Content_box2
                   imag={"/images/svgviewer-output (27).svg"}
                   heading={"Highlight Titles"}
                    />
             <Content_box2
                   imag={"/images/svgviewer-output (28).svg"}
                   heading={"Highlight Links"}
                    />

             </div>
             <Content_box1
                        imag={"/images/svgviewer-output (24).svg"}
                        heading={"Adjust Font Sizing"}
                        imag2={"/images/svgviewer-output (18).svg"}
                        para={"Default"}
                        imag3={"/images/svgviewer-output (17).svg"}
                        colorButton={false}

                    />
             <Content_box1
                        imag={"/images/svgviewer-output (25).svg"}
                        heading={"Adjust Line Height"}
                        imag2={"/images/svgviewer-output (18).svg"}
                        para={"Default"}
                        imag3={"/images/svgviewer-output (17).svg"}
                        colorButton={false}

                    />
             <Content_box1
                        imag={"/images/svgviewer-output (26).svg"}
                        heading={"Adjust Letter Spacing"}
                        imag2={"/images/svgviewer-output (18).svg"}
                        para={"Default"}
                        imag3={"/images/svgviewer-output (17).svg"}
                        colorButton={false}

                    />

                </div>
                <div className=' flex flex-wrap gap-5 md:gap-0 lg w-full lg:w-[30%]'>
                    <Content_box2
                        imag={"/images/svgviewer-output (19).svg"}
                        heading={"Readable Font"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (23).svg"}
                        heading={"Text Magnifier"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (20).svg"}
                        heading={"Text Center"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (22).svg"}
                        heading={"Align Left"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (21).svg"}
                        heading={"Align Right"}
                    />

                </div>
            </div>
        </div>
    )
}

export default Contactbox