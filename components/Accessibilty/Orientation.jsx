
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

    let hoverHighlight = false; // Replace useState with a simple variable

    const toggleHoverHighlight = () => {
        hoverHighlight = !hoverHighlight;

        const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, img, span");
        const titles = document.getElementsByClassName('highLight'); // Get all elements with class 'change'


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
                title.style.backgroundColor = ''; // Reset to default
                title.style.color = '';

            }
        });
    };

    const handleMouseOver = (event) => {
        event.target.style.border = "2px solid orange";
    };

    const handleMouseLeave = (event) => {
        event.target.style.border = "";
    };




    let animations = false;
    const toggleAnimation = () => {
        animations = !animations;
        const titles = document.getElementsByClassName('animation'); // Get all elements with class 'change'

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
                title.style.backgroundColor = ''; // Reset to default
                title.style.color = '';

            }
        });
    }




    const handleClick = () => {
        toggleScript();
    };

    const toggleScript = () => {
        const guideClass = 'guide-element';
        const scriptClass = 'custom-style';
        const existingScripts = document.getElementsByClassName(scriptClass);
        const container = document.querySelector('.customStyle');
        const childTextDiv = container?.children[1]; // Use .children instead of .childNodes for element access.

        if (existingScripts.length > 0) {
            // Remove script and guide elements
            Array.from(existingScripts).forEach(script => document.body.removeChild(script));
            const existingGuides = document.getElementsByClassName(guideClass);
            Array.from(existingGuides).forEach(guide => document.body.removeChild(guide));

            container?.classList.remove('!bg-[#146FF8]');
            childTextDiv?.classList.remove('!text-[#fff]');
            childTextDiv?.classList.add('!text-black');
        } else {
            // Add script
            const scriptElement = document.createElement('script');
            scriptElement.className = scriptClass; // Use className instead of id
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
                            guideElement.style.position = 'absolute';
                            guideElement.style.width = '400px';
                            guideElement.style.height = '13px';
                            guideElement.style.backgroundColor = '#146FF8';
                            guideElement.style.border = '4px solid black';
                            guideElement.style.borderRadius = '50px';
                            guideElement.style.pointerEvents = 'none';
                            guideElement.style.transition = 'opacity 0.3s ease';
                            guideElement.style.overflowX = 'hidden';
                            guideElement.style.zIndex = '10';
                            guideElement.style.opacity = '0';
                            document.body.appendChild(guideElement);
                        }
                        guideElement.style.opacity = isVisible ? '1' : '0';
    
                        const handleMouseMove = (event) => {
                            if (guideElement) {
                                guideElement.style.left = \`\${event.pageX}px\`;
                                guideElement.style.top = \`\${event.pageY}px\`;
                            }
                        };
    
                        if (isVisible) {
                            document.addEventListener('mousemove', handleMouseMove);
                        } else {
                            document.removeEventListener('mousemove', handleMouseMove);
                            if (guideElement) {
                                guideElement.style.opacity = '0'; // Ensure it's hidden
                            }
                        }
                    };
    
                    // Call toggleGuide immediately to show the guide
                    toggleGuide();
    
                    // Hide the guide on body click
                    document.body.addEventListener('click', () => {
                        if (isVisible) {
                            toggleGuide();
                        }
                    });
    
                    console.log("Script added. Click anywhere on the body to toggle guide visibility.");
                })();
            `;
            document.body.appendChild(scriptElement);
            container?.classList.remove('!text-black');
            container?.classList.add('!bg-[#146FF8]');

            childTextDiv?.classList.remove('!text-black');
            childTextDiv?.classList.add('!text-[#fff]');

            console.log('Script added and guide activated.');
        }
    };









    const handleMaskClick = () => {
        istoggleScript();

    };

    const isScriptAdd = document.getElementById("dynamic-guide-script");


    const istoggleScript = () => {
        const guideId = 'guide_element';
        const scriptId = 'dynamic-guide-script';
        const existingScript = document.getElementById(scriptId);
        let container = document.getElementById("dynamic_id");
        const childTextDiv = container.childNodes[1];

        if (existingScript) {
            // Remove script and guide element
            document.body.removeChild(existingScript);
            const existingGuide = document.getElementById(guideId);
            if (existingGuide) {
                document.body.removeChild(existingGuide);
                container.classList.remove("!bg-[#146FF8]");
                childTextDiv.classList.remove("!text-[#fff]");
                childTextDiv.classList.add("!text-black");

            }
        } else {
            // Add script
            const scriptElement = document.createElement('script');
            scriptElement.id = scriptId;
            scriptElement.type = 'text/javascript';
            scriptElement.innerHTML = `
            (function() {
                let guideElement = null;
                let isVisible = false;

                const toggleGuide = () => {
                    isVisible = !isVisible;
                    if (!guideElement) {
                        guideElement = document.createElement('div');
                        guideElement.style.position = 'absolute';
                        guideElement.style.width = '100%';
                        guideElement.style.height = '200px';
                        guideElement.style.backgroundColor = '#146FF8';
                        guideElement.style.border = '4px solid black';
                        guideElement.style.borderRadius = '50px';
                        guideElement.style.pointerEvents = 'none';
                        guideElement.style.transition = 'opacity 0.3s ease';
                        guideElement.style.overflowX = 'hidden';

                        guideElement.style.zIndex = '10';
                        guideElement.style.opacity = '0';
                        guideElement.id = '${guideId}';
                        document.body.appendChild(guideElement);
                    }
                    guideElement.style.opacity = isVisible ? '1' : '1';

                    const handleMouseMove = (event) => {
                        if (guideElement) {
                    
                            guideElement.style.right = \`\${event.page20}px\`;
                            guideElement.style.top = \`\${event.pageY}px\`;
                        }

                         const scriptId = 'dynamic-guide-script';
                        const scriptIsAdded = document.getElementById(scriptId);

                        let container = document.getElementById("dynamic_id");
                        const childTextDiv = container ? container.childNodes[1] :null; 

                        if(scriptIsAdded){

                          if(container)  {
                          container.classList.remove("!text-black");
                            container.classList.add("!bg-[#146FF8]");
        }
                            if(childTextDiv){
                                childTextDiv.classList.remove("!text-black");
                                childTextDiv.classList.add("!text-[#fff]");
                                }

                        }else{
                         if(container)   
                         container.classList.remove("!bg-[#146FF8]");
                        if(childTextDiv){
                            childTextDiv.classList.remove("!text-[#fff]");
                            childTextDiv.classList.add("!text-black");
                            }
                        }

                    };

                    if (isVisible) {
                        document.addEventListener('mousemove', handleMouseMove);
                    } else {
                        document.removeEventListener('mousemove', handleMouseMove);
                    }
                };

                // Call toggleGuide immediately to show the guide
                toggleGuide();

                document.addEventListener('click', toggleGuide);

            })();
        `;
            document.body.appendChild(scriptElement);
            container.classList.remove("!text-black");
            container.classList.add("!bg-[#146FF8]");

            childTextDiv.classList.remove("!text-black");
            childTextDiv.classList.add("!text-[#fff]");

        }
    };
    /////////////////////////////readmode////////////////////////////
    let isEnabled = false;
    const originalClasses = new Map(); // Move the map outside the function to persist data between calls

    const readMode = () => {
        const body = document.body;
        const id = document.getElementById("accessibilty");
        const titles = document.getElementsByClassName('change'); // Get all elements with class 'change'
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
                                onClick={handleMaskClick}
                                id={"dynamic_id"}


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