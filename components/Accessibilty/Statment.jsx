import React from 'react'
// import Image from "next/image";


const Statment = () => {
    const data = [
        { acsbtitlemain: "Accessibilty Statment" },
        { acsbtitle: "Compliance status" },
        { paragraph1: "We firmly believe that the internet should be available and accessible to anyone and are committed to providing a website that is accessible to the broadest possible audience, regardless of ability." },
        { paragraph2: "To fulfill this, we aim to adhere as strictly as possible to the World Wide Web Consortiums (W3C) Web Content Accessibility Guidelines 2.1 (WCAG 2.1) at the AA level. These guidelines explain how to make web content accessible to people with a wide array of disabilities. Complying with those guidelines helps us ensure that the website is accessible to blind people, people with motor impairments, visual impairment, cognitive disabilities, and more." },
        { paragraph3: "This website utilizes various technologies that are meant to make it as accessible as possible at all times. We utilize an accessibility interface that allows persons with specific disabilities to adjust the websites UI (user interface) and design it to their personal needs." },
        { paragraph4: "Additionally, the website utilizes an AI-based application that runs in the background and optimizes its accessibility level constantly. This application remediates the websites HTML, adapts its functionality and behavior for screen-readers used by blind users, and for keyboard functions used by individuals with motor impairments." },
        { paragraph5: "If you wish to contact the websites owner please use the website's form" },
        { screenreadertitle: "Screen-reader and keyboard navigation" },
        { paragraph6: "Our website implements the ARIA attributes (Accessible Rich Internet Applications) technique, alongside various behavioral changes, to ensure blind users visiting with screen-readers can read, comprehend, and enjoy the websites functions. As soon as a user with a screen-reader enters your site, they immediately receive a prompt to enter the Screen-Reader Profile so they can browse and operate your site effectively. Heres how our website covers some of the most important screen-reader requirements:" },
        { screenoptimize: "Screen-reader optimization:&nbsp" },
        { paragraph7: "we run a process that learns the websites components from top to bottom, to ensure ongoing compliance even when updating the website. In this process, we provide screen-readers with meaningful data using the ARIA set of attributes. For example, we provide accurate form labels; descriptions for actionable icons (social media icons, search icons, cart icons, etc.); validation guidance for form inputs; element roles such as buttons, menus, modal dialogues (popups), and others.&nbsp;" },
        { paragraph8: "Additionally, the background process scans all of the websites images. It provides an accurate and meaningful image-object-recognition-based description as an ALT (alternate text) tag for images that are not described. It will also extract texts embedded within the image using an OCR (optical character recognition) technology. To turn on screen-reader adjustments at any time, users need only to press the Alt+1 keyboard combination. Screen-reader users also get automatic announcements to turn the Screen-reader mode on as soon as they enter the website." },
        { paragraph9: "These adjustments are compatible with popular screen readers such as JAWS, NVDA, VoiceOver, and TalkBack." },
        { keyboardoptimmize: "Keyboard navigation optimization:&nbsp" },
        { paragraph10: "The background process also adjusts the websites HTML and adds various behaviors using JavaScript code to make the website operable by the keyboard. This includes the ability to navigate the website using the Tab and Shift+Tab keys, operate dropdowns with the arrow keys, close them with Esc, trigger buttons and links using the Enter key, navigate between radio and checkbox elements using the arrow keys, and fill them in with the Spacebar or Enter key." },
        { paragraph11: "Additionally, keyboard users will find content-skip menus available at any time by clicking Alt+2, or as the first element of the site while navigating with the keyboard. The background process also handles triggered popups by moving the keyboard focus towards them as soon as they appear, not allowing the focus to drift outside." },
        { paragraph12: "Users can also use shortcuts such as “M” (menus), “H” (headings), “F” (forms), “B” (buttons), and “G” (graphics) to jump to specific elements." },
        { disabilitypeofile: "Disability profiles supported on our website" },
        { safeprofile: "Epilepsy Safe Profile:" },
        { paragraph13: " this profile enables people with epilepsy to safely use the website by eliminating the risk of seizures resulting from flashing or blinking animations and risky color combinations." },
        { visionprofile: "Vision Impaired Profile:" },
        { paragraph14: " this profile adjusts the website so that it is accessible to the majority of visual impairments such as Degrading Eyesight, Tunnel Vision, Cataract, Glaucoma, and others." },
        { disibiltyprofile: "Cognitive Disability Profile:" },
        { paragraph15: " this profile provides various assistive features to help users with cognitive disabilities such as Autism, Dyslexia, CVA, and others, to focus on the essential elements more easily." },
        { friendlyprofile: "ADHD Friendly Profile" },
        { paragraph16: " this profile significantly reduces distractions and noise to help people with ADHD, and Neurodevelopmental disorders browse, read, and focus on the essential elements more easily." },
        { userprofile: "Blind Users Profile (Screen-readers):" },
        { paragraph17: " this profile adjusts the website to be compatible with screen-readers such as JAWS, NVDA, VoiceOver, and TalkBack. A screen-reader is installed on the blind users computer, and this site is compatible with it." },
        { keyboardnavigationprofile: "Keyboard Navigation Profile (Motor-Impaired):" },
        { paragraph18: " this profile enables motor-impaired persons to operate the website using the keyboard Tab, Shift+Tab, and the Enter keys. Users can also use shortcuts such as “M” (menus), “H” (headings), “F” (forms), “B” (buttons), and “G” (graphics) to jump to specific elements." },
        { uidesigntitle: "Additional UI, design, and readability adjustments" },
        { font: "Font adjustments" },
        { paragraph19: "&nbsp;users can increase and decrease its size, change its family (type), adjust the spacing,&nbsp;alignment, line height,&nbsp;and more." },
        { color: "Color adjustments" },
        { paragraph20: "users can select various color contrast profiles such as light, dark, inverted, and monochrome. Additionally, users can swap color schemes of titles, texts, and backgrounds with over seven different coloring options." },
        { animation: "Animations " },
        { paragraph21: "epileptic users can stop all running animations with the click of a button. Animations controlled by the interface include videos, GIFs, and CSS flashing transitions." },
        { highlightly: "Content highlighting " },
        { paragraph22: "users can choose to emphasize essential elements such as links and titles. They can also choose to highlight focused or hovered elements only." },
        { audio: "Audio muting" },
        { paragraph23: "users with hearing devices may experience headaches or other issues due to automatic audio playing. This option lets users mute the entire website instantly." },
        { disorder: "Cognitive disorders" },
        { paragraph24: "we utilize a search engine linked to Wikipedia and Wiktionary, allowing people with cognitive disorders to decipher meanings of phrases, initials, slang, and others." },
        { additionalfunction: "Additional functions " },
        { paragraph25: " we allow users to change cursor color and size, use a printing mode, enable a virtual keyboard, and many other functions." },
        { tecnologycompability: "Assistive technology and browser compatibility" },
        { paragraph26: "We aim to support as many browsers and assistive technologies as possible, so our users can choose the best fitting tools for them, with as few limitations as possible. Therefore, we have worked very hard to be able to support all major systems that comprise over 95% of the user market share, including Google Chrome, Mozilla Firefox, Apple Safari, Opera and Microsoft Edge, JAWS, and NVDA (screen readers), both for Windows and MAC users." },
        { feedback: "Notes, comments, and feedback" },
        { paragraph27: "Despite our very best efforts to allow anybody to adjust the website to their needs, there may still be pages or sections that are not fully accessible, are in the process of becoming accessible, or are lacking an adequate technological solution to make them accessible. Still, we are continually improving our accessibility, adding, updating, improving its options and features, and developing and adopting new technologies. All this is meant to reach the optimal level of accessibility following technological advancements. If you wish to contact the website’s owner, please use the website's form" }



    ]
    let show = true
    const hide = () => {
        show = !show
        const id = document.getElementById("toggle")

        if (id) {
            id.style.display = show ? "block" : "none";
        }

    }
    return (
        <div id='toggle' style={{ display: "none" }} className='bg-white px-4 py-4  m-5 z-10 h-[90%] rounded-lg   overflow-y-auto w-[34.5%] top-2 bottom-2 fixed'>


            <svg onClick={() => { hide() }} fill="" width={15} height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1075 1024" className="icon cursor-pointer" data-testid="base-icon-svg" style={{ display: "inline-flex" }} version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,0,0)">
                <path xmlns="http://www.w3.org/2000/svg" d="M64.557 892.892c-29.992 29.993-29.992 78.623 0 108.616 29.992 29.988 78.62 29.988 108.612 0l380.893-380.897 380.897 380.897c29.993 29.988 78.618 29.988 108.611 0 29.993-29.993 29.993-78.623 0-108.616L662.678 512l380.892-380.894c29.993-29.992 29.993-78.619 0-108.612s-78.618-29.992-108.611 0L554.062 403.388 173.169 22.494c-29.992-29.992-78.619-29.992-108.612 0s-29.992 78.619 0 108.612L445.451 512 64.557 892.892z"></path>
            </svg>
            <div className=' px-10 py-3'>            {
                data.map((item, i) => {
                    return (
                        <div id="accessibilty" key={i}>
                            {item.acsbtitlemain && <strong className='text-primary text-2xl block mt-5 '>{item.acsbtitlemain}</strong>
                            }
                            {item.acsbtitle && <strong className='block mt-10 !mb-6  text-lg'>{item.acsbtitle}</strong>
                            }
                            {item.paragraph1 && <p id="accessibilty" className='mb-6'>{item.paragraph1}</p>}
                            {item.paragraph2 && <p id="accessibilty" className='my-6'>{item.paragraph2}</p>}
                            {item.paragraph3 && <p id="accessibilty" className='my-6'>{item.paragraph3}</p>}
                            {item.paragraph4 && <p id="accessibilty" className='my-6'>{item.paragraph4}</p>}
                            {item.paragraph5 && <p id="accessibilty" className='my-6'>{item.paragraph5}</p>}
                            <strong className='text-lg'>{item.screenreadertitle}</strong>
                            {item.paragraph6 && <p id="accessibilty" className='my-6'>{item.paragraph6}</p>}
                            <div className='px-5'>
                                {item.screenoptimize && <ol className='list-decimal'>
                                    <li id="accessibilty"><strong >{item?.screenoptimize}</strong></li>
                                </ol>}

                                <p id="accessibilty" className=' text-base'>{item.paragraph7}</p>
                                {item.paragraph8 && <p id="accessibilty" className='my-6'>{item.paragraph8}</p>}
                                {item.paragraph9 && <p id="accessibilty" className='my-6'>{item.paragraph9}</p>}
                                {item.keyboardoptimmize && <ol className='list-decimal' start='2'>
                                    <li id="accessibilty"><strong>{item.keyboardoptimmize}</strong></li>
                                </ol>}
                                <p id="accessibilty" className=' text-base'>{item.paragraph10}</p>
                                {item.paragraph11 && <p id="accessibilty" className='my-6'>{item.paragraph11}</p>}
                                {item.paragraph12 && <p id="accessibilty" className='my-6'>{item.paragraph12}</p>}
                            </div>
                            {item.disabilitypeofile && <strong className='block mb-4'>{item.disabilitypeofile}</strong>}

                            <div className='px-5'>
                                {item.safeprofile && <ul className='list-disc '>
                                    <li id="accessibilty"><strong>{item.safeprofile}</strong></li>
                                </ul>}
                                {/* <p id="accessibilty" className=' text-base mb-4'>{item.paragraph13}</p> */}
                                {item.paragraph13 && <p id="accessibilty" className='mb-4'>{item.paragraph13}</p>}

                                {item.visionprofile && <ul className='list-disc ' >
                                    <li id="accessibilty"><strong>{item.visionprofile}</strong></li>
                                </ul>}
                                {item.paragraph14 && <p id="accessibilty" className='mb-4'>{item.paragraph14}</p>}

                                {item.disibiltyprofile && <ul className='list-disc ' >
                                    <li id="accessibilty"><strong>{item.disibiltyprofile}</strong></li>
                                </ul>}
                                {item.paragraph15 && <p id="accessibilty" className='mb-4'>{item.paragraph15}</p>}

                                {item.friendlyprofile && <ul className='list-disc ' >
                                    <li id="accessibilty"><strong>{item.friendlyprofile}</strong></li>
                                </ul>}
                                {item.paragraph16 && <p id="accessibilty" className='mb-4'>{item.paragraph16}</p>}

                                {item.userprofile && <ul className='list-disc ' >
                                    <li id="accessibilty"><strong>{item.userprofile}</strong></li>
                                </ul>}
                                {item.paragraph17 && <p id="accessibilty" className='mb-4'>{item.paragraph17}</p>}

                                {item.keyboardnavigationprofile && <ul className='list-disc ' >
                                    <li id="accessibilty"><strong>{item.keyboardnavigationprofile}</strong></li>
                                </ul>}
                                {item.paragraph18 && <p id="accessibilty" className='mb-4'>{item.paragraph18}</p>}
                            </div>
                            {item.uidesigntitle && <strong className='block mb-4'>{item.uidesigntitle}</strong>}


                            <div className='px-5'>
                                {item.font && <ol className='list-decimal' >
                                    <li id="accessibilty"><strong>{item.font}</strong></li>
                                </ol>}
                                {item.paragraph19 && <p id="accessibilty" className='mb-6'>{item.paragraph19}</p>}

                                {item.color && <ol className='list-decimal' start='2' >
                                    <li id="accessibilty"><strong>{item.color}</strong></li>
                                </ol>}
                                {item.paragraph20 && <p id="accessibilty" className='mb-6'>{item.paragraph20}</p>}

                                {item.animation && <ol className='list-decimal' start='3' >
                                    <li id="accessibilty"><strong>{item.animation}</strong></li>
                                </ol>}
                                {item.paragraph21 && <p id="accessibilty" className='mb-6'>{item.paragraph21}</p>}

                                {item.highlightly && <ol className='list-decimal' start='4' >
                                    <li id="accessibilty" ><strong>{item.highlightly}</strong></li>
                                </ol >}
                                {item.paragraph22 && <p id="accessibilty" className='mb-6'>{item.paragraph22}</p>}

                                {item.audio && <ol className='list-decimal' start='5' >
                                    <li id="accessibilty"><strong>{item.audio}</strong></li>
                                </ol>}
                                {item.paragraph23 && <p id="accessibilty" className='mb-6'>{item.paragraph23}</p>}

                                {item.disorder && <ol className='list-decimal' start='6' >
                                    <li id="accessibilty"><strong>{item.disorder}</strong></li>
                                </ol>}
                                {item.paragraph24 && <p id="accessibilty" className='mb-6'>{item.paragraph24}</p>}

                                {item.additionalfunction && <ol className='list-decimal' start='7' >
                                    <li id="accessibilty"><strong>{item.additionalfunction}</strong></li>
                                </ol>}
                                <p id="accessibilty" className='text-base'>{item.paragraph25}</p>
                                {item.paragraph25 && <p id="accessibilty" className='mb-6'>{item.paragraph25}</p>}

                            </div>
                            {item.tecnologycompability && <strong className='block my-4'>{item.tecnologycompability}</strong>
                            }
                            <p id="accessibilty" className=' text-base'>{item.paragraph26}</p>
                            {item.feedback && <strong className='block my-4'>{item.feedback}</strong>}

                            <p id="accessibilty" className=' text-base'>{item.paragraph27}</p>
                        </div>
                    )
                })
            }
            </div>


        </div >
    )
}

export default Statment