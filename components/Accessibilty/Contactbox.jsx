import Content_box1 from './Content_box1'
import Content_box2 from './Content_box2'
import React, { useEffect, useState } from 'react';


const Contactbox = () => {

    let is_highlight_title = false
    let is_highlight_link = false
    let Bold = false



    useEffect(() => {
        const isScriptEnable = document.body.classList.contains('read-mode')
        const titles = document.getElementsByClassName('textbold')
        Array.from(titles).forEach(title => {

            if (isScriptEnable) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';
            }
        })
    }, [])
    const textBold = () => {
        const body = document.body
        const title = document.querySelectorAll('h1,h2,h3,h4,h5,h6,a,p,span')
        const titles = document.getElementsByClassName('textbold')
        const isScriptEnable = document.body.classList.contains('read-mode')
        const idelement = document.getElementById('accessibilty')
        if (!isScriptEnable) {
            document.body.style.fontWeight = '500'
            title.forEach((title) => {
                if (title.id === 'accessibilty') return;
                title.style.fontWeight = '600';
                body.classList.add('read-mode')
            })
        } else {
            document.body.style.fontWeight = ''
            title.forEach((title) => {
                title.style.fontWeight = '';
                body.classList.remove('read-mode')
            })

        }
        Array.from(titles).forEach(title => {

            if (!isScriptEnable) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        })
    }

    useEffect(() => {
        const isScriptEnable = document.body.classList.contains("center-text");
        const titles = document.getElementsByClassName("textcenter");
        const idelement = document.getElementById('accessibilty')

        if (idelement) {
            if (isScriptEnable) {
                idelement.style.textAlign = 'left';
            }
        } else {
            idelement.style.textAlign = '';

        }
        Array.from(titles).forEach((title) => {
            if (isScriptEnable) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = "#ffffff";
            } else {
                title.style.backgroundColor = "";
                title.style.color = "";
            }
        });
    }, []);
    const allTextCenter = () => {
        const titles = document.getElementsByClassName("textcenter");
        const body = document.body;
        const isScriptEnable = body.classList.contains("center-text");
        const idelement = document.getElementById('accessibilty')

        if (idelement) {
            if (!isScriptEnable) {
                idelement.style.textAlign = 'left';
            }
        } else {
            idelement.style.textAlign = '';

        }
        if (!isScriptEnable) {
            body.style.textAlign = "center";
            body.classList.add("center-text");
        } else {
            body.style.textAlign = "";
            body.classList.remove("center-text");
        }
        Array.from(titles).forEach((title) => {

            if (!isScriptEnable) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = "#ffffff";
            } else {
                title.style.backgroundColor = "";
                title.style.color = "";
            }
        })
    };

    useEffect(() => {
        const isScriptEnable = document.body.classList.contains('text-left')
        const titles = document.getElementsByClassName('textleft')
        Array.from(titles).forEach((title) => {
            if (isScriptEnable) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = "#ffffff";
            } else {
                title.style.backgroundColor = "";
                title.style.color = "";
            }
        });
    }, [])
    const allTextLeft = () => {

        const body = document.body;
        const titles = document.getElementsByClassName('textleft')
        const isScriptEnable = document.body.classList.contains('text-left')
        if (!isScriptEnable) {
            body.style.textAlign = 'left';
            body.classList.add("text-left");
        } else {
            body.style.textAlign = '';
            body.classList.remove("text-left");
        }
        Array.from(titles).forEach(title => {
            if (!isScriptEnable) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        })
    }


    useEffect(() => {

        const isScriptEnable = document.body.classList.contains('text-right')
        const titles = document.getElementsByClassName('textright')
        const idelement = document.getElementById('accessibilty')

        if (idelement) {
            if (isScriptEnable) {
                idelement.style.textAlign = 'left';
            }
        } else {
            idelement.style.textAlign = '';

        }
        Array.from(titles).forEach((title) => {
            if (isScriptEnable) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = "#ffffff";
            } else {
                title.style.backgroundColor = "";
                title.style.color = "";
            }
        });
    }, [])
    const allTextRight = () => {
        const body = document.body;
        const titles = document.getElementsByClassName('textright')
        const idelement = document.getElementById('accessibilty')
        const isScriptEnable = document.body.classList.contains('text-right')
        if (idelement) {
            if (!isScriptEnable) {
                idelement.style.textAlign = 'left';
            }
        } else {
            idelement.style.textAlign = '';

        }

        if (!isScriptEnable) {
            body.style.textAlign = 'right';
            body.classList.add('text-right')
        } else {
            body.style.textAlign = '';
            body.classList.remove('text-right')
        }
        Array.from(titles).forEach(title => {

            if (!isScriptEnable) {
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
        if (currentScale > 0.1) {
            body.style.transform = `scale(${currentScale - 0.01})`;
        }
    };


    const originalFontSizes = new Map();
    let percentage = "Default"; // Initially show "Default"

    const adjustFontSize = (isIncrease) => {
        const elements = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span');

        let maxPercentage = 0; // Track highest positive or negative percentage change

        elements.forEach((element) => {
            if (element.id === "accessibilty") return; // ✅ Skip this element

            // Get current font size
            const currentFontSize = parseFloat(getComputedStyle(element).fontSize);

            // Store original font size if not already stored
            if (!originalFontSizes.has(element)) {
                originalFontSizes.set(element, currentFontSize);
            }

            // Get original size and calculate 10% change
            const originalSize = originalFontSizes.get(element);
            const changeAmount = (originalSize * 10) / 100; // 10% of original size

            // Apply increase or decrease
            const newFontSize = isIncrease ? currentFontSize + changeAmount : currentFontSize - changeAmount;

            element.style.fontSize = `${newFontSize}px`;

            // Calculate the percentage change
            const percentageChange = ((newFontSize - originalSize) / originalSize) * 100;
            maxPercentage = percentageChange; // Track last updated percentage
        });

        // If percentage is exactly 0, show "Default", otherwise show percentage
        percentage = maxPercentage === 0 ? "Default" : `${maxPercentage.toFixed(0)}%`;

        // Select percentage element using className and update text
        const percentageElement = document.querySelector(".font-percentage");
        if (percentageElement) {
            percentageElement.innerText = percentage;
        }
    };










    // increase/decrease lineHeight
    const originalLineHeights = new Map();
    let lineHeightPercentage = "Default"; // Initially show "Default"

    const adjustLineHeight = (isIncrease) => {
        const elements = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span');
        elements.forEach((element) => {
            if (element.classList.contains("accessibilty")) return;
            const currentLineHeight = parseFloat(getComputedStyle(element).lineHeight);
            if (!originalLineHeights.has(element)) {
                originalLineHeights.set(element, currentLineHeight);
            }
            if (!isNaN(newLineHeight) && newLineHeight > 0) {
                element.style.lineHeight = `${newLineHeight}px`;
            }
        });
        const percentageElement = document.querySelector(".line-height-percentage");
        let current = percentageElement.innerText;
        let percentage = current == "Default" ? 0 : current?.replace("%", "");

        if (isIncrease) {
            percentage = +percentage + 10
        } else {
            percentage = +percentage - 10
        }

        if (percentageElement) {
            percentageElement.innerText = `${percentage}%` || "Default";
        }
    };





    // increase/decrease letterspacing
    const adjustLetterSpacing = (delta) => {
        const elements = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button,span');
        elements.forEach((element) => {
            if (element.id === 'accessibilty') {
                return; // Skip this element
            }

            let currentLetterSpacing = parseFloat(getComputedStyle(element).letterSpacing);
            if (isNaN(currentLetterSpacing)) currentLetterSpacing = 0;
            element.style.letterSpacing = `${currentLetterSpacing + delta}px`;
        });
    };

    // Usage
    const handleIncreaseLetterSpacing = () => adjustLetterSpacing(1); // Increase by 1px
    const handleDecreaseLetterSpacing = () => adjustLetterSpacing(-1); // Decrease by 1px




    return (
        <div id="accessibilty" className='m-5 bg-[#fff] p-4 rounded-xl '>
            <div id="accessibilty" className='text-[18px] pb-5 !text-start'>Content Adjustments</div>

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
                        handleImageClick={() => adjustFontSize(true)} // Increase by 10%
                        handleImagClick={() => adjustFontSize(false)} // Decrease by 10%
                        heading={"Adjust Font Sizing"}
                        imag2={"/images/svgviewer-output (18).svg"}
                        para={<span id='accessibilty' className="font-percentage">Default</span>} // Initially "Default"
                        imag3={"/images/svgviewer-output (17).svg"}
                        colorButton={false}
                    />

                    <Content_box1
                        imag={"/images/svgviewer-output (24).svg"}
                        handleImageClick={() => adjustLineHeight(true)} // Increase by 10%
                        handleImagClick={() => adjustLineHeight(false)} // Decrease by 10%
                        heading={"Adjust Line Height"}
                        imag2={"/images/svgviewer-output (18).svg"}
                        para={<span id='accessibilty' className="line-height-percentage">Default</span>} // Initially "Default"
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
            title.style.border = ''
        })
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