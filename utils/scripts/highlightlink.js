export const HIGHLIGHT_LINK = () => {
    return `
        const togglehighlightlink = () => {
            let isScriptInjected = document.getElementById("HighlightLink");
            let center = localStorage.getItem("highlightlinklocal") === "true";
            
            if (isScriptInjected) {
                console.log("Removing script...");
                isScriptInjected.remove();
                localStorage.setItem("highlightlinklocal", "false");
                const titles = document.getElementsByClassName('highlightlink')
                const title = document.querySelectorAll('a')

                   title.forEach((title) => {
                            title.style.border = '';
                             
                           })

              Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "";
                    title.style.color = "";
                });
               
                return;
            }
            console.log("Injecting script...");
            const highlightlink= document.createElement("script");
            highlightlink.id = "HighlightLink";
            highlightlink.innerHTML = \`
                (function() {
                    let active = localStorage.getItem("highlightlinklocal") === "true";
                      const highlightAllLink = (active) => {

    const title = document.querySelectorAll('a')
    const titles = document.getElementsByClassName('highlightlink')

    if (!active) {
        title.forEach((title) => {
            title.style.border = ''
        })
    } else {
        title.forEach((title) => {
            title.style.border = '2px solid #ff9a68';
        })
    }
    Array.from(titles).forEach((title) => {
        if (active) {
            title.style.backgroundColor = "#146FF8";
            title.style.color = '#ffffff';
        } else {
            title.style.backgroundColor = '';
            title.style.color = '';
        }
    })
}
    highlightAllLink(active)
             })();
            \`;

            localStorage.setItem("highlightlinklocal", "true");
            document.body.appendChild(highlightlink);
        };

        window.addEventListener("load", () => {
            if (localStorage.getItem("highlightlinklocal") === "true") {
             const title = document.querySelectorAll('a')
             const titles = document.getElementsByClassName('highlightlink')

         title.forEach((title) => {
                            title.style.border = '2px solid #ff9a68';
                            title.style.padding = '5px';
                            })
           
                
                    Array.from(titles).forEach(title => {
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = '#ffffff';
                        
                    });

             
            }
        });
    `;
};

