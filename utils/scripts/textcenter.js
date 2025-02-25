export const SCRIPT_CENTER = () => {
    return `
        const toggleTextcenter = () => {
            let isScriptInjected = document.getElementById("textcenter");
            let center = localStorage.getItem("textCenter") === "true";
            
            if (isScriptInjected) {
                console.log("Removing script...");
                isScriptInjected.remove();
                localStorage.setItem("textCenter", "false");
                document.body.style.textAlign = "";
                document.body.classList.remove("text-center");
                document.querySelectorAll(".textcenter").forEach((title) => {
                    title.style.backgroundColor = "";
                    title.style.color = "";
                });
                let idelement = document.getElementById("accessibilty");
                if (idelement) {
                    idelement.style.textAlign = "";
                }
                return;
            }
            console.log("Injecting script...");
            const textcenter= document.createElement("script");
            textcenter.id = "textcenter";
            textcenter.innerHTML = \`
                (function() {
                    let center = localStorage.getItem("textCenter") === "true";

                    const applyTextCenter = () => {
                        const titles = document.querySelectorAll(".textcenter");
                        const body = document.body;
                        const idelement = document.getElementById("accessibilty");

                        if (center) {
                            body.style.textAlign = "center";
                            body.classList.add("text-center");
                        } else {
                            body.style.textAlign = "";
                            body.classList.remove("text-center");
                        }

                        titles.forEach((title) => {
                            title.style.backgroundColor = center ? "#146FF8" : "";
                            title.style.color = center ? "#ffffff" : "";
                        });

                        // Ensure #accessibilty is NOT affected
                        if (idelement) {
                            idelement.style.textAlign = "left";
                        }
                    };

                    window.allTextCenter = () => {
                        center = !center;
                        localStorage.setItem("textCenter", center);
                        applyTextCenter();
                    };

                    applyTextCenter();
                })();
            \`;

            localStorage.setItem("textCenter", "true");
            document.body.appendChild(textcenter);
        };

        window.addEventListener("load", () => {
            if (localStorage.getItem("textCenter") === "true") {
                document.body.style.textAlign = "center";
                document.body.classList.add("text-center");
                
                document.querySelectorAll('.textcenter').forEach(title => {
                    title.style.backgroundColor = "#146FF8";
                    title.style.color = "#ffffff";
                });

                let idelement = document.getElementById("accessibilty");
                if (idelement) {
                    idelement.style.textAlign = "left";
                }
            }
        });
    `;
};

