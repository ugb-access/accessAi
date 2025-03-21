export const SCRIPT_HIGHSATURATION = () => {
    return `
        const togglehighsaturation = () => {
            let isScriptInjected = document.getElementById("HighSaturation");
            let high = localStorage.getItem("highsaturationlocal") === "true";
            const body = document.body;

            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("highsaturationlocal", "false");
                isScriptInjected.remove();

                body.classList.remove('saturate-high');

                const titles = document.getElementsByClassName('Saturation');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "";
                    title.style.color = "";
                });

                return;
            }

            console.log("Injecting script...");
            const highSaturationScript = document.createElement('script');
            highSaturationScript.id = "HighSaturation";
            highSaturationScript.innerHTML = \`
                (function () {
                    localStorage.setItem("highsaturationlocal", "true");

                    // Inject CSS inside script
                    let styleElement = document.createElement("style");
                    styleElement.innerHTML = \\\`
                        .saturate-high {
                            filter: saturate(2); /* 10x high saturation */
                        }
                    \\\`;
                    document.head.appendChild(styleElement);

                    const applyHighSaturation = () => {
                        const body = document.body;
                        const titles = document.getElementsByClassName('Saturation');

                        body.classList.add('saturate-high');

                        Array.from(titles).forEach(title => {
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = "#ffffff";
                        });
                    };
                    
                    applyHighSaturation();
                })();
            \`;

            document.body.appendChild(highSaturationScript);
        };

        window.addEventListener("load", () => {
            if (localStorage.getItem("highsaturationlocal") === "true") {
                console.log("Applying stored high saturation...");
                const body = document.body;
                body.classList.add('saturate-high');

                const titles = document.getElementsByClassName('Saturation');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "#146FF8";
                    title.style.color = "#ffffff";
                });
            }
        });
    `;
};
