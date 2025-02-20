export const SCRIPT_TEXTLEFT = () => {
    return `
        const toggleTextLeft = () => {
            let isScriptInjected = document.getElementById("textleft");
            let left = localStorage.getItem("textLeftlocal") === "true";
            if (isScriptInjected) {
                                               // Remove script and reset styles
                console.log("Removing script...");
                isScriptInjected.remove();
                localStorage.setItem("textLeftlocal", "false");
                document.body.style.textAlign = "";
                document.body.classList.remove("text-left");
                document.querySelectorAll(".textleft").forEach((title) => {
                    title.style.backgroundColor = "";
                    title.style.color = "";
                });
                return;
            }
            console.log("Injecting script...");
            const textleft = document.createElement("script");
            textleft.id = "textleft";
              textleft.innerHTML = \`
                (function() {
                    let left = localStorage.getItem("textLeftlocal") === "true";
                    const applyTextLeft = () => {
                        const titles = document.querySelectorAll(".textleft");
                        const body = document.body;
                        if (left) {
                            body.style.textAlign = "left";
                            body.classList.add("text-left");
                        } else {
                            body.style.textAlign = "";
                            body.classList.remove("text-left");
                        }
                        titles.forEach((title) => {
                            title.style.backgroundColor = left ? "#146FF8" : "";
                            title.style.color = left ? "#ffffff" : "";
                        });
                    };
                    window.allTextLeft = () => {
                        left = !left;
                        localStorage.setItem("textLeftlocal", left);
                        applyTextLeft();
                    };
                    applyTextLeft();
                })();
            \`;

            localStorage.setItem("textLeftlocal", "true");
            document.body.appendChild(textleft);
            
        };
    //   // Ensure styles are applied on page load
        window.addEventListener("load", () => {
            if (localStorage.getItem("textLeftlocal") === "true") {
                document.body.style.textAlign = "left";
                document.body.classList.add("text-left");
                document.querySelectorAll('.textleft').forEach(title => {
                    title.style.backgroundColor = "#146FF8";
                    title.style.color = "#ffffff";
                });
            }
        });



    `;
};
