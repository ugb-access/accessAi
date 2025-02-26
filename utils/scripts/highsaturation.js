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
                            body.classList.remove('saturate-200');

                const titles = document.getElementsByClassName('Saturation');

                  Array.from(titles).forEach(title => {
                        if (high) {
                            title.style.backgroundColor = "";
                            title.style.color = '';
                        } 
                    });

                return;
            }

            console.log("Injecting script...");
            const highsaturation= document.createElement('script');
            highsaturation.id = "HighSaturation";
            highsaturation.innerHTML = \`
            (function (){
                let high = localStorage.getItem("highsaturationlocal") === "true";
                localStorage.setItem("highsaturationlocal", "true");
              const HighSaturation = () => {
        const body = document.body
        const titles = document.getElementsByClassName('Saturation');
        high = !high
        if (high) {
            body.classList.add('saturate-200');


        } else {
            body.classList.remove('saturate-200');

        }
        Array.from(titles).forEach(title => {
            if (high) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        })
    }
                 HighSaturation()        
            })();
            \`;

            document.body.appendChild(highsaturation);
        };

          window.addEventListener("load", () => {         
            if (localStorage.getItem("highsaturationlocal") === "true") {
          const body = document.body;
                      body.classList.add('saturate-200');

        const titles = document.getElementsByClassName('Saturation');
                   Array.from(titles).forEach(title => {
                        
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = '#ffffff';
                        
                    });

            }
        });
    `;
};
