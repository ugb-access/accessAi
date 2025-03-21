export const BACKGROUND_COLOR = () => {
    return `
        const changeBackgroundColor = (newBgColor) => {
            if (!newBgColor || newBgColor === "#fff") {
                localStorage.removeItem("bgcolorlocal");
                document.body.style.removeProperty("background-color");
                return;
            }

            localStorage.setItem("bgcolorlocal", newBgColor);
            document.body.style.setProperty("background-color", newBgColor, "important");

            const footer = document.querySelector('footer');
            if (footer) {
                footer.classList.add('important-background');
                let styleElement = document.getElementById('dynamic-styles');
                if (!styleElement) {
                    styleElement = document.createElement('style');
                    styleElement.id = 'dynamic-styles';
                    document.head.appendChild(styleElement);
                }
                styleElement.innerHTML = \`
                    .important-background {
                        background: \${newBgColor} !important;
                        color: white;
                        transition: background-color 0.3s ease;
                    }
                \`;
            }
        };

        window.addEventListener("load", () => {
            let storedBgColor = localStorage.getItem("bgcolorlocal");
            if (storedBgColor) {
                changeBackgroundColor(storedBgColor); // Corrected function call
            }
        });
    `;
};
