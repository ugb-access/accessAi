
import Content_box2 from './Content_box2';
import Content_box1 from './Content_box1';
import React, { useState, useEffect } from 'react';


const Orientation = () => {
    const [hideimage, setHideImage] = useState(false);
    const hideImage = () => {
        setHideImage(!hideimage)
        const images = document.querySelectorAll('img')
        images.forEach((img) => {
            img.style.display = hideimage ? 'block' : 'none';
        });
    }
    const [mute, setMute] = useState(false)
    const mutemedia = () => {
        setMute(!mute)
        const media = document.querySelectorAll('audio,video')
        if (!mute) {
            media.forEach((med) => {
                med.muted = true
            })
        } else {
            media.forEach((med) => {
                med.muted = false
            })
        }
    }

    const [hoverHighlight, setHoverHighlight] = useState(false);

    const toggleHoverHighlight = () => {
        setHoverHighlight(prev => !prev);
    };

    const handleMouseOver = (event) => {
        event.target.style.border = "2px solid orange";
    };

    const handleMouseLeave = (event) => {
        event.target.style.border = "";
    };

    useEffect(() => {
        const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, img, span");

        hoverHighlight &&
            elements.forEach((ele) => {
                ele.addEventListener("mouseover", handleMouseOver);
                ele.addEventListener("mouseleave", handleMouseLeave);
            });
        return () => {
            console.log("cleaning")
            elements.forEach((ele) => {
                ele.removeEventListener("mouseover", handleMouseOver);
                ele.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [hoverHighlight]);

    const [animationsDisabled, setAnimationsDisabled] = useState(false);
    const toggleAnimation = () => {
        setAnimationsDisabled(!animationsDisabled)
        const body = document.body
        if (!animationsDisabled) {
            body.classList.add('stop-animations')
        } else {
            body.classList.remove('stop-animations')

        }
    }


    // let isScriptAdded = false;
    const handleClick = () => {
        toggleScript();

    };

    const isScriptAdded = document.getElementById("dynamic-guide-script");
    console.log('isScriptAdded: ', isScriptAdded);

    const toggleScript = () => {
        const guideId = 'guide_element';
        const scriptId = 'dynamic-guide-script';
        const existingScript = document.getElementById(scriptId);
        let container = document.getElementById("dynamic_id_container");
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
                        guideElement.style.width = '500px';
                        guideElement.style.height = '10px';
                        guideElement.style.backgroundColor = 'blue';
                        guideElement.style.pointerEvents = 'none';
                        guideElement.style.transition = 'opacity 0.3s ease';
                        guideElement.style.zIndex = '10';
                        guideElement.style.opacity = '0';
                        guideElement.id = '${guideId}';
                        document.body.appendChild(guideElement);
                    }
                    guideElement.style.opacity = isVisible ? '1' : '1';

                    const handleMouseMove = (event) => {
                        if (guideElement) {
                            guideElement.style.left = \`\${event.pageX}px\`;
                            guideElement.style.top = \`\${event.pageY}px\`;
                        }

                         const scriptId = 'dynamic-guide-script';
                        const scriptIsAdded = document.getElementById(scriptId);

                        let container = document.getElementById("dynamic_id_container");
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
                         if(container)    container.classList.remove("!bg-[#146FF8]");
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
                console.log("Script added. Click anywhere to toggle guide visibility.");
            })();
        `;
            document.body.appendChild(scriptElement);
            container.classList.remove("!text-black");
            container.classList.add("!bg-[#146FF8]");

            childTextDiv.classList.remove("!text-black");
            childTextDiv.classList.add("!text-[#fff]");


            console.log('Script added and guide activated.');
        }
    };





    return (
        <div className='m-5 bg-[#fff] px-5 rounded-xl '>
            <div className='text-[18px] pb-5'>Orientation Adjustments</div>

            <div className='flex flex-wrap lg:flex-nowrap gap-5'>
                <div className='flex flex-wrap gap-5 lg:gap-0 lg w-full lg:w-[30%]'>
                    <Content_box2
                        imag={"/images/svgviewer-output (35).svg"}
                        heading={"Mute Sounds"}
                        onClick={mutemedia}
                        customStyle={mute && "!bg-[#146FF8]  "}
                        customHeading={mute && "!text-[#fff]"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (38).svg"}
                        heading={"Reading Guide"}
                        onClick={handleClick}
                        // customStyle={isScriptAdded && "!bg-[#146FF8]"}
                        // customHeading={isScriptAdded ? "!text-[#fff]" : "text-black"}
                        id={"dynamic_id_container"}

                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (40).svg"}
                        heading={"Stop Animations"}
                        onClick={toggleAnimation}
                        customStyle={animationsDisabled && "!bg-[#146FF8] "}
                        customHeading={animationsDisabled && "!text-[#fff]"}

                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (43).svg"}
                        heading={"Highlight Focus"}

                    />


                </div>
                <div className='w-full lg:flex-1'>
                    <div className='flex gap-5 '>
                        <Content_box2
                            imag={"/images/svgviewer-output (36).svg"}
                            heading={"Hide Images"}
                            onClick={hideImage}
                            customStyle={hideimage && "!bg-[#146FF8] "}
                            customHeading={hideimage && "!text-[#fff]"}
                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (37).svg"}
                            heading={"Read Mode"}
                        />

                    </div>
                    <Content_box1
                        imag={"/images/svgviewer-output (16).svg"}
                        heading={"Useful Links"}
                        showBar={false}
                        inputBar={true}
                        colorButton={false}

                    />
                    <div className='flex gap-5 '>
                        <Content_box2
                            imag={"/images/svgviewer-output (41).svg"}
                            heading={"Reading Mask"}
                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (42).svg"}
                            heading={"HighLight Hover"}
                            onClick={toggleHoverHighlight}
                            customStyle={hoverHighlight && "!bg-[#146FF8] "}
                            customHeading={hoverHighlight && "!text-[#fff]"}
                        />

                    </div>
                    <div className='flex gap-5 '>
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
            {/* <div
                className={`absolute pointer-events-none transition-opacity duration-300 `}
                style={{
                    left: `${position.x - 250}px`,
                    top: `${position.y - 10}px`,
                    width: '500px',
                    height: '20px',
                    background: 'red'
                }}
            >
                <div className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full bg-red-500 transform -translate-x-1/2 -translate-y-1/2" />
            </div> */}
        </div>
    )
}

export default Orientation