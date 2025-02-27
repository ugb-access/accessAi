export const SCRIPT_HIGH = () => {
    return `
        const togglehighcontrast = () => {
            let isScriptInjected = document.getElementById("HighContrast");
            let high = localStorage.getItem("highcontrastlocal") === "true";
                    const body = document.body;

            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("highcontrastlocal", "false");
                isScriptInjected.remove();
                 body.style.background = '';
                const titles = document.getElementsByClassName('highcolor');

                  Array.from(titles).forEach(title => {
                        if (high) {
                            title.style.backgroundColor = "";
                            title.style.color = '';
                        } 
                    });

                return;
            }

            console.log("Injecting script...");
            const highcontrast = document.createElement('script');
            highcontrast.id = "HighContrast";
            highcontrast.innerHTML = \`
            (function (){
                let high = localStorage.getItem("highcontrastlocal") === "true";
                localStorage.setItem("highcontrastlocal", "true");

                const HighContrast = () => {
                    const body = document.body;
                    const titles = document.getElementsByClassName('highcolor');
                    high = !high;
                      if (high) {
                        body.style.setProperty("background", "#ffffff", "important");
                    } else {
                        body.style.setProperty("background", "", "important");
                    }

                    Array.from(titles).forEach(title => {
                        if (high) {
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = '#ffffff';
                        } 
                            else {
                            title.style.backgroundColor = '';
                            title.style.color = '';
                        }
                    });
                };

                HighContrast();
            })();
            \`;

            document.body.appendChild(highcontrast);
        };

          window.addEventListener("load", () => {         
            if (localStorage.getItem("highcontrastlocal") === "true") {
          const body = document.body;
        const titles = document.getElementsByClassName('highcolor');
        body.style.background = '#ffffff';
                   Array.from(titles).forEach(title => {
                        
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = '#ffffff';
                        
                    });

            }
        });
    `;
};
