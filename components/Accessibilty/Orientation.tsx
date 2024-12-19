import React from 'react';
import Content_box2 from './Content_box2';
import Content_box1 from './Content_box1';

const Orientation = () => {
    const data2 = [
        {
            img: "/images/svgviewer-output (35).svg",
            title: "Mute Sounds",
        },
        {
            img: "/images/svgviewer-output (38).svg",
            title: "Reading Guide",
        },
        {
            img: "/images/svgviewer-output (40).svg",
            title: "Stop Animations",
        },
        {
            img: "/images/svgviewer-output (43).svg",
            title: "Highlight Focus",
        },
    ]

    const data3 = [
        {
            img: "/images/svgviewer-output (36).svg",
            title: "Monochrome",
        },
        {
            img: "/images/svgviewer-output (37).svg",
            title: "Low Saturation",
        },
        {
            img: "/images/svgviewer-output (39).svg",
            title: "Low Saturation",
        },
        {
            img: "/images/svgviewer-output (41).svg",
            title: "Low Saturation",
        },
        {
            img: "/images/svgviewer-output (42).svg",
            title: "Low Saturation",
        },
        {
            img: "/images/svgviewer-output (44).svg",
            title: "Low Saturation",
        },
        {
            img: "/images/svgviewer-output (45).svg",
            title: "Low Saturation",
        },

    ]
    return (

        //     <div className='m-5 bg-[#fff] p-5 rounded-xl'>
        //     <h2>color Adjustments</h2>
        //     <div className='flex gap-5'>

        //         <div className='w-[30%]  '>
        //             {data2.map((item,index)=>{
        //                 return(
        //                     <Content_box2 item ={item} key={index} />


        //                 )
        //             })}
        //             </div>
        //                     <div className='flex-1 flex flex-wrap gap-x-5'>
        //             {data3.map((item,index)=>{
        //                 return(
        //                      <Content_box1 item ={item} key={index} index ={index}/>
        //                 )
        //             })}
        //             </div>
        //     </div>
        // </div>

        <div className='m-5 bg-[#fff] p-5 rounded-xl '>
            <h2 className='text-[18px] pb-5'>Content Adjustments</h2>

            <div className='flex flex-wrap lg:flex-nowrap gap-5'>
                <div className='flex flex-wrap gap-5 lg:gap-0 lg w-full lg:w-[30%]'>
                    <Content_box2
                        imag={"/images/svgviewer-output (35).svg"}
                        heading={"Mute Sounds"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (38).svg"}
                        heading={"Reading Guide"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (40).svg"}
                        heading={"Stop Animations"}
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
                            heading={"Hide Images"}
                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (42).svg"}
                            heading={"Read Mode"}
                        />

                    </div>
                    <div className='flex gap-5 '>
                        <Content_box2
                            imag={"/images/svgviewer-output (44).svg"}
                            heading={"Hide Images"}
                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (45).svg"}
                            heading={"Read Mode"}
                        />

                    </div>



                </div>

            </div>
        </div>
    )
}

export default Orientation