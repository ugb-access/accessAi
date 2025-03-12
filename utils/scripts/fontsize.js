export const FONT_SIZE = () => {
    return `
        const increasedecreasefontsize = (isIncrease) => {
            let existingScript = document.getElementById("FontSize");
            if (!existingScript) {
                console.log("Injecting script...");
                const fontsize = document.createElement('script');
                fontsize.id = "FontSize";
                fontsize.innerHTML = \`
                (function (){
                    const originalFontSizes = new Map();
             

                    window.adjustFontSize = (isIncrease) => {
                        let storedFontSizes = JSON.parse(localStorage.getItem("font-sizelocal")) || {};
                        const elements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, button, span");
                        let isDefault = true;

                        elements.forEach((element) => {
                            if (element.id === "accessibilty") return;
                            const currentFontSize = parseFloat(getComputedStyle(element).fontSize);
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
                            let sampleElement = document.querySelector("p") || document.querySelector("span");
                            let sampleFontSize = sampleElement ? parseFloat(getComputedStyle(sampleElement).fontSize) : 16;
                            let increasePercentage = ((sampleFontSize - 16) / 10) * 100;
                            percentageElement.innerText = increasePercentage === 0 ? "Default" : increasePercentage.toFixed(0) + "%";
                        }

                        // If default size is restored, remove the script
                        if (isDefault) {
                            console.log("Restoring default font size. Removing script...");
                            localStorage.removeItem("font-sizelocal");
                            const scriptElement = document.getElementById("FontSize");
                            if (scriptElement) scriptElement.remove();
                        } else {
                            localStorage.setItem("font-sizelocal", JSON.stringify(storedFontSizes));
                        }
                    };

                    adjustFontSize(\${isIncrease});
                })();
                \`;

                document.body.appendChild(fontsize);
            } else {
               window.adjustFontSize(isIncrease);
            }
        };

        window.addEventListener("load", () => {});
    `;
};
