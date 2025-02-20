export const SCRIPT_CENTER = () => {
    return `
            const toggleTextcenter = () => {
                const body = document.body;
                let isScriptInjected = document.getElementById("textcenter");
                let center = localStorage.getItem("textCenter") === "true";
                if (isScriptInjected) {
                    console.log('Removing script...');
                    isScriptInjected.remove();
                    body.style.textAlign = "";
                    body.classList.remove("text-center");
                    document.querySelectorAll('.textcenter').forEach(title => {
                    title.style.backgroundColor = '';
                    title.style.color = '';
                    });
                    localStorage.setItem("textCenter", "false");
                    return;
                }

                console.log('Creating script...');

                const textcenter = document.createElement("script");
                textcenter.id = "textcenter";
                // Use textContent instead of innerHTML to ensure script execution
                textcenter.textContent = \`
                    (function() {                                                                                                   
                        let center = localStorage.getItem("textCenter") === "true";
                        const applyTextCenter = () => {
                            const titles = document.getElementsByClassName("textcenter");
                            const body = document.body;
                            const idelement = document.getElementById("accessibility");

                            if (idelement) {
                                idelement.style.textAlign = center ? "left" : "";
                            }
                            if (center) {
                                body.style.textAlign = "center";
                                body.classList.add("text-center");
                            } else {
                                body.style.textAlign = "";
                                body.classList.remove("text-center");
                            }

                            Array.from(titles).forEach((title) => {
                                title.style.backgroundColor = center ? "#146FF8" : "";
                                title.style.color = center ? "#ffffff" : "";
                            });
                        };

                    })();
                \`;

                localStorage.setItem("textCenter", "true");
                document.body.appendChild(textcenter);
            };
            
        // Ensure styles are applied on page load
        window.addEventListener("load", () => {
            if (localStorage.getItem("textCenter") === "true") {
                document.body.style.textAlign = "center";
                document.body.classList.add("text-center");
                document.querySelectorAll('.textcenter').forEach(title => {
                    title.style.backgroundColor = "#146FF8";
                    title.style.color = "#ffffff";
                });
            }
        });
    `;
};


