
import Content_box2 from './Content_box2';
import Content_box1 from './Content_box1';



const Orientation = () => {






    // const handleclick = (event) => {
    //     console.log('handleclick : ', handleclick);
    //     event.target.style.border = "2px solid orange"
    //     event.target.style.outline = "2px solid blue"

    // }
    // let clickhighlight = false
    // const toggleclickhighlight = () => {
    //     clickhighlight = !clickhighlight
    //     console.log('clickhighlight:', clickhighlight);
    //     const elements = document.querySelectorAll('form,a')
    //     const titles = document.getElementsByClassName('HighLight')

    //     if (clickhighlight) {
    //         elements.forEach((ele) => {
    //             ele.addEventListener("click", handleclick)
    //         })
    //     } else {
    //         elements.forEach((ele) => {
    //             ele.removeEventListener("click", handleclick)
    //         })
    //         elements.forEach((ele) => {
    //             ele.style.border = ""; // Remove border
    //             ele.style.outline = ""; // Remove outline
    //         });
    //     }
    //     Array.from(titles).forEach(title => {
    //         if (clickhighlight) {
    //             title.style.backgroundColor = "#146FF8";
    //             title.style.color = 'white';
    //         } else {
    //             title.style.backgroundColor = '';
    //             title.style.color = '';

    //         }
    //     });
    // }




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
                            onClick={togglereadingguide}
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
                            onClick={togglefocoushighlight}
                            customStyle={'HighLight'}

                        />


                    </div>
                    <div id="accessibilty" className='w-full lg:flex-1'>
                        <div id="accessibilty" className='flex gap-5 '>
                            <Content_box2
                                imag={"/images/svgviewer-output (36).svg"}
                                heading={"Hide Images"}
                                onClick={togglehideimage}
                                customStyle={"image"}
                            />
                            <Content_box2
                                imag={"/images/svgviewer-output (37).svg"}
                                heading={"Read Mode"}
                                onClick={togglereadmode}
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
                                onClick={togglereadingmask}
                                customStyle={'readingmask'}


                            />
                            <Content_box2
                                imag={"/images/svgviewer-output (42).svg"}
                                heading={"HighLight Hover"}
                                onClick={togglehoverhighlight}
                                customStyle={'highLight'}
                            />

                        </div>
                        <div id="accessibilty" className='flex gap-5 '>
                            <Content_box2
                                imag={"/images/svgviewer-output (44).svg"}
                                heading={"Big Black Cursor"}
                                onClick={toggleblackcursor}
                                customStyle={"black"}



                            />
                            <Content_box2
                                imag={"/images/svgviewer-output (45).svg"}
                                heading={"Big White Cursor"}
                                onClick={togglewhitecursor}
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