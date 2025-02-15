import Content_box1 from './Content_box1'
import Content_box2 from './Content_box2'
import React, { useEffect, } from 'react';
import { SCRIPT_MAGINIFIED } from "../../utils/scripts/maginified"


const Contactbox = () => {

    let is_highlight_title = false
    let is_highlight_link = false



    useEffect(() => {
        const readmode = document.createElement("script");
        readmode.innerHTML = `
         (function() {
         const isScriptEnable = localStorage.getItem("read-mode") === "true";
        const titles = document.getElementsByClassName("textbold");

        Array.from(titles).forEach((title) => {
            title.style.backgroundColor = isScriptEnable ? "#146FF8" : "";
            title.style.color = isScriptEnable ? "#ffffff" : "";
        });

        if (isScriptEnable) {
            document.body.style.fontWeight = "500";
            document.body.classList.add("read-mode");

            document.querySelectorAll("h1,h2,h3,h4,h5,h6,a,p,span").forEach((title) => {
                if (title.id !== "accessibilty") {
                    title.style.fontWeight = "600";
                }
            });
        } else {
            document.body.style.fontWeight = "";
            document.body.classList.remove("read-mode");

            document.querySelectorAll("h1,h2,h3,h4,h5,h6,a,p,span").forEach((title) => {
                title.style.fontWeight = "";
            });
        }
    })()
         `
        document.body.appendChild(readmode);
        console.log('readmode: ', readmode);

    }, []);
    const textBold = () => {
        const isScriptEnable = document.body.classList.contains("read-mode");
        const titles = document.getElementsByClassName("textbold");
        Array.from(titles).forEach((title) => {
            title.style.backgroundColor = !isScriptEnable ? "#146FF8" : "";
            title.style.color = !isScriptEnable ? "#ffffff" : "";
        });
        if (!isScriptEnable) {
            document.body.style.fontWeight = "500";
            document.body.classList.add("read-mode");
            document.querySelectorAll("h1,h2,h3,h4,h5,h6,a,p,span").forEach((title) => {
                if (title.id !== "accessibilty") {
                    title.style.fontWeight = "600";
                }
            });
        } else {
            document.body.style.fontWeight = "";
            document.body.classList.remove("read-mode");
            document.querySelectorAll("h1,h2,h3,h4,h5,h6,a,p,span").forEach((title) => {
                title.style.fontWeight = "";
            });
        }

        // LocalStorage me update
        localStorage.setItem("read-mode", String(!isScriptEnable));
    };






    useEffect(() => {
        if (typeof window === 'undefined') return;
        const textcenter = document.createElement("script");
        textcenter.innerHTML = `
            (function() {
                const isScriptEnable = localStorage.getItem("textCenter") === "true";
                const titles = document.getElementsByClassName("textcenter");
                const idelement = document.getElementById("accessibilty");
  
                if (idelement) {
                    idelement.style.textAlign = isScriptEnable ? "left" : "center";
                }

                Array.from(titles).forEach((title) => {
                    title.style.backgroundColor = isScriptEnable ? "#146FF8" : "";
                    title.style.color = isScriptEnable ? "#ffffff" : "";
                });

                if (isScriptEnable) {
                    document.body.classList.add("text-center");
                    document.body.style.textAlign = "center";
                } else {
                    document.body.classList.remove("text-center");
                    document.body.style.textAlign = "";
                }
            })();
        `;
        document.body.appendChild(textcenter);
        console.log('textcenter: ', textcenter);
    }, []);
    const allTextCenter = () => {
        const titles = document.getElementsByClassName("textcenter");
        const body = document.body;
        const isScriptEnable = body.classList.contains("text-center");
        const idelement = document.getElementById("accessibilty");

        if (idelement) {
            idelement.style.textAlign = !isScriptEnable ? "left" : "";
        }

        if (!isScriptEnable) {
            body.style.textAlign = "center";
            body.classList.add("text-center");
        } else {
            body.style.textAlign = "";
            body.classList.remove("text-center");
        }

        Array.from(titles).forEach((title) => {
            title.style.backgroundColor = !isScriptEnable ? "#146FF8" : "";
            title.style.color = !isScriptEnable ? "#ffffff" : "";
        });

        // LocalStorage me string store karna
        localStorage.setItem("textCenter", !isScriptEnable ? "true" : "false");
    };





















    useEffect(() => {
        if (typeof window === 'undefined') return;
        const textleft = document.createElement("script");
        textleft.innerHTML = `
            (function() {
               
        let isScriptEnable = localStorage.getItem("textLeft") === "true";

        const body = document.body;
        const titles = document.getElementsByClassName("textleft");

        if (isScriptEnable) {
            body.classList.add("text-left");
        } else {
            body.classList.remove("text-left");
        }

        Array.from(titles).forEach(title => {
            title.style.backgroundColor = isScriptEnable ? "#146FF8" : "";
            title.style.color = isScriptEnable ? "#ffffff" : "";
        });
            })();
        `;
        document.body.appendChild(textleft);

    }, []);

    // Function to toggle text alignment and save to localStorage
    const allTextLeft = () => {
        let isScriptEnable = document.body.classList.contains("text-left");

        const body = document.body;
        const titles = document.getElementsByClassName("textleft");

        if (!isScriptEnable) {
            body.style.textAlign = "left";
            body.classList.add("text-left");
        } else {
            body.style.textAlign = "";
            body.classList.remove("text-left");
        }

        // Titles ke styles change karna
        Array.from(titles).forEach(title => {
            title.style.backgroundColor = !isScriptEnable ? "#146FF8" : "";
            title.style.color = !isScriptEnable ? "#ffffff" : "";
        });

        // ✅ LocalStorage me correct format me store karna
        localStorage.setItem("textLeft", !isScriptEnable);
    };











    useEffect(() => {
        if (typeof window === 'undefined') return;

        const textright = document.createElement("script");
        textright.innerHTML = `
        (function(){
       const isScriptEnable = localStorage.getItem("textright") === "true";
        const titles = document.getElementsByClassName('textright')
        const idelement = document.getElementById('accessibilty')


        if (idelement) {
            idelement.style.textAlign = isScriptEnable ? "left" : "";
        }

        Array.from(titles).forEach(title => {
            title.style.backgroundColor = isScriptEnable ? "#146FF8" : "";
            title.style.color = isScriptEnable ? "#ffffff" : "";
        });

        // Body pe class lagani ya hatani
        if (isScriptEnable) {
            document.body.classList.add("text-right");
            document.body.style.textAlign = "right";
        } else {
            document.body.classList.remove("text-right");
            document.body.style.textAlign = "";
        }
        })()
        `
        document.body.appendChild(textright)
    }, []);

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
        localStorage.setItem("textright", !isScriptEnable);


    }












    const updateScale = (isIncrease) => {
        const body = document.body;
        const currentTransform = getComputedStyle(body).transform;

        let currentScale = 1;
        if (currentTransform !== 'none') {
            const matrix = currentTransform.match(/matrix\(([^)]+)\)/);
            if (matrix) {
                currentScale = parseFloat(matrix[1].split(', ')[0]);
            }
        }

        // Adjust scale
        let newScale = isIncrease ? currentScale + 0.01 : currentScale - 0.01;
        // Limit min/max scale range (0.5 to 2)
        newScale = Math.max(0.5, Math.min(2, newScale));

        // Apply new scale
        body.style.transform = `scale(${newScale.toFixed(2)})`;

        const percentageElement = document.querySelector(".scale-percentage");
        let current = percentageElement.innerText;
        let percentage = current == "Default" ? 0 : current?.replace("%", "");
        if (isIncrease) {
            percentage = +percentage + 10
        } else {
            percentage = +percentage - 10
        }
        if (percentageElement) {
            if (percentage === 0) {
                percentageElement.innerText = "Default";
            } else {
                percentageElement.innerText = `${percentage}%`
            }
        }


    };










    const originalFontSizes = new Map();

    // Load Saved Font Size from Local Storage on Page Load
    window.addEventListener("DOMContentLoaded", () => {
        let savedFontSize = localStorage.getItem("font-size");
        if (savedFontSize) {
            console.log('savedFontSize: ', savedFontSize);
            document.body.style.fontSize = savedFontSize;
        }
    });
    const adjustFontSize = (isIncrease) => {
        const elements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, button, span");
        elements.forEach((element) => {
            if (element.id === "accessibilty") return;
            const currentFontSize = parseFloat(getComputedStyle(element).fontSize);
            if (!originalFontSizes.has(element)) {
                originalFontSizes.set(element, currentFontSize);
            }
            const newFontSize = isIncrease ? currentFontSize + 1 : currentFontSize - 1;
            if (!isNaN(newFontSize) && newFontSize > 0) {
                element.style.fontSize = `${newFontSize}px`;
            }
        });
        // Update Percentage Display
        const percentageElement = document.querySelector(".font-percentage");
        let current = percentageElement.innerText;
        let percentage = current == "Default" ? 0 : parseInt(current.replace("%", ""));
        percentage = isIncrease ? percentage + 10 : percentage - 10;
        if (percentageElement) {
            percentageElement.innerText = percentage === 0 ? "Default" : `${percentage}%`;
        }
        // Save New Font Size to Local Storage
        let bodyFontSize = getComputedStyle(document.body).fontSize;
        localStorage.setItem("font-size", bodyFontSize);
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
            if (element.id === "accessibilty") return;
            let currentLetterSpacing = getComputedStyle(element).letterSpacing;
            currentLetterSpacing = currentLetterSpacing === "normal" ? "0px" : currentLetterSpacing;
            currentLetterSpacing = parseFloat(currentLetterSpacing);
            if (!originalLetterSpacing.has(element)) {
                originalLetterSpacing.set(element, currentLetterSpacing);
            }
            const newLetterSpacing = isIncrease ? currentLetterSpacing + 1 : currentLetterSpacing - 1;
            if (!isNaN(newLetterSpacing)) {
                element.style.letterSpacing = `${newLetterSpacing}px`;
            }
        });
        const percentageElement = document.querySelector(".letter-spacing-percentage");
        let current = percentageElement ? percentageElement.innerText : "Default";
        let percentage = current === "Default" ? 0 : parseInt(current.replace("%", ""), 10);
        percentage = isIncrease ? percentage + 10 : percentage - 10;
        if (percentageElement) {
            percentageElement.innerText = percentage === 0 ? "Default" : `${percentage}%`;
        }
    };



    //     const script = document.createElement("script");
    //     script.id = "textmagnified";
    //     script.innerHTML = `
    //     (function() {
    //         let magnified = localStorage.getItem('magnified');

    //         const applyStyles = () => {
    //             const titles = document.getElementsByClassName('textmagnidied');
    //             Array.from(titles).forEach(title => {
    //                 if (magnified) {
    //                     title.style.backgroundColor = '#146FF8';
    //                     title.style.color = '#ffffff';
    //                 } else {
    //                     title.style.backgroundColor = '';
    //                     title.style.color = '';
    //                 }
    //             });
    //         };

    //         const textmagnified = () => {
    //             magnified = !magnified;
    //             localStorage.setItem('magnified', magnified);
    //             applyStyles();
    //             document.removeEventListener('mouseover', handleMouseOver);
    //             if (magnified) {
    //                 document.addEventListener('mouseover', handleMouseOver);
    //             }
    //         };

    //         document.addEventListener('mousemove', applyStyles)

    //         const handleMouseOver = (e) => {
    //             if (!magnified) return;
    //             let text = e.target?.innerText?.trim();
    //             if (!text) return;
    //             document.querySelector('.magnify')?.remove();

    //             let magnifiedText = document.createElement('div');
    //             magnifiedText.className = 'magnify';
    //             magnifiedText.innerText = text;

    //             Object.assign(magnifiedText.style, {
    //                 position: 'absolute',
    //                 background: 'grey',
    //                 fontWeight: 'bold',
    //                 textAlign: 'center',
    //                 fontSize: '32px',
    //                 color: 'white',
    //                 padding: '10px',
    //                 borderRadius: '5px',
    //                 pointerEvents: 'none',
    //                 whiteSpace: 'normal',
    //                 wordWrap: 'break-word',
    //                 display: 'flex',
    //                 alignItems: 'center',
    //                 justifyContent: 'center',
    //                 boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
    //                 left: Math.min(e.pageX + 15, window.innerWidth - 310) + 'px',
    //                 top: (e.pageY + 20) + 'px',
    //                 maxWidth: Math.min(300, window.innerWidth - e.pageX - 20) + 'px'
    //             });

    //             document.body.appendChild(magnifiedText);
    //         };

    //         if (magnified) {
    //             document.addEventListener('mouseover', handleMouseOver);
    //             applyStyles();
    //         } else {
    //             applyStyles();
    //         }

    //         window.textmagnified = textmagnified;
    //     })();
    // `;

    // document.body.appendChild(script);

    //  ---------------- main script that handle all kind of functions in it ----------------------

    const mainScript = document.createElement("script");
    mainScript.id = "mainScript";
    mainScript.innerHTML = `
    
        ${SCRIPT_MAGINIFIED()}
        // Initialize on page load if needed
        if (localStorage.getItem('magnified') === 'true') {
            toggleMagnifideScript();
        }
            
        `;

    const isMainScriptInjected = document.getElementById("mainScript");
    if (!isMainScriptInjected) document.body.appendChild(mainScript);


    return (
        <div id="accessibilty" className='m-5 bg-[#fff] p-4 rounded-xl '>
            <div id="accessibilty" className='text-[18px] pb-5 !text-start'>Content Adjustments</div>

            <div id="accessibilty" className='flex flex-wrap lg:flex-nowrap gap-5'>
                <div id="accessibilty" className='w-full lg:flex-1'>
                    <Content_box1
                        imag={"/images/svgviewer-output (16).svg"}  // Increase button image
                        heading={"Content Scaling"}
                        handleImageClick={() => updateScale(true)}   // Increase scale inline
                        handleImagClick={() => updateScale(false)}  // Decrease scale inline ✅ Fixed typo
                        imag2={"/images/svgviewer-output (18).svg"}  // Some other image
                        para={<span id='accessibilty' className="scale-percentage">Default</span>} // Initially "Default"
                        imag3={"/images/svgviewer-output (17).svg"}  // Another image
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
                        onClick={toggleMagnifideScript}
                        customStyle={"textmagnidied"}

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