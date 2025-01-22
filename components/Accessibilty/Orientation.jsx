
import Content_box2 from './Content_box2';
import Content_box1 from './Content_box1';
import Footer from "./Footer";

import React, { useState, useEffect } from 'react';


const Orientation = () => {

    let hideImageState = false;
    const hideImage = () => {
        hideImageState = !hideImageState;
        const images = document.querySelectorAll('img, Image');
        const titles = document.getElementsByClassName('image'); // Get all elements with class 'change'
        images.forEach((img) => {
            if (!img.closest("#accessibilty")) {
                if (hideImageState) {
                    img.style.display = 'none';
                } else {
                    img.style.display = 'block';
                }
            }
        });
        Array.from(titles).forEach(title => {
            if (hideImageState) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = 'white';
            } else {
                title.style.backgroundColor = ''; // Reset to default
                title.style.color = '';

            }
        });
    };
    //  mutesound///////////////////////////////////////////////////////////////////
    let muteSound = false
    const mutemedia = () => {
        muteSound = !muteSound
        const media = document.querySelectorAll('audio,video')
        const titles = document.getElementsByClassName('sound'); // Get all elements with class 'change'


        if (muteSound) {
            media.forEach((med) => {
                med.muted = true
            })
        } else {
            media.forEach((med) => {
                med.muted = false
            })
        }
        Array.from(titles).forEach(title => {
            if (muteSound) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = 'white';
            } else {
                title.style.backgroundColor = ''; // Reset to default
                title.style.color = '';

            }
        });
    }

    let hoverHighlight = false;

    const toggleHoverHighlight = () => {
        hoverHighlight = !hoverHighlight;

        const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, img, span");
        const titles = document.getElementsByClassName('highLight');


        if (hoverHighlight) {
            elements.forEach((ele) => {
                ele.addEventListener("mouseover", handleMouseOver);
                ele.addEventListener("mouseleave", handleMouseLeave);
            });
        } else {
            elements.forEach((ele) => {
                ele.removeEventListener("mouseover", handleMouseOver);
                ele.removeEventListener("mouseleave", handleMouseLeave);
            });
        }
        Array.from(titles).forEach(title => {
            if (hoverHighlight) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = 'white';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        });
    };

    const handleclick = (event) => {
        event.target.style.border = "2px solid orange"
        event.target.style.outline = "2px solid blue"

    }
    let clickhighlight = false
    const toggleclickhighlight = () => {
        clickhighlight = !clickhighlight
        console.log('clickhighlight:', clickhighlight);
        const elements = document.querySelectorAll('form,a')
        const titles = document.getElementsByClassName('HighLight')

        if (clickhighlight) {
            elements.forEach((ele) => {
                ele.addEventListener("click", handleclick)
            })
        } else {
            elements.forEach((ele) => {
                ele.addEventListener("click", handleclick)
            })
        }
        Array.from(titles).forEach(title => {
            if (clickhighlight) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = 'white';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        });
    }



    const handleCursor = () => {

    }









    const handleMouseOver = (event) => {
        event.target.style.border = "2px solid orange";
    };

    const handleMouseLeave = (event) => {
        event.target.style.border = "";
    };




    let animations = false;
    const toggleAnimation = () => {
        animations = !animations;
        const titles = document.getElementsByClassName('animation');

        const body = document.body
        if (animations) {
            body.classList.add('stop-animations')
        } else {
            body.classList.remove('stop-animations')

        }
        Array.from(titles).forEach(title => {
            if (animations) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = 'white';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        });
    }




    const handleClick = () => toggleScript();

    const toggleScript = () => {
        const guideClass = 'guide-element';
        const scriptClass = 'custom-style';
        const existingScripts = document.getElementsByClassName(scriptClass);
        const container = document.querySelector('.customStyle');
        const childTextDiv = container?.children[1];

        const removeElements = (elements) => Array.from(elements).forEach(el => document.body.removeChild(el));

        if (existingScripts.length > 0) {
            removeElements(existingScripts);
            removeElements(document.getElementsByClassName(guideClass));

            container?.classList.remove('!bg-[#146FF8]');
            childTextDiv?.classList.replace('!text-[#fff]', '!text-black');
        } else {
            const scriptElement = document.createElement('script');
            scriptElement.className = scriptClass;
            scriptElement.type = 'text/javascript';
            scriptElement.innerHTML = `
                (function() {
                    let guideElement = null;
                    let isVisible = false;
    
                    const toggleGuide = () => {
                        isVisible = !isVisible;
                        if (!guideElement) {
                            guideElement = document.createElement('div');
                            guideElement.className = '${guideClass}';
                            guideElement.style.cssText = 'position:absolute;width:400px;height:13px;background-color:#146FF8;border:4px solid black;border-radius:50px;pointer-events:none;transition:opacity 0.3s ease;overflow-x:hidden;z-index:10;opacity:0;';
                            document.body.appendChild(guideElement);
                        }
                        guideElement.style.opacity = isVisible ? '1' : '0';
                        const handleMouseMove = (event) => {
                               if (guideElement && isVisible) {
                               const rect = guideElement.getBoundingClientRect();
                                 const centerX = event.clientX - rect.width / 2;
                                  const centerY = event.clientY - rect.height / 2;
                                   guideElement.style.left = \`\${centerX}px\`;
                                   guideElement.style.top = \`\${centerY}px\`;
                                      }
                                         };
    
                        if (isVisible) document.addEventListener('mousemove', handleMouseMove);
                        else document.removeEventListener('mousemove', handleMouseMove);
                    };
    
                    toggleGuide();
                    document.body.addEventListener('click', () => isVisible && toggleGuide());
                })();
            `;
            document.body.appendChild(scriptElement);

            container?.classList.replace('!text-black', '!bg-[#146FF8]');
            childTextDiv?.classList.replace('!text-black', '!text-[#fff]');

            console.log('Script added and guide activated.');
        }
    };








    /////////////////////////////readmode////////////////////////////
    let isEnabled = false;
    const originalClasses = new Map();

    const readMode = () => {
        const body = document.body;
        const id = document.getElementById("accessibilty");
        const titles = document.getElementsByClassName('change');
        const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, img.svg, li, ul, ol, table, th, td, blockquote, pre, code, em, strong, small, sub, sup, del, ins, mark, abbr, dfn, kbd, q, cite, var, nav, header, footer, aside, section, article, figure, figcaption, main, div, form, fieldset, legend, label, button, input, textarea, select, option, optgroup, progress, meter, output, details, summary, dialog, menu, menuitem, menuitemcheckbox, menuitemradio, script, style, link, meta, title, base, head, body, html');

        isEnabled = !isEnabled; // Toggle state

        elements.forEach(element => {
            if (element.id !== "accessibilty") { // Skip the element with ID 'accessibility'
                if (isEnabled) {
                    // Store the original classes if not already stored
                    if (!originalClasses.has(element)) {
                        originalClasses.set(element, element.className || ''); // Use empty string if no class exists
                    }
                    element.removeAttribute('class'); // Remove all classes
                    body.style.margin = '0px auto';
                    body.style.width = '40%';
                } else {
                    // Restore the original classes
                    if (originalClasses.has(element)) {
                        element.className = originalClasses.get(element); // Restore class
                    }
                    body.style.margin = '';
                    body.style.width = '';
                }
            }
        });

        // Apply background color to 'change' elements
        Array.from(titles).forEach(title => {
            if (isEnabled) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = 'white';
            } else {
                title.style.backgroundColor = ''; // Reset to default
                title.style.color = '';

            }
        });

        // Clear the originalClasses map when disabling read mode to avoid memory leaks
        if (!isEnabled) {
            originalClasses.clear();
        }
    };




    return (
        <>
            <div id="accessibilty" className='m-5 bg-[#fff] px-4 rounded-xl '>
                <div id="accessibilty" className='text-[18px] pb-5'>Orientation Adjustments</div>

                <div id="accessibilty" className='flex flex-wrap lg:flex-nowrap gap-5'>
                    <div id="accessibilty" className='flex flex-wrap gap-5 lg:gap-0 lg w-full lg:w-[30%]'>
                        <Content_box2
                            imag={"/images/svgviewer-output (35).svg"}
                            heading={"Mute Sounds"}
                            onClick={mutemedia}
                            customStyle={'sound'}

                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (38).svg"}
                            heading={"Reading Guide"}
                            onClick={handleClick}
                            id={"dynamic_id_container"}

                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (40).svg"}
                            heading={"Stop Animations"}
                            onClick={toggleAnimation}
                            customStyle={'animation'}

                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (43).svg"}
                            heading={"Highlight Focus"}
                            onClick={toggleclickhighlight}
                            customStyle={'HighLight'}

                        />


                    </div>
                    <div id="accessibilty" className='w-full lg:flex-1'>
                        <div id="accessibilty" className='flex gap-5 '>
                            <Content_box2
                                imag={"/images/svgviewer-output (36).svg"}
                                heading={"Hide Images"}
                                onClick={hideImage}
                                customStyle={"image"}
                            />
                            <Content_box2
                                imag={"/images/svgviewer-output (37).svg"}
                                heading={"Read Mode"}
                                onClick={readMode}
                                customStyle={"change"}

                            />

                        </div>
                        <Content_box1
                            imag={"/images/svgviewer-output (16).svg"}
                            heading={"Useful Links"}
                            showBar={false}
                            inputBar={true}
                            colorButton={false}

                        />
                        <div id="accessibilty" className='flex gap-5 '>
                            <Content_box2
                                imag={"/images/svgviewer-output (41).svg"}
                                heading={"Reading Mask"}
                            // onClick={handleMaskClick}
                            // id={"dynamic_id"}


                            />
                            <Content_box2
                                imag={"/images/svgviewer-output (42).svg"}
                                heading={"HighLight Hover"}
                                onClick={toggleHoverHighlight}
                                customStyle={'highLight'}
                            />

                        </div>
                        <div id="accessibilty" className='flex gap-5 '>
                            <Content_box2
                                imag={"/images/svgviewer-output (44).svg"}
                                heading={"Big Black Cursor"}

                            />
                            <Content_box2
                                imag={"/images/svgviewer-output (45).svg"}
                                heading={"Big White Cursor"}
                            />

                        </div>



                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Orientation