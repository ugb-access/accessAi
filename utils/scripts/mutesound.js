export const MUTE_SOUND = () => {
    return `
        const togglemutesound = () => {
            let isScriptInjected = document.getElementById("MuteSound");
            let high = localStorage.getItem("mutesoundlocal") === "true";
                    const body = document.body;

            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("mutesoundlocal", "false");
                isScriptInjected.remove();
                        const media = document.querySelectorAll('audio,video')

                         media.forEach((med) => {
                         med.muted = false
                                     })

                const titles = document.getElementsByClassName('sound');

                  Array.from(titles).forEach(title => {
                        if (high) {
                            title.style.backgroundColor = "";
                            title.style.color = '';
                        } 
                    });
                return;
            }
            console.log("Injecting script...");
            const mutesound= document.createElement('script');
            mutesound.id = "MuteSound";
            mutesound.innerHTML = \`
            (function (){
                let muteSound= localStorage.getItem("mutesoundlocal") === "true";
                localStorage.setItem("mutesoundlocal", "true");
            
           const mutemedia = () => {
        muteSound = !muteSound
        const media = document.querySelectorAll('audio,video')
        const titles = document.getElementsByClassName('sound'); // Get all elements with class 'change'
        if (muteSound) {
            media.forEach((med) => {
                med.muted = true
            })
        } else {
            media.forEach((med) => {
                med.muted = false
            })
        }
        Array.from(titles).forEach(title => {
            if (muteSound) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = 'white';
            } else {
                title.style.backgroundColor = ''; // Reset to default
                title.style.color = '';

            }
        });
    }
         mutemedia()
            })();
            \`;

            document.body.appendChild(mutesound);
        };

          window.addEventListener("load", () => {         
            if (localStorage.getItem("mutesoundlocal") === "true") {
        const media = document.querySelectorAll('audio,video')
   media.forEach((med) => {
                med.muted = true
            })
        const titles = document.getElementsByClassName('sound');
                   Array.from(titles).forEach(title => {
                        
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = '#ffffff';
                        
                    });

            }
        });
    `;
};
