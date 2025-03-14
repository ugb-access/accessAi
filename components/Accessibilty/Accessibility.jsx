// import React from "react"

import Contactbox, { handleHighLight } from "./Contactbox";
import ColorAdjustment from "./ColorAdjustment";
import Orientation from "./Orientation";
import Footer from "./Footer";
import Statment from "./Statment";
// import Language from "./Language";
import Image from "next/image";

import React, { useState, } from 'react';



const SVG = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1075 1024"
    className="icon"
    width={20}
    height={20}
    data-testid="base-icon-svg"
    style={{
      display: "inline-flex",
    }}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M612.562 2.758c20.966 7.132 35.072 26.823 35.072 48.972v324.857h283.013a51.732 51.732 0 0 1 46.408 28.877 51.737 51.737 0 0 1-5.407 54.389l-418.427 543.953c-13.507 17.556-36.69 24.566-57.658 17.434s-35.071-26.824-35.071-48.973V647.413H177.478a51.729 51.729 0 0 1-41.001-83.267L554.905 20.191C568.406 2.635 591.59-4.375 612.561 2.757zM282.529 543.959H512.22c28.57 0 51.727 23.158 51.727 51.727v224.497l261.647-340.141H595.906c-28.57 0-51.727-23.159-51.727-51.727V203.816l-261.65 340.143z"
      style={{}}
    />
  </svg>
);
const SVG2 = () => (




  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1075 1024"
    className="icon"
    width={20}
    height={20}
    data-testid="base-icon-svg"
    style={{
      display: "inline-flex",
    }}

  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M257.691 392.331C208.803 437.339 174.936 483.196 155.706 512c19.231 28.805 53.097 74.665 101.985 119.67 73.049 67.251 176.016 129.147 309.114 129.147 28.723 0 52.009 23.286 52.009 52.009 0 28.728-23.286 52.014-52.009 52.014-2.867 0-5.719-.02-8.556-.067-.788.041-1.587.061-2.386.067l-3.374.01c-2.263 0-4.495-.143-6.682-.425-157.367-6.205-277.266-81.372-358.573-156.227-42.523-39.148-75.194-78.807-98.071-109.926a767.135 767.135 0 0 1-27.166-39.46 781.855 781.855 0 0 1-8.074-12.841l-2.523-4.106-.783-1.265-.226-.364-.069-.113a52.008 52.008 0 0 1 0-56.249l.069-.11.226-.362.783-1.269 2.523-4.105a779.201 779.201 0 0 1 8.074-12.838 765.858 765.858 0 0 1 27.166-39.459c22.876-31.122 55.548-70.782 98.071-109.93 81.357-74.9 201.355-150.115 358.864-156.238a52.408 52.408 0 0 1 6.39-.389l3.374.011c.666.005 1.331.022 1.992.051 2.97-.05 5.949-.075 8.95-.075 28.723 0 52.009 23.286 52.009 52.012s-23.286 52.012-52.009 52.012c-133.097 0-236.065 61.894-309.114 129.146zM707.026 183.94c-27.279-8.994-56.689 5.83-65.679 33.11-8.996 27.281 5.827 56.688 33.106 65.682 1.674.551 3.343 1.114 5.002 1.686 27.156 9.356 56.76-5.076 66.115-32.235 9.359-27.159-5.074-56.76-32.236-66.116a461.663 461.663 0 0 0-6.308-2.127zm141.071 71.592c-23.516-16.492-55.951-10.795-72.443 12.724s-10.798 55.954 12.723 72.446a441.87 441.87 0 0 1 4.398 3.121c23.342 16.743 55.839 11.396 72.581-11.945s11.397-55.836-11.945-72.579a551.727 551.727 0 0 0-5.315-3.767zM963.62 359.075c-19.149-21.412-52.029-23.248-73.441-4.101s-23.25 52.028-4.101 73.441a630.072 630.072 0 0 1 3.702 4.178c18.964 21.575 51.83 23.692 73.405 4.727s23.69-51.828 4.726-73.403a710.156 710.156 0 0 0-4.291-4.842zm4.29 301.036c18.964-21.576 16.85-54.441-4.726-73.405s-54.441-16.845-73.405 4.726a522.633 522.633 0 0 1-3.702 4.183c-19.149 21.412-17.311 54.292 4.101 73.436 21.412 19.149 54.292 17.316 73.441-4.101a738.1 738.1 0 0 0 4.291-4.838zM853.412 764.728c23.342-16.742 28.687-49.239 11.945-72.581-16.742-23.337-49.239-28.687-72.581-11.945a393.852 393.852 0 0 1-4.398 3.123c-23.521 16.492-29.215 48.927-12.723 72.448 16.492 23.516 48.927 29.215 72.443 12.723a625.607 625.607 0 0 0 5.315-3.768zM713.334 837.96c27.162-9.354 41.595-38.958 32.236-66.115-9.354-27.156-38.958-41.59-66.115-32.236a315.541 315.541 0 0 1-5.002 1.684c-27.279 8.996-42.102 38.4-33.106 65.684 8.991 27.279 38.4 42.102 65.679 33.111a448.42 448.42 0 0 0 6.308-2.13zm297.938-271.985c30.259 0 54.789-24.53 54.789-54.792 0-30.26-24.53-54.791-54.789-54.791s-54.789 24.53-54.789 54.791c0 30.262 24.53 54.792 54.789 54.792zM552.489 435.101c-34.57 0-62.591 28.022-62.591 62.589 0 34.569 28.021 62.591 62.591 62.591 34.565 0 62.587-28.022 62.587-62.591 0-34.567-28.022-62.589-62.587-62.589zm-166.614 62.59c0-92.018 74.595-166.612 166.614-166.612 92.017 0 166.61 74.595 166.61 166.612s-74.593 166.614-166.61 166.614c-92.019 0-166.614-74.598-166.614-166.614z"
    />
  </svg>
);

