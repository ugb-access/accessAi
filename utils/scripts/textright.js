export const SCRIPT_TEXTRIGHT = () => {
    return `
        const toggleTextRight = () => {
            let isScriptInjected = document.getElementById("textright");
            let right = localStorage.getItem("textrightlocal") === "true";
            
            if (isScriptInjected) {
                console.log("Removing script...");
                isScriptInjected.remove();
                localStorage.setItem("textrightlocal", "false");
                document.body.style.textAlign = "";
                document.body.classList.remove("text-right");

                document.querySelectorAll(".textright").forEach((title) => {
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
            const textright = document.createElement("script");
            textright.id = "textright";
            textright.innerHTML = \`
                (function() {
                    let right = localStorage.getItem("textrightlocal") === "true";

                    const applyTextRight = () => {
                        const titles = document.querySelectorAll(".textright");
                        const body = document.body;
                        const idelement = document.getElementById("accessibilty");

                        if (right) {
                            body.style.textAlign = "right";
                            body.classList.add("text-right");
                        } else {
                            body.style.textAlign = "";
                            body.classList.remove("text-right");
                        }

                        titles.forEach((title) => {
                            title.style.backgroundColor = right ? "#146FF8" : "";
                            title.style.color = right ? "#ffffff" : "";
                        });

                        // Ensure #accessibilty is NOT affected
                        if (idelement) {
                            idelement.style.textAlign = "left";
                        }
                    };

                    window.allTextRight = () => {
                        right = !right;
                        localStorage.setItem("textrightlocal", right);
                        applyTextRight();
                    };

                    applyTextRight();
                })();
            \`;

            localStorage.setItem("textrightlocal", "true");
            document.body.appendChild(textright);
        };

        window.addEventListener("load", () => {
            if (localStorage.getItem("textrightlocal") === "true") {
                document.body.style.textAlign = "right";
                document.body.classList.add("text-right");
                
                document.querySelectorAll('.textright').forEach(title => {
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
