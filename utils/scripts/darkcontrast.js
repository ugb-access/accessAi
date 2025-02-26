export const SCRIPT_DARK = () => {
    return `
        const toggledarkcontrast = () => {
            let isScriptInjected = document.getElementById("DarkContrast");
            let dark = localStorage.getItem("darkcontrastlocal") === "true";

            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("darkcontrastlocal", "false");
                document.body.style.background = "#ffffff";
                document.querySelectorAll('p, a, button, h1, h2, h3, h4, h5, h6').forEach(el => {
                    el.style.color = '';
                });
                document.querySelectorAll('.dark').forEach(title => {
                    title.style.backgroundColor = '';
                    title.style.color = '';
                });
                isScriptInjected.remove();
                return;
            }

            console.log("Injecting script...");
            localStorage.setItem("darkcontrastlocal", "true");
            document.body.style.background = "#181818";
            document.querySelectorAll(' a, button, h1, h2, h3, h4, h5, h6').forEach(el => {
                el.style.color = '#fff';
            });
            document.querySelectorAll('.dark').forEach(title => {
                title.style.backgroundColor = "#146FF8";
                title.style.color = "#ffffff";
            });

            // const elements = document.querySelectorAll('#accessibilty')
            //         elements.forEach(element => {
            //     element.style.backgroundColor = "";
            //     element.style.color = "";
            // });

            const darkcontrast = document.createElement("script");
            darkcontrast.id = "DarkContrast";
            darkcontrast.innerHTML = \`
                (() => {
                    console.log("Dark mode script running...");
                })();
            \`;
            document.body.appendChild(darkcontrast);
        }


      window.addEventListener("load", () => {         
            if (localStorage.getItem("darkcontrastlocal") === "true") {
          document.body.style.background = "#181818";
            document.querySelectorAll('p, a, button, h1, h2, h3, h4, h5, h6').forEach(el => {
                el.style.color = '#fff';
            });
            document.querySelectorAll('.dark').forEach(title => {
                title.style.backgroundColor = "#146FF8";
                title.style.color = "#ffffff";
            });
            }
        });

    `;




};
