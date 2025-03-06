export const FOCOUS_HIGHLIGHT = () => {
    return `
        const togglefocoushighlight = () => {
            let isScriptInjected = document.getElementById("Focous");
            let clickhighlight = localStorage.getItem("focouslocal") === "true";

            if (isScriptInjected) {
                console.log("Removing script...");
                isScriptInjected.remove();
                localStorage.setItem("focouslocal", "false");

                
                const handleclick = (event) => {
                    event.target.style.border = "2px solid orange";
                    event.target.style.outline = "2px solid blue";
                };

                const titles = document.getElementsByClassName('HighLight');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "";
                    title.style.color = "";
                });

                const elements = document.querySelectorAll('form, a');
                elements.forEach((ele) => {
                    ele.style.border = "";
                    ele.style.outline = "";
                    ele.removeEventListener("click", handleclick);
                });

                return;
            }

            console.log("Injecting script...");
            const focous = document.createElement('script');
            focous.id = "Focous";
            focous.innerHTML = \`
            (function () {
                let clickhighlight = localStorage.getItem("focouslocal") === "true";
                                    localStorage.setItem("focouslocal", "true");

                
                const handleclick = (event) => {
                    event.target.style.border = "2px solid orange";
                    event.target.style.outline = "2px solid blue";
                    };

                const attachListeners = () => {
                    const elements = document.querySelectorAll('form, a');
                    elements.forEach((ele) => {
                    ele.addEventListener("click", handleclick);
                        });
                    };

                attachListeners();

                const toggleclickhighlight = () => {
                    clickhighlight = !clickhighlight;
                    const elements = document.querySelectorAll('form, a');
                    const titles = document.getElementsByClassName('HighLight');

                    if (clickhighlight) {
                        attachListeners();
                    } else {
                        elements.forEach((ele) => {
                            ele.removeEventListener("click", handleclick);
                            ele.style.border = "";
                            ele.style.outline = "";
                        });
                    }

                    Array.from(titles).forEach(title => {
                        title.style.backgroundColor = clickhighlight ? "#146FF8" : "";
                        title.style.color = clickhighlight ? "white" : "";
                    });
                };

                
                const observeRouteChanges = () => {
                    let lastPath = window.location.pathname;
                    setInterval(() => {
                        if (window.location.pathname !== lastPath) {
                            lastPath = window.location.pathname;
                            attachListeners();
                            
                        
                        }
                    }, 500);
                    };
                    toggleclickhighlight();
                    observeRouteChanges();
                    
                    })();
                    \`;
                    
            document.body.appendChild(focous);
        };

        // Ensure script is injected on page load if needed
        window.addEventListener("load", () => {
            if (localStorage.getItem("focouslocal") === "true") {
             const titles = document.getElementsByClassName('HighLight');
             
                const handleclick = (event) => {
                    event.target.style.border = "2px solid orange";
                    event.target.style.outline = "2px solid blue";
                    };
                           Array.from(titles).forEach(title => {
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = '#ffffff';
                        
                    });
            }
        });
    `;
};
