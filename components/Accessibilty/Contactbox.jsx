import Content_box1 from './Content_box1'
import Content_box2 from './Content_box2'
import { SCRIPT_MAGINIFIED } from "../../utils/scripts/maginified"
import { SCRIPT_CENTER } from "../../utils/scripts/textcenter"
import { SCRIPT_TEXTLEFT } from "../../utils/scripts/textleft"
import { SCRIPT_TEXTRIGHT } from "../../utils/scripts/textright"
import { SCRIPT_READ } from "../../utils/scripts/readfont"
import { SCRIPT_DARK } from "../../utils/scripts/darkcontrast"
import { SCRIPT_HIGH } from "../../utils/scripts/highcontrast"
import { SCRIPT_LIGHT } from "../../utils/scripts/lightcontrast"
import { SCRIPT_HIGHSATURATION } from "../../utils/scripts/highsaturation"
import { MONOCROME } from "../../utils/scripts/monochorome"
import { SCRIPT_LOWSATURATION } from "../../utils/scripts/lowsaturation"
import { MUTE_SOUND } from "../../utils/scripts/mutesound"
import { STOP_ANIMATION } from "../../utils/scripts/stopanimation"
import { READ_MODE } from "../../utils/scripts/readmode"
import { HIDE_IMAGE } from "../../utils/scripts/hideimage"
import { HOVER_HIGHLIGHT } from "../../utils/scripts/hoverhighlight"
import { READ_GUIDE } from "../../utils/scripts/readingguide"
import { READ_MASK } from "../../utils/scripts/readingmask"
import { WHITE_CURSOR } from "../../utils/scripts/whitecursor"
import { BLACK_CURSOR } from "../../utils/scripts/blackcursor"
import { FOCOUS_HIGHLIGHT } from "../../utils/scripts/highlightfocus"
import { HIGHLIGHT_TITLE } from "../../utils/scripts/highlighttitle"
import { HIGHLIGHT_LINK } from "../../utils/scripts/highlightlink"
import { FONT_SIZE } from "../../utils/scripts/fontsize"
import { CONTENT_SCALING } from "../../utils/scripts/scaling"
import { LINE_HEIGHT_ADJUSTMENT } from "../../utils/scripts/lineheight"
import { LETTER_SPACING_ADJUSTMENT } from "../../utils/scripts/letterspacing"
import { TITLE_COLOR } from "../../utils/scripts/titlecolor"
import { TEXT_COLOR } from "../../utils/scripts/textcolor"
import { BACKGROUND_COLOR } from "../../utils/scripts/backgroudcolor"
import { SAFE_PROFILE } from "../../utils/scripts/saveprofile"



