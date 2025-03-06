export const BLACK_CURSOR = () => {
    return `
        const toggleblackcursor = () => {
            let isScriptInjected = document.getElementById("BlackCursor");
            let condition = localStorage.getItem("blackcursorlocal") === "true";
            const body = document.body;
                    const allElements = document.querySelectorAll('*');

            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("blackcursorlocal", "false");
                isScriptInjected.remove();
                     allElements.forEach(ele => {
                            const computedStyle = window.getComputedStyle(ele);
                            if (computedStyle.cursor.includes("url")) {
                                ele.style.cursor = "";
                            }
                        });
                                        document.body.style.cursor = "default";


                const titles = document.getElementsByClassName('black');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "";
                    title.style.color = "";
                });
                return;
            }

            console.log("Injecting script...");
            const blackcursor = document.createElement('script');
            blackcursor.id = "BlackCursor";
            blackcursor.innerHTML = \`
            (function () {
                let condition = localStorage.getItem("blackcursorlocal") === "true";
                localStorage.setItem("blackcursorlocal", "true"); 
                
                

    function triggerFunction() {
        condition = !condition;
        const cursorPath = '/images/black-pointer.svg';
        const autoPath = '/images/black-cursor.svg';
        const allElements = document.querySelectorAll('*');
        const titles = document.getElementsByClassName('black')

        if (condition) {
            allElements.forEach(ele => {
                const computedStyle = window.getComputedStyle(ele);
                if (computedStyle.cursor === "pointer") { // Check computed style, not inline style
                      ele.style.cursor = "url('" + cursorPath + "') 10 10, pointer";
                            } else {
                                ele.style.cursor = "url('" + autoPath + "') 10 10, auto";
                            }
            });
        } else {
            allElements.forEach(ele => {
                const computedStyle = window.getComputedStyle(ele);
                if (computedStyle.cursor.includes("url")) { // Reset only modified elements
                    ele.style.cursor = ""; // Restore to original pointer
                }
            });
            document.body.style.cursor = "default"; // Set the default cursor
        }
        Array.from(titles).forEach(title => {
            if (condition) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = 'white';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        });
    }
        triggerFunction()
            })();
            \`;

            document.body.appendChild(blackcursor); // ✅ Corrected appendChild reference
        };

        window.addEventListener("load", () => {         
            if (localStorage.getItem("blackcursorlocal") === "true") {
        const cursorPath = '/images/black-pointer.svg';
        const autoPath = '/images/black-cursor.svg';
                    const allElements = document.querySelectorAll('*');
              

             allElements.forEach(ele => {
                            const computedStyle = window.getComputedStyle(ele);
                            if (computedStyle.cursor === "pointer") {
                                ele.style.cursor = "url('" + cursorPath + "') 10 10, pointer";
                            } else {
                                ele.style.cursor = "url('" + autoPath + "') 10 10, auto";
                            }
                        });
                const titles = document.getElementsByClassName('black');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "#146FF8";
                    title.style.color = "#ffffff";
                });
            }
        });
    `;
};
