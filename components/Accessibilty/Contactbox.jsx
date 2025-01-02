import Content_box1 from './Content_box1'
import Content_box2 from './Content_box2'
import React, { useState } from 'react';


const Contactbox = () => {
    const [bold, setBold] = useState(false)
    const textBold = () => {
        setBold(!bold)
        const title = document.querySelectorAll('h1,h2,h3,h4,h5,h6,a,p')

        if (!bold) {
            document.body.style.fontWeight = '500'
            title.forEach((title) => {
                title.style.fontWeight = '800';
            })
        } else {
            document.body.style.fontWeight = ''
            title.forEach((title) => {
                title.style.fontWeight = '';
            })

        }
    }
    const [highlight, setHighlight] = useState(false)
    const highlightAllTitles = () => {
        setHighlight(!highlight)
        const title = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
        if (highlight) {
            title.forEach((title) => {
                title.style.border = '';
                title.style.padding = '';
            })
        } else {
            title.forEach((title) => {
                title.style.border = '2px solid #146FF8';
                title.style.padding = '5px';
            })
        }
    }
    const [link, setLink] = useState(false)
    const highlightAllLink = () => {
        setLink(!link)
        const title = document.querySelectorAll('a')
        if (link) {
            title.forEach((title) => {
                title.style.border = '';
                title.style.padding = '';

            })
        } else {
            title.forEach((title) => {
                title.style.border = '2px solid #ff9a68';
                title.style.padding = '5px';
            })
        }
    }
    const [textcenter, setTextcenter] = useState(false)
    const allTextCenter = () => {
        setTextcenter(!textcenter)
        document.body.classList.add('center-text');
        const body = document.body;
        if (textcenter) {
            body.style.textAlign = '';
        } else {
            body.style.textAlign = 'center';
        }
    }
    const [textleft, setTextleft] = useState(false)
    const allTextLeft = () => {
        setTextleft(!textleft)
        const body = document.body;
        if (textleft) {
            body.style.textAlign = '';
        } else {
            body.style.textAlign = 'left';
        }
    }

    const [textright, setTextright] = useState(false)
    const allTextRight = () => {
        setTextright(!textright)

        const body = document.body;
        if (textright) {
            body.style.textAlign = '';
        } else {
            body.style.textAlign = 'right';
        }
    }



    return (
        <div className='m-5 bg-[#fff] p-5 rounded-xl '>
            <div className='text-[18px] pb-5'>Content Adjustments</div>

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
                            onClick={highlightAllTitles}
                            customStyle={highlight && "!bg-[#146FF8] "}
                            customHeading={highlight && "!text-[#fff]"}

                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (28).svg"}
                            heading={"Highlight Links"}
                            onClick={highlightAllLink}
                            customStyle={link && "!bg-[#146FF8] "}
                            customHeading={link && "!text-[#fff]"}
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
                        onClick={textBold}
                        customStyle={bold && "!bg-[#146FF8] "}
                        customHeading={bold && "!text-[#fff]"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (23).svg"}
                        heading={"Text Magnifier"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (20).svg"}
                        heading={"Text Center"}
                        onClick={allTextCenter}
                        customStyle={textcenter && "!bg-[#146FF8] "}
                        customHeading={textcenter && "!text-[#fff]"}

                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (22).svg"}
                        heading={"Align Left"}

                        onClick={allTextLeft}
                        customStyle={textleft && "!bg-[#146FF8] "}
                        customHeading={textleft && "!text-[#fff]"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (21).svg"}
                        heading={"Align Right"}
                        onClick={allTextRight}
                        customStyle={textright && "!bg-[#146FF8] "}
                        customHeading={textright && "!text-[#fff]"}
                    />

                </div>
            </div>
        </div>
    )
}

export default Contactbox