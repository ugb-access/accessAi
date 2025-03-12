export const LINE_HEIGHT_ADJUSTMENT = () => {
    return `
        const increaseDecreaseLineHeight = (isIncrease) => {
            let existingScript = document.getElementById("LineHeight");
            if (!existingScript) {
                console.log("Injecting script...");
                const lineHeightScript = document.createElement('script');
                lineHeightScript.id = "LineHeight";
                lineHeightScript.innerHTML = \`
                (function () {
                    const originalLineHeights = new Map();
                    
                    window.adjustLineHeight = (isIncrease) => {
                        let storedLineHeights = JSON.parse(localStorage.getItem("line-height-local")) || {};
                        const elements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, button, span");
                        let isDefault = true;

                        elements.forEach((element) => {
                            if (element.id === "accessibilty") return;
                            const currentLineHeight = parseFloat(getComputedStyle(element).lineHeight);

                            if (!originalLineHeights.has(element)) {
                                originalLineHeights.set(element, currentLineHeight);
                            }

                            const newLineHeight = isIncrease ? currentLineHeight + 1 : currentLineHeight - 1;

                            if (!isNaN(newLineHeight) && newLineHeight > 0) {
                                element.style.lineHeight = newLineHeight + "px";
                                storedLineHeights[element.tagName] = newLineHeight + "px";
                            }

                            if (newLineHeight !== originalLineHeights.get(element)) {
                                isDefault = false;
                            }
                        });

                        // Update percentage display
                        const percentageElement = document.querySelector(".line-height-percentage");
                        let percentage = parseInt(localStorage.getItem("line-height-percentage")) || 0;

                        percentage = isIncrease ? percentage + 10 : percentage - 10;
                        
                        
                        if (percentageElement) {
                            percentageElement.innerText = percentage === 0 ? "Default" : percentage + "%";
                            localStorage.setItem("line-height-percentage", percentage);
                        }

                        // If default line height is restored, remove the script
                        if (isDefault) {
                            console.log("Restoring default line height. Removing script...");
                            localStorage.removeItem("line-height-local");
                            localStorage.removeItem("line-height-percentage");
                            const scriptElement = document.getElementById("LineHeight");
                            if (scriptElement) scriptElement.remove();
                            } else {
                                localStorage.setItem("line-height-local", JSON.stringify(storedLineHeights));
                        }
                        };

                    adjustLineHeight(\${isIncrease});
                })();
                \`;

                document.body.appendChild(lineHeightScript);
            } else {
               window.adjustLineHeight(isIncrease);
            }
        };
               window.addEventListener("load", () => {
            let storedPercentage = parseInt(localStorage.getItem("line-height-percentage")) || 0;
            let storedLineHeights = JSON.parse(localStorage.getItem("line-height-local")) || {};
            const percentageElement = document.querySelector(".line-height-percentage");
            
            if (percentageElement) {
                percentageElement.innerText = storedPercentage === 0 ? "Default" : storedPercentage + "%";
            }

            const elements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, button, span");
            elements.forEach((element) => {
                if (storedLineHeights[element.tagName]) {
                    element.style.lineHeight = storedLineHeights[element.tagName];
                }
            });
        }); 
      
    `;
};
