export const SCRIPT_HIGH = () => {
    return `
        const togglehighcontrast = () => {
            let isScriptInjected = document.getElementById("HighContrast");
            let dark = localStorage.getItem("highcontrastlocal") === "true";

            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("Highcontrastlocal", "false");
             
                isScriptInjected.remove();
                return;
            }

            console.log("Injecting script...");
            const darkcontrast = document.createElement('script')
            darkcontrast.id ="HighContrast";
            darcontrast.innerHTML =\`
            (function)
             let high = localStorage.setItem("highcontrastlocal", "true");
    const HighContrast = () => {
        const body = document.body
        const titles = document.getElementsByClassName('high');
        high = !high

        if (high) {
            body.style.background = '#ffffff'
        } else {
            body.style.background = '';

        }
        Array.from(titles).forEach(title => {
            if (high) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        })


    }


    //   window.addEventListener("load", () => {         
    //         if (localStorage.getItem("darkcontrastlocal") === "true") {
    //       document.body.style.background = "#181818";
    //         document.querySelectorAll('p, a, button, h1, h2, h3, h4, h5, h6').forEach(el => {
    //             el.style.color = '#fff';
    //         });
    //         document.querySelectorAll('.dark').forEach(title => {
    //             title.style.backgroundColor = "#146FF8";
    //             title.style.color = "#ffffff";
    //         });
    //         }
    //     });

    `;




};