const Contactbox = () => {

    let is_highlight_title = false
    let is_highlight_link = false
























    //

    //  ---------------- main script that handle all kind of functions in it ----------------------

    const mainScript = document.createElement("script");
    mainScript.id = "mainScript";
    mainScript.innerHTML = `
    
        ${SCRIPT_MAGINIFIED()}
        if (localStorage.getItem('magnified') === 'true') {
            toggleMagnifideScript();
        }

        ${SCRIPT_CENTER()}
        if (localStorage.getItem('textCenter') === 'true') {
            toggleTextcenter();
        }

        ${SCRIPT_TEXTLEFT()}
        if (localStorage.getItem('textLeftlocal') === 'true') {
                toggleTextLeft();
        }

        ${SCRIPT_TEXTRIGHT()}
        if (localStorage.getItem('textrightlocal') === 'true') {
              toggleTextRight();
        }

        
        ${SCRIPT_READ()}
        if (localStorage.getItem('readfontlocal') === 'true') {
              toggleReadMode()
        }

        ${SCRIPT_DARK()}
        if (localStorage.getItem('darkcontrastlocal') === 'true') {
               toggledarkcontrast()
        }

        ${SCRIPT_HIGH()}
        if (localStorage.getItem('highcontrastlocal') === 'true') {
               togglehighcontrast()
        }
        ${SCRIPT_LIGHT()}
        if (localStorage.getItem('lightcontrastlocal') === 'true') {
               togglelightcontrast()
        }
        
        ${SCRIPT_HIGHSATURATION()}
        if (localStorage.getItem('highsaturationlocal') === 'true') {
                togglehighsaturation()
        }
        ${MONOCROME()}
        if (localStorage.getItem('monocromelocal') === 'true') {
                togglemonocorome()
        }
        ${SCRIPT_LOWSATURATION()}
        if (localStorage.getItem('lowsaturationlocal') === 'true') {
                togglelowsaturation()
        }
        ${MUTE_SOUND()}
        if (localStorage.getItem('mutesoundlocal') === 'true') {
                togglemutesound()
        }
        ${STOP_ANIMATION()}
        if (localStorage.getItem('animationlocal') === 'true') {
                togglestopanimation()
        }
        ${READ_MODE()}
        const originalClasses = new Map();
        if (localStorage.getItem('Readmodelocal') === 'true') {
                 togglereadmode()
         }
        ${HIDE_IMAGE()}
        if (localStorage.getItem('hideimagelocal') === 'true') {
                 togglehideimage()
         }
        ${HOVER_HIGHLIGHT()}
        if (localStorage.getItem('hoverhighlightlocal') === 'true') {
                 togglehoverhighlight()
         }
        ${READ_GUIDE()}
        if (localStorage.getItem('readingguidelocal') === 'true') {
                 togglereadingguide()
         }
        ${READ_MASK()}
        if (localStorage.getItem('readingmasklocal') === 'true') {
                 togglereadingmask()
         }
        
        ${WHITE_CURSOR()}
        if (localStorage.getItem('whitecursorlocal') === 'true') {
                 togglewhitecursor()
         }
        ${BLACK_CURSOR()}
        if (localStorage.getItem('blackcursorlocal') === 'true') {
                 toggleblackcursor()
         }
        ${FOCOUS_HIGHLIGHT()}
        if (localStorage.getItem('focouslocal') === 'true') {
                 togglefocoushighlight()
         }
        ${HIGHLIGHT_TITLE()}
        if (localStorage.getItem('highlighttitlelocal') === 'true') {
                 togglehighlighttitle()
         }
        ${HIGHLIGHT_LINK()}
        if (localStorage.getItem('highlightlinklocal') === 'true') {
                 togglehighlightlink()
         }
        ${FONT_SIZE()}
        if (localStorage.getItem('font-sizelocal') === 'true') {
                 increasedecreasefontsize()
         }
        ${CONTENT_SCALING()}
        if (localStorage.getItem('content-scale') === 'true') {
                 increasedecreasescaling()
         }
        ${LINE_HEIGHT_ADJUSTMENT()}
        if (localStorage.getItem('line-height-local') === 'true') {
                 increaseDecreaseLineHeight()
         }
        ${LETTER_SPACING_ADJUSTMENT()}
        if (localStorage.getItem('letter-spacing-local') === 'true') {
                 increaseDecreaseLetterSpacing()
         }
        ${TITLE_COLOR()}
        if (localStorage.getItem('titlecolorlocal') === 'true') {
                 changetitlecolor()
         }
        ${TEXT_COLOR()}
        if (localStorage.getItem('titlecolorlocal') === 'true') {
                changetextcolor()
         }
        ${BACKGROUND_COLOR()}
        if (localStorage.getItem('bgcolorlocal') === 'true') {
                changeBackgroundColor()
         }
        ${SAFE_PROFILE()}
        if (localStorage.getItem('primaryColor') === 'true') {
                saveprofile()
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
                        handleImageClick={() => increasedecreasescaling(true)}   // Increase scale inline
                        handleImagClick={() => increasedecreasescaling(false)}  // Decrease scale inline ✅ Fixed typo
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
                                togglehighlighttitle(is_highlight_title)
                            }}
                            customStyle={'highlighttitle'}


                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (28).svg"}
                            heading={"Highlight Links"}
                            onClick={() => {
                                is_highlight_link = !is_highlight_link
                                togglehighlightlink(is_highlight_link)
                            }}
                            customStyle={"highlightlink "}

                        />


                    </div>
                    <Content_box1
                        imag={"/images/svgviewer-output (24).svg"}
                        handleImageClick={() => increasedecreasefontsize(true)} // Increase by 10%
                        handleImagClick={() => increasedecreasefontsize(false)} // Decrease by 10%
                        heading={"Adjust Font Sizing"}
                        imag2={"/images/svgviewer-output (18).svg"}
                        para={<span id='accessibilty' className="font-percentage">Default</span>} // Initially "Default"
                        imag3={"/images/svgviewer-output (17).svg"}
                        colorButton={false}
                    />

                    <Content_box1
                        imag={"/images/svgviewer-output (24).svg"}
                        handleImageClick={() => increaseDecreaseLineHeight(true)} // Increase by 10%
                        handleImagClick={() => increaseDecreaseLineHeight(false)} // Decrease by 10%
                        heading={"Adjust Line Height"}
                        imag2={"/images/svgviewer-output (18).svg"}
                        para={<span id='accessibilty' className="line-height-percentage">Default</span>} // Initially "Default"
                        imag3={"/images/svgviewer-output (17).svg"}
                        colorButton={false}
                    />
                    <Content_box1
                        imag={"/images/svgviewer-output (26).svg"}
                        heading={"Adjust Letter Spacing"}
                        handleImageClick={() => increaseDecreaseLetterSpacing(true)} // Increase by 10%
                        handleImagClick={() => increaseDecreaseLetterSpacing(false)}
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
                        onClick={toggleReadMode}
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
                        onClick={toggleTextcenter}
                        customStyle={"textcenter"}

                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (22).svg"}
                        heading={"Align Left"}
                        onClick={toggleTextLeft}
                        customStyle={"textleft "}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (21).svg"}
                        heading={"Align Right"}
                        onClick={toggleTextRight}
                        customStyle={"textright"}
                    />

                </div>
            </div>
        </div>
    )
}

export default Contactbox


export const handleHighLight = (active) => {
    togglehighlightlink(active)
    togglehighlighttitle(active)
}




