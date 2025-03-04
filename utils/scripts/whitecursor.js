export const WHITE_CURSOR = () => {
    return `
        const togglewhitecursor = () => {
            let isScriptInjected = document.getElementById("WhiteCursor");
            let whitecondition = localStorage.getItem("whitecursorlocal") === "true";
            const body = document.body;
                    const allElements = document.querySelectorAll('*');

            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("whitecursorlocal", "false");
                isScriptInjected.remove();
                     allElements.forEach(ele => {
                            const computedStyle = window.getComputedStyle(ele);
                            if (computedStyle.cursor.includes("url")) {
                                ele.style.cursor = "";
                            }
                        });
                                        document.body.style.cursor = "default";


                const titles = document.getElementsByClassName('white');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "";
                    title.style.color = "";
                });
                return;
            }

            console.log("Injecting script...");
            const whitecursor = document.createElement('script');
            whitecursor.id = "WhiteCursor";
            whitecursor.innerHTML = \`
            (function () {
                let whitecondition = localStorage.getItem("whitecursorlocal") === "true";
                localStorage.setItem("whitecursorlocal", "true"); 
                
                function whiteFunction() {
                    whitecondition = !whitecondition;
                    const cursorPath = "/images/white-pointer.svg";
                    const autoPath = "/images/white.svg";
                    const allElements = document.querySelectorAll('*');
                    const titles = document.getElementsByClassName('white');

                    if (whitecondition) {
                        allElements.forEach(ele => {
                            const computedStyle = window.getComputedStyle(ele);
                            if (computedStyle.cursor === "pointer") {
                                ele.style.cursor = "url('" + cursorPath + "') 10 10, pointer";
                            } else {
                                ele.style.cursor = "url('" + autoPath + "') 10 10, auto";
                            }
                        });
                    } else {
                        allElements.forEach(ele => {
                            const computedStyle = window.getComputedStyle(ele);
                            if (computedStyle.cursor.includes("url")) {
                                ele.style.cursor = "";
                            }
                        });
                        document.body.style.cursor = "default";
                    }

                    Array.from(titles).forEach(title => {
                        if (whitecondition) {
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = "white";
                        } else {
                            title.style.backgroundColor = "";
                            title.style.color = "";
                        }
                    });
                }
                    whiteFunction()
            })();
            \`;

            document.body.appendChild(whitecursor); // ✅ Corrected appendChild reference
        };

        window.addEventListener("load", () => {         
            if (localStorage.getItem("whitecursorlocal") === "true") {

                    const allElements = document.querySelectorAll('*');
                    const cursorPath = "/images/white-pointer.svg";
                    const autoPath = "/images/white.svg";

             allElements.forEach(ele => {
                            const computedStyle = window.getComputedStyle(ele);
                            if (computedStyle.cursor === "pointer") {
                                ele.style.cursor = "url('" + cursorPath + "') 10 10, pointer";
                            } else {
                                ele.style.cursor = "url('" + autoPath + "') 10 10, auto";
                            }
                        });
                const titles = document.getElementsByClassName('white');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "#146FF8";
                    title.style.color = "#ffffff";
                });
            }
        });
    `;
};
