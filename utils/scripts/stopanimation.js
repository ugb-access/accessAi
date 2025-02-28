export const STOP_ANIMATION = () => {
    return `
        const togglestopanimation = () => {
            let isScriptInjected = document.getElementById("Animation");
            let  animations = localStorage.getItem("animationlocal") === "true";
                    const body = document.body;

            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("animationlocal", "false");
                isScriptInjected.remove();
            body.classList.remove('stop-animations')


                const titles = document.getElementsByClassName('animation');

                  Array.from(titles).forEach(title => {
                        if (animations) {
                            title.style.backgroundColor = "";
                            title.style.color = '';
                        } 
                    });
                return;
            }
            console.log("Injecting script...");
            const stopanimation = document.createElement('script');
            stopanimation.id = "Animation";
            stopanimation.innerHTML = \`
            (function (){
                let animations= localStorage.getItem("animationlocal") === "true";
                localStorage.setItem("animationlocal", "true");
            
    const Animation = () => {
        animations = !animations;
        const titles = document.getElementsByClassName('animation');

        const body = document.body
        if (animations) {
            body.classList.add('stop-animations')
        } else {
            body.classList.remove('stop-animations')

        }
        Array.from(titles).forEach(title => {
            if (animations) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = 'white';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        });
    }
        Animation()
            })();
            \`;

            document.body.appendChild(stopanimation);
        };

          window.addEventListener("load", () => {         
            if (localStorage.getItem("animationlocal") === "true") {
                    const body = document.body

              body.classList.add('stop-animations')

        const titles = document.getElementsByClassName('animation');
                   Array.from(titles).forEach(title => {
                        
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = '#ffffff';
                        
                    });

            }
        });
    `;
};