const SVG3 = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1075 1024"
    width={20}
    height={20}
    className="icon"
    data-testid="base-icon-svg"
    style={{
      display: "inline-flex",
    }}

  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M261.481 188.059h585.162c17.321 0 31.365 14.043 31.365 31.365v198.554H230.116V219.424c0-17.322 14.043-31.365 31.365-31.365zm720.986 229.919V219.424c0-75.014-60.81-135.824-135.823-135.824H261.482c-75.014 0-135.824 60.811-135.824 135.824v198.554H94.293c-28.846 0-52.229 23.384-52.229 52.23s23.384 52.232 52.229 52.232h919.54c28.846 0 52.229-23.386 52.229-52.232s-23.383-52.23-52.229-52.23h-31.365zM177.887 585.17c28.846 0 52.23 23.383 52.23 52.229v167.188c0 17.321 14.043 31.365 31.365 31.365h585.162c17.321 0 31.365-14.044 31.365-31.365V637.399c0-28.846 23.383-52.229 52.229-52.229s52.229 23.383 52.229 52.229v167.188c0 75.013-60.81 135.823-135.823 135.823H261.482c-75.014 0-135.824-60.81-135.824-135.823V637.399c0-28.846 23.384-52.229 52.23-52.229z"
    />
  </svg>
);

const SVG4 = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1075 1024"
    className="icon"
    width={20}
    height={20}
    data-testid="base-icon-svg"
    style={{
      display: "inline-flex",
    }}

  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M554.051 405.234c-60.568 0-109.67 49.101-109.67 109.669 0 60.57 49.102 109.67 109.67 109.67 60.57 0 109.67-49.101 109.67-109.67s-49.101-109.669-109.67-109.669zM339.953 514.903c0-118.242 95.856-214.097 214.098-214.097 118.246 0 214.103 95.855 214.103 214.097 0 118.246-95.857 214.103-214.103 214.103-118.242 0-214.098-95.857-214.098-214.103zM554.056 0c28.836 0 52.214 23.377 52.214 52.214v91.144c164.439 22.903 294.764 152.397 318.915 316.435h88.663c28.841 0 52.214 23.377 52.214 52.212 0 28.841-23.373 52.214-52.214 52.214h-87.854C904.096 731.003 772.65 863.294 606.27 886.467v85.32c0 28.836-23.378 52.214-52.214 52.214s-52.214-23.378-52.214-52.214v-85.315c-166.39-23.163-297.851-155.459-319.749-322.253H94.277c-28.837 0-52.214-23.373-52.214-52.214 0-28.835 23.377-52.212 52.214-52.212h88.626c24.154-164.046 154.487-293.545 318.939-316.439v-91.14C501.842 23.377 525.22 0 554.056 0zm-.011 244.18c-149.524 0-270.736 121.211-270.736 270.733 0 149.524 121.211 270.735 270.736 270.735 149.519 0 270.73-121.211 270.73-270.735 0-149.522-121.211-270.733-270.73-270.733z"
    />
  </svg>
);

