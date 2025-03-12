export const LETTER_SPACING_ADJUSTMENT = () => {
    return `
        const increaseDecreaseLetterSpacing = (isIncrease) => {
            let existingScript = document.getElementById("LetterSpacing");
            if (!existingScript) {
                console.log("Injecting script...");
                const letterSpacingScript = document.createElement('script');
                letterSpacingScript.id = "LetterSpacing";
                letterSpacingScript.innerHTML = \`
                (function () {
                    const originalLetterSpacings = new Map();
                    
                    window.adjustLetterSpacing = (isIncrease) => {
                        let storedLetterSpacings = JSON.parse(localStorage.getItem("letter-spacing-local")) || {};
                        const elements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, button, span");
                        let isDefault = true;

                        elements.forEach((element) => {
                            if (element.id === "accessibilty") return;
                            const currentLetterSpacing = parseFloat(getComputedStyle(element).letterSpacing) || 0;

                            if (!originalLetterSpacings.has(element)) {
                                originalLetterSpacings.set(element, currentLetterSpacing);
                            }

                            const newLetterSpacing = isIncrease ? currentLetterSpacing + 1 : currentLetterSpacing - 1;

                            if (!isNaN(newLetterSpacing)) {
                                element.style.letterSpacing = newLetterSpacing + "px";
                                storedLetterSpacings[element.tagName] = newLetterSpacing + "px";
                            }

                            if (newLetterSpacing !== originalLetterSpacings.get(element)) {
                                isDefault = false;
                            }
                        });

                        // Update percentage display
                        const percentageElement = document.querySelector(".letter-spacing-percentage");
                        let percentage = parseInt(localStorage.getItem("letter-spacing-percentage")) || 0;

                        percentage = isIncrease ? percentage + 10 : percentage - 10;
                        
                        if (percentageElement) {
                            percentageElement.innerText = percentage === 0 ? "Default" : percentage + "%";
                            localStorage.setItem("letter-spacing-percentage", percentage);
                        }

                        // If default letter spacing is restored, remove the script
                        if (isDefault) {
                            console.log("Restoring default letter spacing. Removing script...");
                            localStorage.removeItem("letter-spacing-local");
                            localStorage.removeItem("letter-spacing-percentage");
                            const scriptElement = document.getElementById("LetterSpacing");
                            if (scriptElement) scriptElement.remove();
                        } else {
                            localStorage.setItem("letter-spacing-local", JSON.stringify(storedLetterSpacings));
                        }
                    };

                    adjustLetterSpacing(\${isIncrease});
                })();
                \`;

                document.body.appendChild(letterSpacingScript);
            } else {
               window.adjustLetterSpacing(isIncrease);
            }
        };

        window.addEventListener("load", () => {
            let storedPercentage = parseInt(localStorage.getItem("letter-spacing-percentage")) || 0;
            let storedLetterSpacings = JSON.parse(localStorage.getItem("letter-spacing-local")) || {};
            const percentageElement = document.querySelector(".letter-spacing-percentage");
            
            if (percentageElement) {
                percentageElement.innerText = storedPercentage === 0 ? "Default" : storedPercentage + "%";
            }

            const elements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, button, span");
            elements.forEach((element) => {
                if (storedLetterSpacings[element.tagName]) {
                    element.style.letterSpacing = storedLetterSpacings[element.tagName];
                }
            });
        }); 
    `;
};
