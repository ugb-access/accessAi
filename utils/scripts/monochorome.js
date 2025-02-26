export const MONOCROME = () => {
    return `
        const togglemonocorome = () => {
            let isScriptInjected = document.getElementById("MonoCrome");
            let high = localStorage.getItem("monocromelocal") === "true";
                    const body = document.body;

            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("monocromelocal", "false");
                isScriptInjected.remove();
                 body.classList.remove('grayscale');

                const titles = document.getElementsByClassName('monochrom');

                  Array.from(titles).forEach(title => {
                        
                            title.style.backgroundColor = "";
                            title.style.color = '';
                         
                    });

                return;
            }

            console.log("Injecting script...");
            const monocrome = document.createElement('script');
            monocrome.id = "MonoCrome";
            monocrome.innerHTML = \`
            (function (){
                let monoChrome= localStorage.getItem("monocromelocal") === "true";
                localStorage.setItem("monocromelocal", "true");
            
             const monochrome = () => {
             const body = document.body
             const titles = document.getElementsByClassName('monochrom');
             monoChrome = !monoChrome
             if (monoChrome) {
             body.classList.add('grayscale');

             } else {
              body.classList.remove('grayscale');

        }
        Array.from(titles).forEach(title => {
            if (monoChrome) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        })
    }        
             monochrome()
            })();
            \`;

            document.body.appendChild(monocrome);
        };

          window.addEventListener("load", () => {         
            if (localStorage.getItem("monocromelocal") === "true") {
          const body = document.body;
                       body.classList.add('grayscale');

        const titles = document.getElementsByClassName('monochrom');
                   Array.from(titles).forEach(title => {
                        
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = '#ffffff';
                        
                    });

            }
        });
    `;
};
