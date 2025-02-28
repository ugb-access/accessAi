
import Content_box2 from './Content_box2';
import Content_box1 from './Content_box1';



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
    // let muteSound = false
    // const mutemedia = () => {
    //     muteSound = !muteSound
    //     const media = document.querySelectorAll('audio,video')
    //     const titles = document.getElementsByClassName('sound'); // Get all elements with class 'change'
    //     if (muteSound) {
    //         media.forEach((med) => {
    //             med.muted = true
    //         })
    //     } else {
    //         media.forEach((med) => {
    //             med.muted = false
    //         })
    //     }
    //     Array.from(titles).forEach(title => {
    //         if (muteSound) {
    //             title.style.backgroundColor = "#146FF8";
    //             title.style.color = 'white';
    //         } else {
    //             title.style.backgroundColor = ''; // Reset to default
    //             title.style.color = '';

    //         }
    //     });
    // }

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


    let condition = false;

    function triggerFunction() {
        condition = !condition;
        const cursorPath = '/images/black-pointer.svg';
        const autoPath = '/images/black-cursor.svg';
        const allElements = document.querySelectorAll('*');
        const titles = document.getElementsByClassName('black')

        if (condition) {
            allElements.forEach(ele => {
                const computedStyle = window.getComputedStyle(ele);
                if (computedStyle.cursor === "pointer") { // Check computed style, not inline style
                    ele.style.cursor = `url(${cursorPath}) 10 10, pointer`;
                }
                else {
                    ele.style.cursor = `url(${autoPath}) 10 10, auto`;
                }
            });
        } else {
            allElements.forEach(ele => {
                const computedStyle = window.getComputedStyle(ele);
                if (computedStyle.cursor.includes("url")) { // Reset only modified elements
                    ele.style.cursor = ""; // Restore to original pointer
                }
            });
            document.body.style.cursor = "default"; // Set the default cursor
        }
        Array.from(titles).forEach(title => {
            if (condition) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = 'white';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        });
    }
    let whitecondition = false;

    function whiteFunction() {
        whitecondition = !whitecondition;
        const cursorPath = '/images/white-pointer.svg';
        const autoPath = '/images/white.svg';
        const allElements = document.querySelectorAll('*');
        const titles = document.getElementsByClassName('white')

        if (whitecondition) {
            allElements.forEach(ele => {
                const computedStyle = window.getComputedStyle(ele);
                if (computedStyle.cursor === "pointer") { // Check computed style, not inline style
                    ele.style.cursor = `url(${cursorPath}) 10 10, pointer`;
                }
                else {
                    ele.style.cursor = `url(${autoPath}) 10 10, auto`;
                }
            });
        } else {
            allElements.forEach(ele => {
                const computedStyle = window.getComputedStyle(ele);
                if (computedStyle.cursor.includes("url")) { // Reset only modified elements
                    ele.style.cursor = ""; // Restore to original pointer
                }
            });
            document.body.style.cursor = "default"; // Set the default cursor
        }
        Array.from(titles).forEach(title => {
            if (whitecondition) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = 'white';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        });
    }












    const handleMouseOver = (event) => {
        event.target.style.border = "2px solid orange";
    };

    const handleMouseLeave = (event) => {
        event.target.style.border = "";
    };




    // let animations = false;
    // const toggleAnimation = () => {
    //     animations = !animations;
    //     const titles = document.getElementsByClassName('animation');

    //     const body = document.body
    //     if (animations) {
    //         body.classList.add('stop-animations')
    //     } else {
    //         body.classList.remove('stop-animations')

    //     }
    //     Array.from(titles).forEach(title => {
    //         if (animations) {
    //             title.style.backgroundColor = "#146FF8";
    //             title.style.color = 'white';
    //         } else {
    //             title.style.backgroundColor = '';
    //             title.style.color = '';

    //         }
    //     });
    // }










    /////////////////////////////readmode////////////////////////////
    let isEnabled = false;
    const originalClasses = new Map();

    const readMode = () => {
        const body = document.body; // Select the body element

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


    let mask = false;
    let Readingmask = null; // Declare the reference outside the function

    const readingmask = () => {
        mask = !mask;
        const titles = document.getElementsByClassName('readingmask');
        Array.from(titles).forEach(title => {
            if (mask) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';
            }
        })

        if (mask) {
            // Create the element when mask is true, if it doesn't already exist
            if (!Readingmask) {
                Readingmask = document.createElement("div");
                Object.assign(Readingmask.style, {
                    position: "fixed",
                    backgroundColor: "transparent",
                    boxShadow: "0px 0px 10000px 5000px rgba(0, 0, 0, 0.6)",
                    height: "150px",
                    width: "100%",
                    zIndex: "9999",
                    pointerEvents: "none"
                });
                document.body.appendChild(Readingmask);

                document.addEventListener("mousemove", (event) => {
                    if (Readingmask) { // Check if Readingmask exists before updating style
                        let maskWidth = window.innerWidth;
                        let maskHeight = 150; // Same height as above
                        let newX = event.clientX - maskWidth / 2;
                        let newY = event.clientY - maskHeight / 2;
                        newX = Math.max(0, Math.min(newX, window.innerWidth - maskWidth));
                        newY = Math.max(0, Math.min(newY, window.innerHeight - maskHeight));
                        Readingmask.style.left = `${newX}px`;
                        Readingmask.style.top = `${newY}px`;
                    }
                });
            }
        } else {
            // Remove the mask element when mask is false
            if (Readingmask) {
                document.body.removeChild(Readingmask); // Remove the mask element
                Readingmask = null; // Clear the reference
            }
        }
    };


    let Guide = false;
    let Readingguide = null;

    const readingGuide = (event) => {
        Guide = !Guide; // Toggle guide
        const titles = document.getElementsByClassName('readingguide');
        Array.from(titles).forEach(title => {
            if (Guide) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';
            }
        })

        if (Guide) {
            if (!Readingguide) { // Only create if it doesn't exist
                Readingguide = document.createElement('div');

                Object.assign(Readingguide.style, {
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '400px', // Guide Width
                    height: '13px', // Guide Height
                    backgroundColor: '#146FF8',
                    zIndex: '9999',
                    border: '4px solid #000',
                    overflow: 'hidden',
                    borderRadius: '50px',
                    pointerEvents: 'none'
                });

                document.body.appendChild(Readingguide);
                let startX = event.clientX - Readingguide.offsetWidth / 2;
                let startY = event.clientY - Readingguide.offsetHeight / 2;
                Readingguide.style.left = `${startX}px`;
                Readingguide.style.top = `${startY}px`;
                // Add mousemove event only once
                document.addEventListener('mousemove', (event) => {
                    if (Readingguide) {
                        let newX = event.clientX - Readingguide.offsetWidth / 2;
                        let newY = event.clientY - Readingguide.offsetHeight / 2;

                        // Keep within screen bounds
                        newX = Math.max(0, Math.min(newX, window.innerWidth - Readingguide.offsetWidth));
                        newY = Math.max(0, Math.min(newY, window.innerHeight - Readingguide.offsetHeight));

                        Readingguide.style.left = `${newX}px`;
                        Readingguide.style.top = `${newY}px`;
                    }
                });
            }
        } else {
            // Remove the guide
            if (Readingguide) {
                document.body.removeChild(Readingguide);
                Readingguide = null;
            }
        }
    };








    return (
        <>
            <div id="accessibilty" className='m-5 bg-[#fff] px-4 rounded-xl '>
                <div id="accessibilty" className='text-[18px] py-5'>Orientation Adjustments</div>

                <div id="accessibilty" className='flex flex-wrap lg:flex-nowrap gap-5'>
                    <div id="accessibilty" className='flex flex-wrap gap-5 lg:gap-0 lg w-full lg:w-[30%]'>
                        <Content_box2
                            imag={"/images/svgviewer-output (35).svg"}
                            heading={"Mute Sounds"}
                            onClick={togglemutesound}
                            customStyle={'sound'}

                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (38).svg"}
                            heading={"Reading Guide"}
                            onClick={readingGuide}
                            // id={"dynamic_id_container"}
                            customStyle={'readingguide'}

                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (40).svg"}
                            heading={"Stop Animations"}
                            onClick={togglestopanimation}
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
                                onClick={readingmask}
                                customStyle={'readingmask'}


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
                                onClick={triggerFunction}
                                customStyle={"black"}



                            />
                            <Content_box2
                                imag={"/images/svgviewer-output (45).svg"}
                                heading={"Big White Cursor"}
                                onClick={whiteFunction}
                                customStyle={"white"}

                            />

                        </div>



                    </div>

                </div>


            </div>
        </>
    )
}

export default Orientation