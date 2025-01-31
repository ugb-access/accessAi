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

    const adjustFontSize = (isIncrease) => {
        const elements = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span');


        elements.forEach((element) => {
            if (element.id === "accessibilty") return; // ✅ Skip this element

            // Get current font size
            const currentFontSize = parseFloat(getComputedStyle(element).fontSize);

            // Store original font size if not already stored
            if (!originalFontSizes.has(element)) {
                originalFontSizes.set(element, currentFontSize);
            }


            const newFontSize = isIncrease ? currentFontSize + 1 : currentFontSize - 1;

            if (!isNaN(newFontSize) && newFontSize > 0) {
                element.style.fontSize = `${newFontSize}px`;
            }
        });
        const percentageElement = document.querySelector(".font-percentage");
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
    // increase/decrease lineHeight
    const originalLineHeights = new Map();
    const adjustLineHeight = (isIncrease) => {
        const elements = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span');
        elements.forEach((element) => {
            if (element.id === "accessibilty") return; // ✅ Skip this element
            const currentLineHeight = parseFloat(getComputedStyle(element).lineHeight);
            if (!originalLineHeights.has(element)) {
                originalLineHeights.set(element, currentLineHeight);
            }
            const newLineHeight = isIncrease ? currentLineHeight + 1 : currentLineHeight - 1;
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
            if (percentage === 0) { percentageElement.innerText = "Default" }
            else {
                percentageElement.innerText = `${percentage}%`
            };
        }
    };
    // increase/decrease letterspacingconst originalLetterSpacing = new Map();
    const originalLetterSpacing = new Map();

    const adjustLetterSpacing = (isIncrease) => {
        const elements = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span');

        elements.forEach((element) => {
            if (element.id === "accessibilty") return; // ✅ Skip this element

            let currentLetterSpacing = getComputedStyle(element).letterSpacing;

            // ✅ Convert "normal" to 0px
            currentLetterSpacing = currentLetterSpacing === "normal" ? "0px" : currentLetterSpacing;
            currentLetterSpacing = parseFloat(currentLetterSpacing); // Convert to number

            if (!originalLetterSpacing.has(element)) {
                originalLetterSpacing.set(element, currentLetterSpacing);
            }

            // ✅ Increase or Decrease by 1px
            const newLetterSpacing = isIncrease ? currentLetterSpacing + 1 : currentLetterSpacing - 1;

            if (!isNaN(newLetterSpacing)) {
                element.style.letterSpacing = `${newLetterSpacing}px`;
            }
        });

        // ✅ Update the percentage display
        const percentageElement = document.querySelector(".letter-spacing-percentage");
        let current = percentageElement ? percentageElement.innerText : "Default";
        let percentage = current === "Default" ? 0 : parseInt(current.replace("%", ""), 10);

        percentage = isIncrease ? percentage + 10 : percentage - 10;

        if (percentageElement) {
            percentageElement.innerText = percentage === 0 ? "Default" : `${percentage}%`;
        }
    };





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
                        handleImageClick={() => adjustLetterSpacing(true)} // Increase by 10%
                        handleImagClick={() => adjustLetterSpacing(false)}
                        imag2={"/images/svgviewer-output (18).svg"}
                        para={<span id='accessibilty' className='letter-spacing-percentage'>Default</span>}
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