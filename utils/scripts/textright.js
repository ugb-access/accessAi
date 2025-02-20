export const SCRIPT_TEXTRIGHT = () => {
    return `
    const toggleTextRight = () => {
        let isscriptinjected = document.getElementById("textRight");
        let right = localStorage.getItem("textrightlocal") === "true";

        if (isscriptinjected) {
            // Remove script but KEEP localStorage value
            console.log("Removing script...");
            isscriptinjected.remove();
            document.body.style.textAlign = "";
            document.body.classList.remove("text-right");
            document.querySelectorAll(".textright").forEach((title) => {
                title.style.backgroundColor = "";
                title.style.color = "";
            });
            return;
        }

        console.log("Injecting script...");
        const textright = document.createElement("script");
        textright.id = "textRight";
        textright.textContent = \`
        (function applyTextRight() {
            let right = localStorage.getItem("textrightlocal") === "true";
            right = !right;
            localStorage.setItem("textrightlocal", right);
            
            const body = document.body;
            const titles = document.querySelectorAll('.textright');
            const idelement = document.getElementById('accessibilty');
            
            if (idelement) {
                idelement.style.textAlign = right ? 'left' : '';
            }

            if (right) {
                body.style.textAlign = 'right';
                body.classList.add('text-right');
                } else {
                    body.style.textAlign = '';
                body.classList.remove('text-right');
                }
                
                titles.forEach(title => {
                    title.style.backgroundColor = right ? "#146FF8" : "";
                    title.style.color = right ? "#ffffff" : "";
            });
            })();
            \`;
            
        document.body.appendChild(textright);
    };

    // Apply styles on page load WITHOUT resetting localStorage
    window.addEventListener("load", () => {
        let right = localStorage.getItem("textrightlocal") === "true";
        if (right) {
            console.log("Applying right-aligned styles on page load...");
            document.body.style.textAlign = "right";
            document.body.classList.add("text-right");
            document.querySelectorAll('.textright').forEach(title => {
                title.style.backgroundColor = "#146FF8";
                title.style.color = "#ffffff";
            });
        }
    });
    `;
};
