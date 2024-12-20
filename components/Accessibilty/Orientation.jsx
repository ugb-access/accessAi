import React from 'react';
import Content_box2 from './Content_box2';
import Content_box1 from './Content_box1';

const Orientation = () => {

    return (

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