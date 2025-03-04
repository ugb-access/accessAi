export const READ_GUIDE = () => {
    return `
        const togglereadingguide = () => {
            let isScriptInjected = document.getElementById("Reading_Guide");
            let Guide = localStorage.getItem("readingguidelocal") === "true";
            let Readingguide = document.getElementById("Reading_Guide_Element");

            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("readingguidelocal", "false");

                // Remove script
                isScriptInjected.remove();

                // Remove Reading Guide Element
                if (Readingguide) {
                    Readingguide.remove();
                }

                // Remove event listener
                document.removeEventListener("mousemove", window.moveReadingGuide);
                window.moveReadingGuide = null;

                // Reset title styles
                const titles = document.getElementsByClassName('readingguide');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "";
                    title.style.color = "";
                });

                return;
            }

            console.log("Injecting script...");
            const reading_guide = document.createElement('script');
            reading_guide.id = "Reading_Guide";
            reading_guide.innerHTML = \`
            (function () {
                let Guide = localStorage.getItem("readingguidelocal") === "true";
                let Readingguide = document.getElementById("Reading_Guide_Element");

            

                const readingGuide = () => {
                    localStorage.setItem("readingguidelocal","true");
                    Guide = !Guide;

                    const titles = document.getElementsByClassName('readingguide');
                    Array.from(titles).forEach(title => {
                        title.style.backgroundColor = Guide ? "#146FF8" : "";
                        title.style.color = Guide ? "#ffffff" : "";
                    });

                    if (Guide) {
                        if (!Readingguide) {
                            Readingguide = document.createElement('div');
                            Readingguide.id = "Reading_Guide_Element";

                            Object.assign(Readingguide.style, {
                                position: 'fixed',
                                top: '0',
                                left: '0',
                                width: '400px',
                                height: '13px',
                                backgroundColor: '#146FF8',
                                zIndex: '9999',
                                border: '4px solid #000',
                                overflow: 'hidden',
                                borderRadius: '50px',
                                pointerEvents: 'none'
                            });

                            document.body.appendChild(Readingguide);

                        if (event) {   
                            Readingguide.style.left = (event.clientX - Readingguide.offsetWidth / 2) + "px";
                            Readingguide.style.top = (event.clientY - Readingguide.offsetHeight / 2) + "px";
                        }

                        function moveReadingGuide(event) {
                            if (Readingguide) {
                                Readingguide.style.left = (event.clientX - Readingguide.offsetWidth / 2) + "px";
                                Readingguide.style.top = (event.clientY - Readingguide.offsetHeight / 2) + "px";
                            }
                        }

                            document.addEventListener('mousemove', moveReadingGuide);
                            window.moveReadingGuide = moveReadingGuide; 
                        }
                    } else {
                        if (Readingguide) {
                            Readingguide.remove();
                            Readingguide = null;
                        }

                        // Remove event listener if it exists
                        if (window.moveReadingGuide) {
                            document.removeEventListener("mousemove", window.moveReadingGuide);
                            window.moveReadingGuide = null;
                        }
                    }
                };

                readingGuide();
            })();
            \`;

            document.body.appendChild(reading_guide);
        };

      window.addEventListener("load", () => {
            if (localStorage.getItem("readingguidelocal") === "true") {
                console.log("Reload detected, enabling reading guide...");
                let Readingguide = document.getElementById("Reading_Guide_Element");

                if (!Readingguide) {
                    Readingguide = document.createElement("div");
                    Readingguide.id = "Reading_Guide_Element";

                    Object.assign(Readingguide.style, {
                        position: 'fixed',
                        width: '400px',
                        height: '13px',
                        backgroundColor: '#146FF8',
                        zIndex: '9999',
                        border: '4px solid #000',
                        overflow: 'hidden',
                        borderRadius: '50px',
                        pointerEvents: 'none'
                    });

                    document.body.appendChild(Readingguide);
                }

                function moveReadingGuide(event) {
                    if (Readingguide) {
                        Readingguide.style.left = (event.clientX - Readingguide.offsetWidth / 2) + "px";
                        Readingguide.style.top = (event.clientY - Readingguide.offsetHeight / 2) + "px";
                    }
                }

                document.addEventListener("mousemove", moveReadingGuide);
                window.moveReadingGuide = moveReadingGuide;

                const titles = document.getElementsByClassName('readingguide');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "#146FF8";
                    title.style.color = "#ffffff";
                });
            }
        });

    `;
};
