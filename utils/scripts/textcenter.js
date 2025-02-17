export const SCRIPT_CENTER = () => {
    return `
            const toggleTextCenter = () => {
                const body = document.body;
                let isScriptInjected = document.getElementById("textcenter");
                let center = localStorage.getItem("textCenter") === "true";

                if (isScriptInjected) {
                    console.log('Removing script...');
                    isScriptInjected.remove();
                    localStorage.setItem("textCenter", "false");
                    body.style.textAlign = "";
                    body.classList.remove("text-center");
                        document.querySelectorAll('.textcenter').forEach(title => {
                    title.style.backgroundColor = '';
                    title.style.color = '';
                });
                    
                    return;
                }

                console.log('Creating script...');

                const textcenter = document.createElement("script");
                textcenter.id = "textcenter";
                textcenter.innerHTML = \`
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
                    
                        const allTextCenter = () => {
                            center = !center;
                            localStorage.setItem("textCenter", center ? "true" : "false");
                            applyTextCenter();
                        };

                        // Make function globally available
                        window.allTextCenter = allTextCenter;
                        
                        // Apply saved state on page load
                        applyTextCenter();
                    })();
                \`;

                document.head.appendChild(textcenter);
                
                // Call the function after injection
                window.allTextCenter();
            };

            // Ensure function is available globally even if script is not injected
            if (typeof window.allTextCenter !== "undefined") {
                toggleTextCenter();
            } else {
                window.allTextCenter();
            }
                
    `;
};
