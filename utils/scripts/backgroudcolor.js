export const BACKGROUND_COLOR = () => {
    return `
        const changeBackgroundColor = (newBgColor) => {
            let scriptId = "BackgroundColorScript";
            let storedBgColor = localStorage.getItem("bgcolorlocal");

            let bgColorToApply = storedBgColor === newBgColor ? storedBgColor : newBgColor;

            let existingScript = document.getElementById(scriptId);
            if (existingScript) {
                console.log('Existing background script removed');
                existingScript.remove(); 
            }

            if (!newBgColor || newBgColor === "#fff") {
                localStorage.removeItem("bgcolorlocal"); 
                
                document.body.style.backgroundColor = "";

                const footer = document.getElementsByTagName('footer');
                if (footer.length > 0) {
                    footer[0].classList.remove('important-background');
                }

                return;
            }

            localStorage.setItem("bgcolorlocal", bgColorToApply);

            const bgColorScript = document.createElement('script');
            bgColorScript.id = scriptId;
            bgColorScript.innerHTML = \`
                (function () {
                    let bgColor = '\${bgColorToApply}';

                    const applyBackgroundColor = () => {
                        document.body.style.backgroundColor = bgColor;

                        const footer = document.getElementsByTagName('footer');
                        if (footer.length > 0) {
                            footer[0].classList.add('important-background');
                            let styleElement = document.getElementById('dynamic-styles');
                            if (!styleElement) {
                                styleElement = document.createElement('style');
                                styleElement.id = 'dynamic-styles';
                                document.head.appendChild(styleElement);
                            }
                         styleElement.textContent = ".important-background { " +
                           "background: " + bgColor + " !important; " +
                              "color: white; " +
                             "transition: background-color 0.3s ease; " +
                               "}";

                        }
                    };

                    applyBackgroundColor();
                })();
            \`;

            document.body.appendChild(bgColorScript);
        };

        window.addEventListener("load", () => {
            let storedBgColor = localStorage.getItem("bgcolorlocal");

            let existingScript = document.getElementById("BackgroundColorScript");
            if (!storedBgColor) {
                if (existingScript) {
                    console.log("Removing background script on load...");
                    existingScript.remove();
                }

                document.body.style.backgroundColor = "";

                const footer = document.getElementsByTagName('footer');
                if (footer.length > 0) {
                    footer[0].classList.remove('important-background');
                }

                return;
            }

            changeBackgroundColor(storedBgColor);
        });
    `;
};
