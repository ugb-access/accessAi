export const CONTENT_SCALING = () => {
    return `
        const increasedecreasescaling = (isIncrease) => {
            let existingScript = document.getElementById("ContentScale");
            if (!existingScript) {
                console.log("Injecting script...");
                const scaleScript = document.createElement('script');
                scaleScript.id = "ContentScale";
                scaleScript.innerHTML = \`
                (function () {
                    let scaleFactor = parseFloat(localStorage.getItem("content-scale")) || 1;

                    window.adjustScale = (isIncrease) => {
                        scaleFactor = isIncrease ? scaleFactor + 0.01 : scaleFactor - 0.01;

                        if (scaleFactor < 0.5) scaleFactor = 0.5;  // Minimum scaling
                        if (scaleFactor > 2) scaleFactor = 2;    // Maximum scaling

                        document.body.style.transform = "scale(" + scaleFactor + ")";
                     document.body.style.transformOrigin = "centercenter";

                   

                        // Update percentage display
                        const percentageElement = document.querySelector(".scale-percentage");
                if (percentageElement) {
                            let percentage = ((scaleFactor - 1) *1000).toFixed(0); // Shows 10%, 20%, etc.
                            percentageElement.innerText = percentage === "0" ? "Default" : percentage + "%";
                        }

                        // Save scale to localStorage
                        localStorage.setItem("content-scale", scaleFactor);

                        // Reset and remove script if back to default
                        if (scaleFactor === 1) {
                            console.log("Reset to default. Removing script...");
                            localStorage.removeItem("content-scale");
                            const scriptElement = document.getElementById("ContentScale");
                            if (scriptElement) scriptElement.remove();
                        }
                    };

                    adjustScale(\${isIncrease});
                })();
                \`;

                document.body.appendChild(scaleScript);
            } else {
                window.adjustScale(isIncrease);
            }
        };

        window.addEventListener("load", () => {
            let savedScale = parseFloat(localStorage.getItem("content-scale")) || 1;
                                let scaleFactor = parseFloat(localStorage.getItem("content-scale")) || 1;

            if (savedScale !== 1) {
                document.body.style.transform = "scale(" + savedScale + ")";
                document.body.style.transformOrigin = "top left";
            }
                         const percentageElement = document.querySelector(".scale-percentage");
                if (percentageElement) {
                            let percentage = ((scaleFactor - 1) *1000).toFixed(0); // Shows 10%, 20%, etc.
                            percentageElement.innerText = percentage === "0" ? "Default" : percentage + "%";
                        }
        });
    `;
};
