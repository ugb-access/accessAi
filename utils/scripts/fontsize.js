export const FONT_SIZE = () => {
    return `
        const  increasedecreasefontsize= (isIncrease) => {
            let existingScript = document.getElementById("FontSize");
            if (!existingScript) {
                console.log("Injecting script...");
                const fontSizeScript = document.createElement('script');
                fontSizeScript.id = "FontSize";
                fontSizeScript.innerHTML = \`
                (function (){
                    const originalFontSizes = new Map();
             
                    window.adjustFontSize = (isIncrease) => {
                        let storedFontSizes = JSON.parse(localStorage.getItem("font-sizelocal")) || {};
                        let percentage = parseInt(localStorage.getItem("font-size-percentage")) || 0;
                        const elements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, button, span");
                        let isDefault = true;

                        elements.forEach((element) => {
                            const currentFontSize = parseFloat(getComputedStyle(element).fontSize);
                            if (element.id === "accessibilty") return;
                            if (!originalFontSizes.has(element)) {
                                originalFontSizes.set(element, currentFontSize);
                            }

                            const newFontSize = isIncrease ? currentFontSize + 1 : currentFontSize - 1;

                            if (!isNaN(newFontSize) && newFontSize > 0) {
                                element.style.fontSize = newFontSize + "px";
                                storedFontSizes[element.tagName] = newFontSize + "px";
                            }

                            // Check if any font size is changed from default
                            if (newFontSize !== originalFontSizes.get(element)) {
                                isDefault = false;
                            }
                        });

                        const percentageElement = document.querySelector(".font-percentage");
                        if (percentageElement) {
                            percentage = isIncrease ? percentage + 10 : percentage - 10;
                            percentageElement.innerText = percentage === 0 ? "Default" : percentage + "%";
                            localStorage.setItem("font-size-percentage", percentage);
                        }

                        // If default size is restored, remove the script
                        if (isDefault) {
                            console.log("Restoring default font size. Removing script...");
                            localStorage.removeItem("font-sizelocal");
                            localStorage.removeItem("font-size-percentage");
                            const scriptElement = document.getElementById("FontSize");
                            if (scriptElement) scriptElement.remove();
                        } else {
                            localStorage.setItem("font-sizelocal", JSON.stringify(storedFontSizes));
                        }
                    };

                    adjustFontSize(\${isIncrease});
                })();
                \`;

                document.body.appendChild(fontSizeScript);
            } else {
               window.adjustFontSize(isIncrease);
            }
        };

        window.addEventListener("load", () => {
            let storedPercentage = parseInt(localStorage.getItem("font-size-percentage")) || 0;
            let storedFontSizes = JSON.parse(localStorage.getItem("font-sizelocal")) || {};
            const percentageElement = document.querySelector(".font-percentage");
            
            
            if (percentageElement) {
                percentageElement.innerText = storedPercentage === 0 ? "Default" : storedPercentage + "%";
            }

            const elements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, button, span");
            elements.forEach((element) => {
                if (element.id === "accessibilty") return;
                if (storedFontSizes[element.tagName]) {
                    element.style.fontSize = storedFontSizes[element.tagName];
                }
            });
        });
    `;
};
