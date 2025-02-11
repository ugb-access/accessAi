import React from 'react'

const Language = () => {

    const data = [{
        button: "English",
        svg: ""

    }, {
        button: "Español"
    }, {
        button: "Deutsch"
    }, {
        button: "Português"
    }, {
        button: "Français"
    }, {
        button: "Italiano"
    }, {
        button: "עברית"
    }, {
        button: "繁體中文"
    }, {
        button: "Pусский"
    }, {
        button: "العربية"
    }, {
        button: "العربية"
    }, {
        button: "Nederlands"
    }, {
        button: "简体中文"
    }, {
        button: "日本語"
    }, {
        button: "Polski"
    }, {
        button: "Türkçe"
    }, {
        button: "Čeština"
    }, {
        button: "Magyar"
    }, {
        button: "Slovenščina"
    }, {
        button: "Slovenčina"
    }, {
        button: "Norsk Bokmål"
    }, {
        button: "Svenska"
    }

    ]

    return (
        // <div className=''>
        <div className=' bg-white m-5 p-12 flex flex-wrap   justify-between'>
            <span className='font-bold text-xl text-center w-full mb-5'>Choose the Interface Language</span>
            {data.map((item, i) => {
                return (
                    <button key={i} className=" bg-[#F2F7FA] flex justify-center w-[47%] px-[13px] py-4 mt-3 rounded-full hover:scale-[1.1] text-base">
                        <span>
                            <img src={item.svg} alt="" height={20} width={20} />
                        </span>
                        <span>{item.button}</span>

                    </button>



                )
            })}
        </div>


        // </div>

    )
}

export default Language