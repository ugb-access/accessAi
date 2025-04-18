// import React from 'react'
import Content_box2 from './Content_box2';
import Content_box1 from './Content_box1';


const ColorAdjustment = () => {
    const colors = ["#0076B4", "#7a549c", "#c83733", "#D07021", "#26999f", "#4d7831", "#fff", "#000000"]

    return (

        <div id="accessibilty" className='m-5 bg-[#fff] p-5 rounded-xl '>
            <div id="accessibilty" className='text-[18px] pb-5'>Color Adjustments</div>

            <div id="accessibilty" className='flex flex-wrap lg:flex-nowrap gap-5'>
                <div id="accessibilty" className=' flex flex-wrap gap-5 md:gap-0 lg w-full lg:w-[30%] '>
                    <Content_box2
                        imag={"/images/svgviewer-output (29).svg"}
                        heading={"Dark Contrast"}
                        onClick={toggledarkcontrast}
                        customStyle={"dark"}
                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (32).svg"}
                        heading={"High Saturation"}
                        onClick={togglehighsaturation}
                        customStyle={"Saturation"}

                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (33).svg"}
                        heading={"Monochrome"}
                        onClick={togglemonocorome}
                        customStyle={"monochrom"}

                    />
                    <Content_box2
                        imag={"/images/svgviewer-output (34).svg"}
                        heading={"Low Saturation"}
                        onClick={togglelowsaturation}
                        customStyle={"lowSaturation "}
                    />


                </div>
                <div id="accessibilty" className='w-full lg:flex-1'>
                    <div id="accessibilty" className='flex gap-4 '>
                        <Content_box2
                            imag={"/images/svgviewer-output (30).svg"}
                            heading={"Light Contrast"}
                            onClick={togglelightcontrast}
                            customStyle={'lightcolor'}

                        />
                        <Content_box2
                            imag={"/images/svgviewer-output (31).svg"}
                            heading={"High Contrast"}
                            onClick={togglehighcontrast}
                            customStyle={'highcolor'}
                        />

                    </div>
                    <Content_box1
                        heading={"Adjust Text Colors"}
                        button={"cancel"}
                        showBar={false}
                        colorButton={true}
                        img={false}
                        colors={colors}
                        onChangeColor={changetextcolor}
                    />
                    <Content_box1
                        heading={"Adjust Title Colors"}
                        showBar={false}
                        img={false}
                        colorButton={true}
                        button={"cancel"}
                        colors={colors}
                        onChangeColor={changetitlecolor}
                        color={colors}
                    />
                    <Content_box1
                        heading={"Adjust Background Colors"}
                        showBar={false}
                        img={false}
                        colorButton={true}
                        button={"cancel"}
                        onChangeColor={changeBackgroundColor}
                        colors={colors}


                    />


                </div>

            </div>
        </div>
    )
}

export default ColorAdjustment;