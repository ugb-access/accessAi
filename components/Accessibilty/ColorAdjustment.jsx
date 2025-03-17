// import React from 'react'
import Content_box2 from './Content_box2';
import Content_box1 from './Content_box1';


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
            if (color.id === "accessibilty") {

            }
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

        } else {
        }
    };

    // const changeTitleColor = (color) => {
    //     const headings = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, button');
    //     const accessibilityElement = document.getElementById('accessibilty'); //

    //     headings.forEach((heading) => {
    //         // Skip elements that are the "accessibility" element or are inside it
    //         if (accessibilityElement.contains(heading)) {
    //             return;
    //         }

    //         // Change the color for other elements
    //         heading.style.color = color;
    //     });
    // };


    // const changeTextColor = (color) => {
    //     const elements = document.body.querySelectorAll('p, a');
    //     const accessibilityElement = document.getElementById('accessibilty');

    //     elements.forEach((element) => {
    //         if (accessibilityElement.contains(element)) {
    //             return;
    //         }

    //         // Change the text color for other elements
    //         element.style.color = color;
    //     });
    // };





    return (






        <div id="accessibilty" className='m-5 bg-[#fff] p-5 rounded-xl '>
            <div id="accessibilty" className='text-[18px] pb-5'>Color Adjustments</div>

            <div id="accessibilty" className='flex flex-wrap lg:flex-nowrap gap-5'>
                <div id="accessibilty" className=' flex flex-wrap gap-5 md:gap-0 lg w-full lg:w-[30%] '>
                    <Content_box2
                        imag={"/images/svgviewer-output (29).svg"}
                        heading={"Dark Contrast"}
                        onClick={toggledarkcontrast}
                        customStyle={"dark"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (32).svg"}
                        heading={"High Saturation"}
                        onClick={togglehighsaturation}
                        customStyle={"Saturation"}

                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (33).svg"}
                        heading={"Monochrome"}
                        onClick={togglemonocorome}
                        customStyle={"monochrom"}

                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (34).svg"}
                        heading={"Low Saturation"}
                        onClick={togglelowsaturation}
                        customStyle={"lowSaturation "}
                    />


                </div>
                <div id="accessibilty" className='w-full lg:flex-1'>
                    <div id="accessibilty" className='flex gap-4 '>
                        <Content_box2
                            imag={"/images/svgviewer-output (30).svg"}
                            heading={"Light Contrast"}
                            onClick={togglelightcontrast}
                            customStyle={'lightcolor'}

                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (31).svg"}
                            heading={"High Contrast"}
                            onClick={togglehighcontrast}
                            customStyle={'highcolor'}
                        />

                    </div>
                    <Content_box1
                        heading={"Adjust Text Colors"}
                        button={"cancel"}
                        showBar={false}
                        colorButton={true}
                        img={false}
                        colors={colors}
                        onChangeColor={changetextcolor}
                    />
                    <Content_box1
                        heading={"Adjust Title Colors"}
                        showBar={false}
                        img={false}
                        colorButton={true}
                        button={"cancel"}
                        colors={colors}
                        onChangeColor={changetitlecolor}
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