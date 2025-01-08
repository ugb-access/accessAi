// import React from 'react'
import Content_box2 from './Content_box2';
import Content_box1 from './Content_box1';
import React, { useEffect, useState } from 'react';


const ColorAdjustment = () => {
    const colors = ["#0076B4", "#7a549c", "#c83733", "#D07021", "#26999f", "#4d7831", "#fff", "#000000"]
    // const defaultColor = '';

    const changeBackgroundColor = (color) => {
        localStorage.setItem("background-color", color)
        document.body.style.background = color
        const footer = document.getElementsByTagName('footer');
        if (footer.length > 0) {
            // Add the class to the footer
            footer[0].classList.add('important-background');

            // Check if the style already exists
            let styleElement = document.getElementById('dynamic-styles');
            if (!styleElement) {
                // Create a <style> element if it doesn't exist
                styleElement = document.createElement('style');
                styleElement.id = 'dynamic-styles';
                document.head.appendChild(styleElement);
            }

            // Add or update the CSS rule for .important-background
            styleElement.innerHTML = `
                .important-background {
                    background: ${color} !important;
                    color: white; /* Example of additional style */
                      transition: background-color 0.3s ease;


                }
            `;

            console.log(`Applied color: ${color}`);
        } else {
            console.log("No footer element found.");
        }
    };

    const changeTitleColor = (color) => {
        const heading = document.body.querySelectorAll('h1,h2,h3,h4,h5,h6');
        heading.forEach((heading) => {
            heading.style.color = color;
        })
    }
    const changeTextColor = (color) => {
        const heading = document.body.querySelectorAll('p,a,button');
        heading.forEach((heading) => {
            heading.style.color = color;
        })
    }


    const [lightContrast, setLightContrast] = useState(false)
    const LightContrast = () => {
        setLightContrast(!lightContrast)
        const body = document.body
        if (!lightContrast) {
            body.style.background = '#f2f0f0';
            body.style.color = '#000000';
        } else {
            body.style.background = '#ffffff';
            body.style.color = '';
        }
    }
    const [dark, setDark] = useState(false)
    const DarkContrast = () => {
        const body = document.body
        setDark(!dark)
        if (!dark) {
            body.style.background = '#181818'
        } else {
            body.style.background = '#ffffff';

        }

    }
    const [high, setHigh] = useState(false)
    const HighContrast = () => {
        const body = document.body
        setHigh(!high)
        if (!high) {
            body.style.background = '#ffffff'
        } else {
            body.style.background = '';

        }

    }
    const [highSaturation, setHighSaturation] = useState(false)
    const HighSaturation = () => {
        const body = document.body
        setHighSaturation(!highSaturation)
        if (!highSaturation) {
            body.classList.add('saturate-200');
            body.classList.add('h-screen');

        } else {
            body.classList.remove('saturate-200');

        }
    }
    const [lowSaturation, setLowSaturation] = useState(false)
    const lowsaturation = () => {
        const body = document.body
        setLowSaturation(!lowSaturation)
        console.log('body.classList:before ', body.classList);
        if (!lowSaturation) {
            body.classList.add('saturate-[0.4]');

        } else {
            body.classList.remove('saturate-[0.4]');

        }
        console.log('body.classList: after ', body.classList);
    }
    const [monoChrome, setMonoChrome] = useState(false)
    const monochrome = () => {
        const body = document.body
        setMonoChrome(!monoChrome)
        console.log('body.classList:before ', body.classList);
        if (!monoChrome) {
            body.classList.add('grayscale');

        } else {
            body.classList.remove('grayscale');

        }
        console.log('body.classList: after ', body.classList);
    }

    return (






        <div className='m-5 bg-[#fff] p-5 rounded-xl '>
            <div className='text-[18px] pb-5'>Color Adjustments</div>

            <div className='flex flex-wrap lg:flex-nowrap gap-5'>
                <div className=' flex flex-wrap gap-5 md:gap-0 lg w-full lg:w-[30%] '>
                    <Content_box2
                        imag={"/images/svgviewer-output (29).svg"}
                        heading={"Dark Contrast"}
                        onClick={DarkContrast}
                        customStyle={dark && "!bg-[#146FF8] "}
                        customHeading={dark && "!text-[#fff]"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (32).svg"}
                        heading={"High Saturation"}
                        onClick={HighSaturation}
                        customStyle={highSaturation && "!bg-[#146FF8] "}
                        customHeading={highSaturation && "!text-[#fff]"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (33).svg"}
                        heading={"Monochrome"}
                        onClick={monochrome}
                        customStyle={monoChrome && "!bg-[#146FF8] "}
                        customHeading={monoChrome && "!text-[#fff]"}

                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (34).svg"}
                        heading={"Low Saturation"}
                        onClick={lowsaturation}
                        customStyle={lowSaturation && "!bg-[#146FF8] "}
                        customHeading={lowSaturation && "!text-[#fff]"}
                    />


                </div>
                <div className='w-full lg:flex-1'>
                    <div className='flex gap-4 '>
                        <Content_box2
                            imag={"/images/svgviewer-output (30).svg"}
                            heading={"Light Contrast"}
                            onClick={LightContrast}
                            customStyle={lightContrast && "!bg-[#146FF8] "}
                            customHeading={lightContrast && "!text-[#fff]"}
                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (31).svg"}
                            heading={"High Contrast"}
                            onClick={HighContrast}
                            customStyle={high && "!bg-[#146FF8] "}
                            customHeading={high && "!text-[#fff]"}
                        />

                    </div>
                    <Content_box1
                        heading={"Adjust Text Colors"}
                        button={"cancel"}
                        showBar={false}
                        colorButton={true}
                        img={false}
                        colors={colors}
                        onChangeColor={changeTextColor}
                    />
                    <Content_box1
                        heading={"Adjust Title Colors"}
                        showBar={false}
                        img={false}
                        colorButton={true}
                        button={"cancel"}
                        colors={colors}
                        onChangeColor={changeTitleColor}
                        color={colors}
                    />
                    <Content_box1
                        heading={"Adjust Background Colors"}
                        showBar={false}
                        img={false}
                        colorButton={true}
                        button={"cancel"}
                        onChangeColor={changeBackgroundColor}
                        colors={colors}


                    />


                </div>

            </div>
        </div>
    )
}

export default ColorAdjustment;