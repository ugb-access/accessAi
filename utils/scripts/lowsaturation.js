export const SCRIPT_LOWSATURATION = () => {
    return `
        const togglelowsaturation = () => {
            let isScriptInjected = document.getElementById("HighSaturation");
            let high = localStorage.getItem("lowsaturationlocal") === "true";
                    const body = document.body;

            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("lowsaturationlocal", "false");
                isScriptInjected.remove();
                            body.classList.remove('saturate-[0.4]');

                const titles = document.getElementsByClassName('lowSaturation');

                  Array.from(titles).forEach(title => {
                            title.style.backgroundColor = "";
                            title.style.color = '';
                        
                    });

                return;
            }

            console.log("Injecting script...");
            const lowsaturation= document.createElement('script');
            lowsaturation.id = "HighSaturation";
            lowsaturation.innerHTML = \`
            (function (){
                let lowSaturation = localStorage.getItem("lowsaturationlocal") === "true";
                localStorage.setItem("lowsaturationlocal", "true");
              const lowsaturation = () => {
        const body = document.body
        const titles = document.getElementsByClassName('lowSaturation');
        lowSaturation = !lowSaturation
        if (lowSaturation) {
            body.classList.add('saturate-[0.4]');

        } else {
            body.classList.remove('saturate-[0.4]');

        }
        Array.from(titles).forEach(title => {
            if (lowSaturation) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        })
    }   
            lowsaturation()    
            })();
            \`;

            document.body.appendChild(lowsaturation);
        };

          window.addEventListener("load", () => {         
            if (localStorage.getItem("lowsaturationlocal") === "true") {
          const body = document.body;
            body.classList.add('saturate-[0.4]');

        const titles = document.getElementsByClassName('lowSaturation');
                   Array.from(titles).forEach(title => {
                        
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = '#ffffff';
                        
                    });

            }
        });
    `;
};
