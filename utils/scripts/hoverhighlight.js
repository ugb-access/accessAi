export const HOVER_HIGHLIGHT = () => {
    return `
        const togglehoverhighlight = () => {
            let isScriptInjected = document.getElementById("HighLight");
            let hoverHighlight = localStorage.getItem("hoverhighlightlocal") === "true";
            const body = document.body;

            if (isScriptInjected) { 

                console.log("Removing script...");
                localStorage.setItem("hoverhighlightlocal", "false");
                isScriptInjected.remove();
                  const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, img, span");

                              const handleMouseOver = (event) => {
                              event.target.style.border = "";

                    };

                    const handleMouseLeave = (event) => {
                       event.target.style.border = "";

                    };

                      elements.forEach((ele) => {
                                ele.addEventListener("mouseover", handleMouseOver);
                                ele.addEventListener("mouseleave", handleMouseLeave);
                            });

                const titles = document.getElementsByClassName('highLight');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "";
                    title.style.color = '';
                });
                return;
            }

            console.log("Injecting script...");
            const hoverhighlight = document.createElement('script');
            hoverhighlight.id = "HighLight";
            hoverhighlight.innerHTML = \`
                (function () {
                    let hoverHighlight = localStorage.getItem("hoverhighlightlocal") === "true";
                    localStorage.setItem("hoverhighlightlocal", "true");

                    // ✅ Define event handlers
                    const handleMouseOver = (event) => {
                              event.target.style.border = "2px solid orange";

                    };

                    const handleMouseLeave = (event) => {
                       event.target.style.border = "";

                    };

                    const HoverHighlight = () => {
                        hoverHighlight = !hoverHighlight;

                        const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, img, span");
                        const titles = document.getElementsByClassName('highLight');

                        if (hoverHighlight) {
                            elements.forEach((ele) => {
                                ele.addEventListener("mouseover", handleMouseOver);
                                ele.addEventListener("mouseleave", handleMouseLeave);
                            });
                        } else {
                            elements.forEach((ele) => {
                                ele.removeEventListener("mouseover", handleMouseOver);
                                ele.removeEventListener("mouseleave", handleMouseLeave);
                            });
                        }

                        Array.from(titles).forEach(title => {
                            if (hoverHighlight) {
                                title.style.backgroundColor = "#146FF8";
                                title.style.color = 'white';
                            } else {
                                title.style.backgroundColor = '';
                                title.style.color = '';
                            }
                        });
                    };

                    HoverHighlight();
                })();
            \`;

            document.body.appendChild(hoverhighlight);
        };

        window.addEventListener("load", () => {         
            if (localStorage.getItem("hoverhighlightlocal") === "true") {
                                    const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, img, span");
                                         const handleMouseOver = (event) => {
                              event.target.style.border = "2px solid orange";

                    };

                    const handleMouseLeave = (event) => {
                       event.target.style.border = "";

                    };

                      elements.forEach((ele) => {
                                ele.addEventListener("mouseover", handleMouseOver);
                                ele.addEventListener("mouseleave", handleMouseLeave);
                            });

                const titles = document.getElementsByClassName('highLight');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "#146FF8";
                    title.style.color = '#ffffff';
                });
            }
        });
    `;
};
