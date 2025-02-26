export const SCRIPT_LIGHT = () => {
  return `
        const togglelightcontrast = () => {
            let isScriptInjected = document.getElementById("LightContrasts");
            let light = localStorage.getItem("lightcontrastlocal") === "true";
             const body = document.body;

            if (isScriptInjected) {
                console.log("Removing script...");
                isScriptInjected.remove();
                localStorage.setItem("lightcontrastlocal", "false");
                   body.style.background = '';
                   body.style.color = '';
              const titles = document.getElementsByClassName('lightcolor');
               Array.from(titles).forEach(title => {
                title.style.backgroundColor = "";
                title.style.color = '';
              
              });
      
                return;
            }

            console.log("Injecting script...");
            const lightcontrast = document.createElement('script');
            lightcontrast.id = "LightContrasts";
            lightcontrast.innerHTML = \`
            (function (){
              let light = localStorage.getItem("lightcontrastlocal") === "true";
                              localStorage.setItem("lightcontrastlocal", "true");

              const LightContrast = () => {
                
                const body = document.body
                const titles = document.getElementsByClassName('lightcolor');
                light = !light
              if (light) {
               body.style.background = '#f2f0f0';
               body.style.color = '#000000';
               } else {
                body.style.background = '#ffffff';
                body.style.color = '';
               }


             Array.from(titles).forEach(title => {
              if (light) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
              } else {
                title.style.backgroundColor = '';
                title.style.color = '';

              }
        });
    }
                  LightContrast()

            })();
            \`;

            document.body.appendChild(lightcontrast);
        };


      window.addEventListener("load", () => {         
            if (localStorage.getItem("lightcontrastlocal") === "true") {
          const body = document.body;
        const titles = document.getElementsByClassName('lightcolor');
                          body.style.background = '#f2f0f0';
                           body.style.color = '#000000';
                   Array.from(titles).forEach(title => {
                        
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = '#ffffff';
                        
                    });

            }
        });

    `;




};
