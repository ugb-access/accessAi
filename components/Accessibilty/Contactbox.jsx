import Content_box1 from './Content_box1'
import Content_box2 from './Content_box2'
import React, { useState } from 'react';


const Contactbox = () => {

    let is_highlight_title = false
    let is_highlight_link = false
    let Bold = false
    const textBold = () => {
        Bold = !Bold
        const title = document.querySelectorAll('h1,h2,h3,h4,h5,h6,a,p')
        const titles = document.getElementsByClassName('textbold')

        if (Bold) {
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
        Array.from(titles).forEach(title => {
            if (Bold) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        })
    }
    let textCenter = false
    const allTextCenter = () => {
        textCenter = !textCenter
        document.body.classList.add('center-text');
        const titles = document.getElementsByClassName('textcenter')
        const body = document.body;
        if (textCenter) {
            body.style.textAlign = 'center';
        } else {
            body.style.textAlign = '';
        }
        Array.from(titles).forEach(title => {
            if (textCenter) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        })
    }
    let textLeft = false
    const allTextLeft = () => {
        textLeft = !textLeft
        const body = document.body;
        const titles = document.getElementsByClassName('textleft')
        if (textLeft) {
            body.style.textAlign = '';
        } else {
            body.style.textAlign = 'left';
        }
        Array.from(titles).forEach(title => {
            if (textLeft) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        })
    }

    let textRight = false
    const allTextRight = () => {
        textRight = !textRight

        const body = document.body;
        const titles = document.getElementsByClassName('textright')
        if (textRight) {
            body.style.textAlign = 'right';
        } else {
            body.style.textAlign = '';
        }
        Array.from(titles).forEach(title => {
            if (textRight) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        })

    }

    // increase/decrease fontsize


    const handleIncreaseScale = () => {
        const body = document.body;
        const currentTransform = getComputedStyle(body).transform;

        // Extract scale value from the transform matrix
        let currentScale = 1; // Default scale
        if (currentTransform !== 'none') {
            const matrix = currentTransform.match(/matrix\((.+)\)/);
            if (matrix) {
                currentScale = parseFloat(matrix[1].split(', ')[0]);
            }
        }

        // Increase scale
        body.style.transform = `scale(${currentScale + 0.01})`;
    };

    const handleDecreaseScale = () => {
        const body = document.body;
        const currentTransform = getComputedStyle(body).transform;


        let currentScale = 0.1; // Default scale
        if (currentTransform !== 'none') {
            const matrix = currentTransform.match(/matrix\((.+)\)/);
            if (matrix) {
                currentScale = parseFloat(matrix[1].split(', ')[0]);
            }
        }

        // Decrease scale
        if (currentScale > 0.1) { // Prevent scale from going below 0.1
            body.style.transform = `scale(${currentScale - 0.01})`;
        }
    };

    // const changeTextColor = (color) => {
    //     const elements = document.body.querySelectorAll('p, a');
    //     const accessibilityElement = document.getElementById('accessibilty');

    //     elements.forEach((element) => {
    //         // Skip the element if it is the #accessibilty element or is inside it
    //         if (accessibilityElement.contains(element)) {
    //             return;
    //         }

    //         // Change the text color for other elements
    //         element.style.color = color;
    //     });
    // };   

    const handleIncreaseFontSize = () => {
        const elements = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button');
        const accessibilityElement = document.getElementById('accessibility');


        // Skip font size increase if the accessibility element exists
        elements.forEach((element) => {
            console.log('element: ', element);
            // Check if the element has the id 'accessibility' or is inside the accessibility element
            if (element === 'accessibility' || (accessibilityElement && accessibilityElement.contains(element))) {
                console.log(`Skipping font size increase for element with id "${element.id}"`);
                return; // Skip this element
            }

            // Increase the font size if it is not the accessibility element
            const currentFontSize = parseFloat(getComputedStyle(element).fontSize);
            element.style.fontSize = `${currentFontSize + 1}px`;
            console.log(`Font size of ${element.tagName} increased to: ${element.style.fontSize}`);
        });
    };


    const handleDecreaseFontSize = () => {
        const body = document.body;
        const currentFontSize = parseFloat(getComputedStyle(body).fontSize);
        body.style.fontSize = `${currentFontSize - 1}px`;
    };



    // increase/decrease lineHeight
    const handleIncreaseLingHight = () => {
        const body = document.body;
        const currentLineHeight = parseFloat(getComputedStyle(body).lineHeight)
        body.style.lineHeight = `${currentLineHeight + 2}PX`;
    }
    const handleDecreaseLineHeight = () => {
        const body = document.body
        const currentLineHeight = parseFloat(getComputedStyle(body).lineHeight)
        body.style.lineHeight = `${currentLineHeight - 2}PX`;
    }
    // increase/decrease letterspacing
    const handleIncreaseLetterSpacing = () => {
        const body = document.body;
        let currentLetterSpacing = parseFloat(getComputedStyle(body).letterSpacing);
        if (isNaN(currentLetterSpacing)) currentLetterSpacing = 0;
        body.style.letterSpacing = `${currentLetterSpacing + 1}px`;
    };
    const handleDecreaseLetterSpacing = () => {
        const body = document.body;
        let currentLetterSpacing = parseFloat(getComputedStyle(body).letterSpacing);
        if (isNaN(currentLetterSpacing)) currentLetterSpacing = 0;
        body.style.letterSpacing = `${currentLetterSpacing - 1}px`;
    };



    return (
        <div id="accessibilty" className='m-5 bg-[#fff] p-4 rounded-xl '>
            <div id="accessibilty" className='text-[18px] pb-5'>Content Adjustments</div>

            <div id="accessibilty" className='flex flex-wrap lg:flex-nowrap gap-5'>
                <div id="accessibilty" className='w-full lg:flex-1'>
                    <Content_box1
                        imag={"/images/svgviewer-output (16).svg"}
                        heading={"content Scaling"}
                        handleImageClick={handleIncreaseScale}
                        handleImagClick={handleDecreaseScale}
                        imag2={"/images/svgviewer-output (18).svg"}
                        para={"Default"}
                        imag3={"/images/svgviewer-output (17).svg"}
                        colorButton={false}

                    />
                    <div id="accessibilty" className='flex gap-5 '>
                        <Content_box2
                            imag={"/images/svgviewer-output (27).svg"}
                            heading={"Highlight Titles"}
                            onClick={() => {
                                is_highlight_title = !is_highlight_title
                                highlightAllTitles(is_highlight_title)
                            }}
                            customStyle={'highlighttitle'}


                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (28).svg"}
                            heading={"Highlight Links"}
                            onClick={() => {
                                is_highlight_link = !is_highlight_link
                                highlightAllLink(is_highlight_link)
                            }}
                            customStyle={"highlightlink "}

                        />


                    </div>
                    <Content_box1
                        imag={"/images/svgviewer-output (24).svg"}
                        handleImageClick={handleIncreaseFontSize}
                        handleImagClick={handleDecreaseFontSize}
                        heading={"Adjust Font Sizing"}
                        imag2={"/images/svgviewer-output (18).svg"}
                        para={"Default"}
                        imag3={"/images/svgviewer-output (17).svg"}
                        colorButton={false}


                    />
                    <Content_box1
                        imag={"/images/svgviewer-output (25).svg"}
                        heading={"Adjust Line Height"}
                        handleImageClick={handleIncreaseLingHight}
                        handleImagClick={handleDecreaseLineHeight}


                        imag2={"/images/svgviewer-output (18).svg"}
                        para={"Default"}
                        imag3={"/images/svgviewer-output (17).svg"}
                        colorButton={false}

                    />
                    <Content_box1
                        imag={"/images/svgviewer-output (26).svg"}
                        heading={"Adjust Letter Spacing"}
                        handleImageClick={handleIncreaseLetterSpacing}
                        handleImagClick={handleDecreaseLetterSpacing}
                        imag2={"/images/svgviewer-output (18).svg"}
                        para={"Default"}
                        imag3={"/images/svgviewer-output (17).svg"}
                        colorButton={false}

                    />

                </div>
                <div id="accessibilty" className=' flex flex-wrap gap-5 md:gap-0 lg w-full lg:w-[30%]'>
                    <Content_box2
                        imag={"/images/svgviewer-output (19).svg"}
                        heading={"Readable Font"}
                        onClick={textBold}
                        customStyle={"textbold "}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (23).svg"}
                        heading={"Text Magnifier"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (20).svg"}
                        heading={"Text Center"}
                        onClick={allTextCenter}
                        customStyle={"textcenter"}

                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (22).svg"}
                        heading={"Align Left"}

                        onClick={allTextLeft}
                        customStyle={"textleft "}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (21).svg"}
                        heading={"Align Right"}
                        onClick={allTextRight}
                        customStyle={"textright"}
                    />

                </div>
            </div>
        </div>
    )
}

export default Contactbox


export const handleHighLight = (active) => {
    highlightAllLink(active)
    highlightAllTitles(active)
}

const highlightAllTitles = (active) => {
    const title = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
    const titles = document.getElementsByClassName('highlighttitle')

    if (!active) {
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
    Array.from(titles).forEach((title) => {
        if (active) {
            title.style.backgroundColor = "#146FF8";
            title.style.color = '#ffffff';
        } else {
            title.style.backgroundColor = '';
            title.style.color = '';
        }
    })
}


const highlightAllLink = (active) => {

    const title = document.querySelectorAll('a')
    const titles = document.getElementsByClassName('highlightlink')

    const hightBackground = document.getElementById("highLightLink")
    // const textcolor = document.getElementsByClassName("changeColor")
    if (!active) {
        title.forEach((title) => {
            title.style.border = '';


        })
        // hightBackground.style.color = ""




    } else {
        title.forEach((title) => {
            title.style.border = '2px solid #ff9a68';

        })

    }
    Array.from(titles).forEach((title) => {
        if (active) {
            title.style.backgroundColor = "#146FF8";
            title.style.color = '#ffffff';
        } else {
            title.style.backgroundColor = '';
            title.style.color = '';

        }
    })


}