export const FONT_SIZE = () => {
    return `
        const increasedecreasefontsize = (isIncrease) => {
            let isScriptInjected = document.getElementById("FontSize");

            console.log("Injecting script...");
            const fontsize = document.createElement('script');
            fontsize.id = "FontSize";
            fontsize.innerHTML = \`
            (function (){
                let baseFontSize = 16; // Default base font size
                let storedFontSizes = JSON.parse(localStorage.getItem('font-sizelocal')) || {}; // Store individual sizes

                const elements = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span');

                // Apply stored font sizes on page load
                window.addEventListener('DOMContentLoaded', () => {
                    elements.forEach((element) => {
                        if (element.id === "accessibilty") return;
                        if (storedFontSizes[element.tagName]) {
                            element.style.fontSize = storedFontSizes[element.tagName];
                        }
                    });
                });

                const adjustFontSize = (isIncrease) => {
                    elements.forEach((element) => {
                        if (element.id === "accessibilty") return;

                        let currentFontSize = parseFloat(getComputedStyle(element).fontSize);
                        let newFontSize = isIncrease ? currentFontSize + 1 : currentFontSize - 1;

                        if (!isNaN(newFontSize) && newFontSize >= 10) {
                            element.style.fontSize = newFontSize + 'px';
                            storedFontSizes[element.tagName] = newFontSize + 'px';
                        }
                    });

                    localStorage.setItem('font-sizelocal', JSON.stringify(storedFontSizes));

                    // Update Percentage Display
                    let sampleElement = document.querySelector('p') || document.querySelector('span');
                    if (sampleElement) {
                        let newFontSize = parseFloat(storedFontSizes[sampleElement.tagName]) || baseFontSize;
                        let increasePercentage = ((newFontSize - baseFontSize) / 1) * 10;

                        const percentageElement = document.querySelector('.font-percentage');
                        if (percentageElement) {
                            percentageElement.innerText = increasePercentage === 0 ? "Default" : increasePercentage + '%';
                        }
                    }
                };

                // Adjust font size when script is injected
                adjustFontSize(\${isIncrease ? 'true' : 'false'});
            })();
            \`;

            document.body.appendChild(fontsize);
        };
       window.addEventListener('load', () => {
     const elements = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span');
     let storedFontSizes = JSON.parse(localStorage.getItem('font-sizelocal')) || {}; // Store individual sizes
                     let baseFontSize = 16; // Default base font size



    elements.forEach((element) => {
        if (storedFontSizes[element.tagName]) {
                                if (element.id === "accessibilty") return;

            element.style.fontSize = storedFontSizes[element.tagName];
        }
    });

    // ✅ Routing ke baad bhi font size apply hoga
    window.addEventListener('pushstate', () => {
        elements.forEach((element) => {
                                    if (element.id === "accessibilty") return;

            if (storedFontSizes[element.tagName]) {
                element.style.fontSize = storedFontSizes[element.tagName];
            }
        });
    });

    // ✅ Percentage update
    let sampleElement = document.querySelector('p') || document.querySelector('span');
    if (sampleElement) {
        let newFontSize = parseFloat(storedFontSizes[sampleElement.tagName]) || baseFontSize;
        let increasePercentage = ((newFontSize - baseFontSize) / 1) * 10;
        const percentageElement = document.querySelector('.font-percentage');
        if (percentageElement) {
            percentageElement.innerText = increasePercentage === 0 ? "Default" : increasePercentage + "%";
        }
    }
});


    `;
};