const SVG5 = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1075 1024"
    className="icon"
    width={20}
    height={20}
    data-testid="base-icon-svg"
    style={{
      display: "inline-flex",
    }}

  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M605.773 822.943c-20.265-20.265-20.265-53.12 0-73.385l185.672-185.672H93.956c-28.66 0-51.893-23.235-51.893-51.893 0-28.66 23.233-51.893 51.893-51.893h697.489L605.773 274.431c-20.265-20.265-20.265-53.123 0-73.388s53.125-20.265 73.39 0l274.253 274.256c20.27 20.265 20.27 53.121 0 73.385L679.163 822.942c-20.265 20.265-53.125 20.265-73.39 0zM1014.17 69.7c28.662 0 51.891 23.233 51.891 51.893v780.823c0 28.657-23.229 51.891-51.891 51.891s-51.891-23.235-51.891-51.891V121.593c0-28.66 23.229-51.893 51.891-51.893z"
      style={{}}
    />
  </svg>
);
const SVG6 = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1075 1024"
    className="icon"
    width={20}
    height={20}
    data-testid="base-icon-svg"
    style={{
      display: "inline-flex",
    }}

  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M94.166 398.578c28.775 0 52.103 23.328 52.103 52.104v122.64c0 28.774-23.328 52.101-52.103 52.101s-52.104-23.327-52.104-52.101v-122.64c0-28.776 23.328-52.104 52.104-52.104zm551.876-61.314c28.78 0 52.106 23.328 52.106 52.104v245.277c0 28.78-23.327 52.106-52.106 52.106-28.774 0-52.101-23.327-52.101-52.106V389.368c0-28.776 23.327-52.104 52.101-52.104zm367.918 0c-28.774 0-52.106 23.328-52.106 52.104v275.94c0 28.774 23.332 52.101 52.106 52.101s52.101-23.327 52.101-52.101v-275.94c0-28.776-23.327-52.104-52.101-52.104zM829.998 214.626c28.774 0 52.101 23.328 52.101 52.103v490.555c0 28.78-23.327 52.106-52.101 52.106-28.78 0-52.106-23.327-52.106-52.106V266.729c0-28.775 23.327-52.103 52.106-52.103zM462.081 91.987c28.776 0 52.105 23.327 52.105 52.103v735.833c0 28.78-23.329 52.106-52.105 52.106s-52.103-23.327-52.103-52.106V144.09c0-28.776 23.327-52.103 52.103-52.103zM278.129 214.626c28.776 0 52.103 23.328 52.103 52.103v490.555c0 28.78-23.327 52.106-52.103 52.106s-52.103-23.327-52.103-52.106V266.729c0-28.775 23.327-52.103 52.103-52.103z"
    />
  </svg>
);
const Accessibility = ({ handlePageClick }) => {

  const [isCustomColor, setIsCustomColor] = useState(false);
  const [activeTab, setActiveTab] = useState(-1)




  const saveProfileHandler = (active) => {
    const root = document.documentElement;

    if (!active) {
      root.style.setProperty('--#146FF8-color', '#146FF8');
      root.classList.remove('sezure');

    } else {
      root.style.setProperty('--#146FF8-color', '#3d6aaf');
      root.classList.add('sezure');
    }
    setIsCustomColor(!isCustomColor)
  }









  /////////////titlelink////////////////
  const titlelink = (active) => {
    if (active) {
      togglehighlighttitle()
      togglehighlightlink()
    }
  };



  //////////scale///////////
  const DefaultScale = 1
  const scale = (active) => {
    const body = document.body
    if (active) {

      body.style.transform = 'scale(1.1)';
    } else {
      body.style.transform = `scale(${DefaultScale})`;

    }
  }


  /////////////////////keyboard//////////////////////
  let keyBoardActive = false;

  const keyboard = (() => {
    let isListenerAdded = false;

    const toggleBorder = (elements, key, borderStyle) => {
      elements.forEach(element => {
        if (element.style.border === borderStyle) {
          // Remove border if it's already applied
          element.style.border = "none";
        } else {
          // Apply border
          element.style.border = borderStyle;
        }
      });
    };

    const resetStyles = () => {
      const buttons = document.querySelectorAll('button');
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      buttons.forEach(button => (button.style.border = "none"));
      headings.forEach(heading => (heading.style.border = "none"));
    };

    const addKeydownListener = () => {
      keyBoardActive = !keyBoardActive;

      if (!keyBoardActive) {
        resetStyles();
        return;
      }

      if (!isListenerAdded) {
        document.addEventListener("keydown", (event) => {
          const buttons = document.querySelectorAll('button');
          const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
          const accessibilityElement = document.getElementById('accessibilty');

          if (keyBoardActive) {
            if (event.key.toLowerCase() === "b") {
              toggleBorder(
                Array.from(buttons).filter(button => !accessibilityElement.contains(button)),
                "b",
                "1px solid red"
              );
            }

            if (event.key.toLowerCase() === "h") {
              toggleBorder(
                Array.from(headings).filter(heading => !accessibilityElement.contains(heading)),
                "h",
                "1px solid red"
              );
            }
          }
        });

        isListenerAdded = true;
      }
    };

    return addKeydownListener;
  })();

  // Example usage
  keyboard();


  let Readingmask = document.getElementById("reading_mask"); // Global variable to track the mask
  const readingmask = (active) => {
    if (active === true) {
      if (!Readingmask) { // Only create if it doesn't exist
        Readingmask = document.createElement("div");
        Readingmask.id = "reading_mask";
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
          if (Readingmask) {
            let maskWidth = window.innerWidth;
            let maskHeight = 150;
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
      if (Readingmask) {
        Readingmask.remove();
        Readingmask = null;
      }
    }

  };










  const handleOn = (index) => {

    setActiveTab(index)

    if (index === 0) {
      saveProfileHandler(true)
    }
    if (index === 4) {
      keyboard(true)
    }
    if (index === 1) {
      scale(true)
    }
    if (index === 3) {
      titlelink(true)
    }
    if (index === 2) {
      readingmask(true)

    }

  }
  const handleOff = () => {
    setActiveTab(-1);
    saveProfileHandler(false);
    keyboard(false);
    scale(false);
    titlelink(false);
    readingmask(false); // This will toggle it OFF if it's currently ON
    console.log('readingmask: ', readingmask);

  };


  const data = [{
    button: "Reset setting",
    Image: "/images/frame.svg"

  }, {
    button: "Statement",
    Image: "/images/svgviewer-output (4).svg"


  },
  {
    button: "Hide interface ",
    Image: "/images/svgviewer-output (5).svg"

  },]
  const data2 = [
    {
      of: "off",
      on: "on",
      para1: "Seizure Safe Profile",
      para2: "Clear flashes &amp; reduces color",
      svg: <SVG />,
      para: "This profile enables epileptic and seizure prone users to browse safely by eliminating the risk of seizures that result from flashing or blinking animations and risky color combinations."


    },
    {
      of: "off",
      on: "on",
      para1: "Vision Impaired Profile",
      para2: " Enhances website's visuals",
      svg: <SVG2 />,
      para: "This profile adjusts the website, so that it is accessible to the majority of visual impairments such as Degrading Eyesight, Tunnel Vision, Cataract, Glaucoma, and others."

    },
    {
      of: "off",
      on: "on",
      para1: "ADHD Friendly Profile",
      para2: "More focus & fewer distractions",
      svg: <SVG3 />,
      para: "This profile significantly reduces distractions, to help people with ADHD and Neurodevelopmental disorders browse, read, and focus on the essential elements of the website more easily."

    },
    {
      of: "off",
      on: "on",
      para1: "Cognitive Disability Profile",
      para2: "Assists with reading & focusing",
      svg: <SVG4 />,
      para: "This profile provides various assistive features to help users with cognitive disabilities such as Autism, Dyslexia, CVA, and others, to focus on the essential elements of the website more easily."

    },
    {
      of: "off",
      on: "on",
      para1: "Keyboard Navigation (Motor)",
      para2: "Use website with the keyboard",
      svg: <SVG5 />,
      para: "This profile enables motor-impaired persons to operate the website using the keyboard Tab, Shift+Tab, and the Enter keys. Users can also use shortcuts such as “M” (menus), “H” (headings), “F” (forms), “B” (buttons), and “G” (graphics) to jump to specific elements.",
      note: "Note:",
      Para3: " This profile prompts automatically for keyboard users."


    },
    {
      of: "off",
      on: "on",
      para1: "Blind Users (Screen Reader)",
      para2: "Optimize website for screen-readers",
      svg: <SVG6 />,
      para: "This profile adjusts the website to be compatible with screen-readers such as JAWS, NVDA, VoiceOver, and TalkBack. A screen-reader is software that is installed on the blind user’s computer and smartphone, and websites should ensure compatibility with it. ",
      note: "Note:",
      Para3: " This profile prompts automatically to screen-readers.",


    }
  ]





  let inputColor = false;

  const changeBackground = () => {
    inputColor = !inputColor;
    const elements = document.getElementsByClassName('input');
    const svgElements = document.getElementsByClassName('svg');

    if (inputColor) {
      Array.from(elements).forEach((ele) => {
        ele.style.backgroundColor = 'white';
        ele.style.color = 'black';
        ele.classList.remove('placeholder-white');
      });

      Array.from(svgElements).forEach((svg) => {
        svg.classList.remove('!fill-black'); // Optional: ensure toggling is consistent
        svg.classList.add('!fill-black');
      });
    } else {
      Array.from(elements).forEach((ele) => {
        ele.style.backgroundColor = '';
        ele.classList.add('placeholder-white');
      });
      Array.from(svgElements).forEach((svg) => {
        svg.classList.remove('!fill-black');
        svg.classList.add('fill-white'); // Optional: ensure toggling is consistent
      });
    }
  }
  let show = false
  const statment = () => {
    const toggleId = document.getElementById("toggle")
    show = !show
    if (show) {
      toggleId.style.display = 'block'
    } else {
      toggleId.style.display = 'none'
    }
  }
  let hide = true
  const hideinterface = () => {
    const elements = document.querySelectorAll("[id ='accessibilty']")
    hide = !hide
    elements.forEach((element) => {
      element.style.display = hide ? "block" : "none"
    })
  }
  const handle = (index) => {
    if (index === 1) {
      statment()
    }
    if (index === 2) {
      hideinterface()
    }
  }




  return (
    <div id="accessibilty" className={` w-full md:w-[50%] xl:w-[38%] select-none  bg-[#EEEFFF] rounded-xl overflow-y-scroll border-none md:right-10   top-0 z-10 fixed  !h-full `} >
      <div id="accessibilty" className="p-5 rounded-t-xl  bg-primary"  >
        <div id="accessibilty" className="flex justify-between items-center cursor-pointer">
          <div id="accessibilty" className="text-white hover:transition-all !duration-1000 ease-in-out" onClick={handlePageClick}  >
            <Image height={12} width={12} src={'/images/svgviewer-output (1).svg'} />
          </div>
          <div id="accessibilty" className="flex items-center gap-1 hover:bg-[#0041A4] px-3 py-1 rounded-full">
            <span id="accessibilty" className="text-white uppercase">English</span>
            <Image width={12} height={12} src="/images/svgviewer-output (18).svg" alt="" />
          </div>


        </div>
        <h2 id="accessibilty" className="text-[24px] text-[#ffffff] text-center pb-[30px]">Accessibility Adjustments</h2>
        <div id="accessibilty" className="flex justify-around  flex-wrap  w-full items-center gap-5">
          {data.map((item, index) => {
            return (
              <div key={index} id="accessibilty" className=" w-[70%] lg:w-[30%] ">
                <div onClick={() => { handle(index) }} id="accessibilty" className="flex bg-white text-primary hover:scale-[1.1]  text-[15px] gap-1 justify-center items-center py-2  rounded-full w-full">
                  <Image height={20} width={20} src={item.Image} alt="" />
                  {item.button}</div>
              </div>
            )
          })}
        </div>
        <div id="accessibilty" className="flex bg-[#0041A4] items-center py-2 px-4 my-10 gap-5 rounded-full  w-full input " onClick={() => { changeBackground() }}>
          <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 1075 1024" className="prepended-icon svg fill-white" data-testid="base-icon-svg" style={{ display: "inline-flex" }}><path xmlns="http://www.w3.org/2000/svg" d="M461.977 103.143c-174.948 0-316.771 141.823-316.771 316.771s141.823 316.772 316.771 316.772c174.946 0 316.77-141.824 316.77-316.772s-141.824-316.771-316.77-316.771zM42.062 419.914C42.062 188.002 230.064 0 461.976 0s419.913 188.002 419.913 419.914c0 97.37-33.137 187-88.755 258.225l257.823 257.823c20.142 20.142 20.142 52.792 0 72.934-20.137 20.137-52.792 20.137-72.934 0L720.2 751.073c-71.224 55.613-160.855 88.755-258.223 88.755-231.912 0-419.914-188.001-419.914-419.914z"></path></svg>
          <input id="accessibilty" className=" bg-[#0041A4]  outline-none text-white placeholder-white flex-1 input " type="text" placeholder="Unclear contact?Search in dictionary..."
          />
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 1024 1024" class="appended-icon svg fill-white" data-testid="base-icon-svg" style={{ display: "inline-flex;" }}><path xmlns="http://www.w3.org/2000/svg" d="M62.81 243.189c29.279-27.831 75.575-26.658 103.406 2.621l361.461 380.259L889.139 245.81c27.833-29.279 74.128-30.452 103.409-2.621 29.277 27.831 30.452 74.128 2.619 103.406L580.691 782.628c-13.804 14.526-32.973 22.747-53.014 22.747s-39.205-8.221-53.012-22.747L60.189 346.595c-27.831-29.279-26.658-75.575 2.621-103.406z"></path></svg>
        </div>
      </div>
      {/* on/off */}

      <div id="accessibilty" className="m-5 cursor-pointer  bg-[#fff] rounded-xl py-5" >
        <div id="accessibilty" className="px-5">Choose  the right accessibilty profile for you</div>
        {data2.map((item, index) => {

          const isTabActive = activeTab === index

          return (
            <>
              <div key={index} id="accessibilty" className={`  border-b-2 py-[18px] px-2 group ${isTabActive && ' bg-gray-300 mx-5 rounded-xl'}`}>
                <div id="accessibilty" className="flex justify-between">
                  <div id="accessibilty" className=" h-[35px] bg-[#e1e5e7] shadow-2xl rounded-[50px] flex-1 flex justify-center transition-all !duration-1000 items-center">

                    <span
                      id="accessibilty" className={`flex justify-center transition-all !duration-200 ease-in-out items-center w-[50%] ${!isTabActive ? 'bg-[#ffffff] z-10 rounded-full h-full border border-gray-100' : ''}`}
                      onClick={() => { handleOff(index) }}
                    >
                      {item.of}
                    </span>

                    <span id="accessibilty" className={`w-[50%] transition-all !duration-200 ease-in-out text-center ${isTabActive ? 'bg-primary w-[50%] text-white z-10  rounded-full  h-full  flex justify-center items-center ' : 'bg-grey-500  flex justify-center items-center'}`}
                      onClick={() => handleOn(index)}>{item.on}


                    </span>
                  </div>
                  <div id="accessibilty" className="w-[75%] pl-[7%] group ">
                    <div id="accessibilty" className="text-[#1F2533] text-[16px] group-hover:text-primary font-semibold">{item.para1}</div>
                    <div id="accessibilty" className="text-[#3e465d] text-[14px] group-hover:text-primary font-medium">{item.para2}r</div>
                  </div>
                  <div id="accessibilty" className="bg-[#f2f7fa]  rounded-full hidden md:flex justify-center items-center h-[30px]  w-[30px]">
                    <span id="accessibilty" className="group-hover:text-primary"> {item.svg}</span>

                  </div>
                </div>

                {isTabActive &&
                  <div>
                    <div id="accessibilty" className="text-[15px] p-4 ">{item.para}</div>
                    <strong id="accessibilty" className="pl-4 pt-4">{item.note}</strong>
                    <span>{item.Para3}</span>

                  </div>
                }
              </div>

            </>

          )
        })}
      </div>

      <Contactbox />
      <ColorAdjustment />
      <Orientation />
      <Footer />

      <Statment />
      {/* <Language /> */}

    </div >

  )
}

export default Accessibility