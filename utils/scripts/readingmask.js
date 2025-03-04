export const READ_MASK = () => {
    return `
        const togglereadingmask= () => {
            let isScriptInjected = document.getElementById("Reading_Mask");
            let Guide = localStorage.getItem("readingmasklocal") === "true";
            let Readingmask = document.getElementById("Reading_Guide_Element");

            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("readingmasklocal", "false");

                // Remove Reading Mask Element if it exists
                let existingMask = document.querySelector(".reading-mask-overlay");
                if (existingMask) {
                    existingMask.remove();
                }

                // Remove script
                isScriptInjected.remove();

                // Remove event listener
                document.removeEventListener("mousemove", window.moveReadingGuide);
                window.moveReadingGuide = null;

                // Reset title styles
                const titles = document.getElementsByClassName('readingmask');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "";
                    title.style.color = "";
                });

                return;
            }

            console.log("Injecting script...");
            const reading_mask = document.createElement('script');
            reading_mask.id = "Reading_Mask";
            reading_mask.innerHTML = \`
            (function () {
                let mask = localStorage.getItem("readingmasklocal") === "true";
                let Readingmask = null;

                const readingmask = () => {
                    localStorage.setItem("readingmasklocal", "true");
                    mask = !mask;

                    const titles = document.getElementsByClassName('readingmask');
                    Array.from(titles).forEach(title => {
                        if (mask) {
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = '#ffffff';
                        } else {
                            title.style.backgroundColor = '';
                            title.style.color = '';
                        }
                    });

                    if (mask) {
                        if (!Readingmask) {
                            Readingmask = document.createElement("div");
                            Readingmask.classList.add("reading-mask-overlay");
                            Object.assign(Readingmask.style, {
                                position: "fixed",
                                backgroundColor: "transparent",
                                boxShadow: "0px 0px 10000px 5000px rgba(0, 0, 0, 0.6)",
                                height: "150px",
                                width: "100%",
                                zIndex: "9999",
                                pointerEvents: "none"
                            });
                            document.body.appendChild(Readingmask);

                            document.addEventListener("mousemove", (event) => {
                                if (Readingmask) {
                                    let maskWidth = window.innerWidth;
                                    let maskHeight = 150;
                                    let newX = event.clientX - maskWidth / 2;
                                    let newY = event.clientY - maskHeight / 2;
                                    newX = Math.max(0, Math.min(newX, window.innerWidth - maskWidth));
                                    newY = Math.max(0, Math.min(newY, window.innerHeight - maskHeight));
                                    Readingmask.style.left = newX +"px";
                                    Readingmask.style.top = newY+"px";
                                }
                            });
                        }
                    } else {
                        if (Readingmask) {
                            Readingmask.remove();
                            Readingmask = null;
                        }
                    }
                };

                readingmask();
            })();
            \`;

            document.body.appendChild(reading_mask);
        };

        window.addEventListener("load", () => {
            if (localStorage.getItem("readingmasklocal") === "true") {
                console.log("Restoring reading mask after reload...");

                const titles = document.getElementsByClassName('readingmask');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "#146FF8";
                    title.style.color = "#ffffff";
                });

                let existingMask = document.querySelector(".reading-mask-overlay");
                if (!existingMask) {
                    let newMask = document.createElement("div");
                    newMask.classList.add("reading-mask-overlay");
                    Object.assign(newMask.style, {
                        position: "fixed",
                        backgroundColor: "transparent",
                        boxShadow: "0px 0px 10000px 5000px rgba(0, 0, 0, 0.6)",
                        height: "150px",
                        width: "100%",
                        zIndex: "9999",
                        pointerEvents: "none"
                    });
                    document.body.appendChild(newMask);

                    window.moveReadingGuide = (event) => {
                        let maskWidth = window.innerWidth;
                        let maskHeight = 150;
                        let newX = event.clientX - maskWidth / 2;
                        let newY = event.clientY - maskHeight / 2;
                        newX = Math.max(0, Math.min(newX, window.innerWidth - maskWidth));
                        newY = Math.max(0, Math.min(newY, window.innerHeight - maskHeight));
                        newMask.style.left = newX + "px";
                        newMask.style.top = newY + "px";
                    };

                    document.addEventListener("mousemove", window.moveReadingGuide);
                }
            }
        });

    `;
};
