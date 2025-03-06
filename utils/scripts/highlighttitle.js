export const HIGHLIGHT_TITLE = () => {
    return `
        const togglehighlighttitle = () => {
            let isScriptInjected = document.getElementById("textcenter");
            let center = localStorage.getItem("highlighttitlelocal") === "true";
            
            if (isScriptInjected) {
                console.log("Removing script...");
                isScriptInjected.remove();
                localStorage.setItem("highlighttitlelocal", "false");
                const titles = document.getElementsByClassName('highlighttitle')
                const title = document.querySelectorAll('h1,h2,h3,h4,h5,h6')

                   title.forEach((title) => {
                            title.style.border = '';
                             title.style.padding = '';
                           })

              Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "";
                    title.style.color = "";
                });
               
                return;
            }
            console.log("Injecting script...");
            const highlighttitle= document.createElement("script");
            highlighttitle.id = "textcenter";
            highlighttitle.innerHTML = \`
                (function() {
                    let active = localStorage.getItem("highlighttitlelocal") === "true";
                        const highlightAllTitles = (active) => {
                          const title = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
                          const titles = document.getElementsByClassName('highlighttitle')

                         if (!active) {
                          title.forEach((title) => {
                            title.style.border = '';
                             title.style.padding = '';
                           })
                          } else {
                           title.forEach((title) => {
                            title.style.border = '2px solid #146FF8';
                            title.style.padding = '5px';
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
                          highlightAllTitles(active)
             })();
            \`;

            localStorage.setItem("highlighttitlelocal", "true");
            document.body.appendChild(highlighttitle);
        };

        window.addEventListener("load", () => {
            if (localStorage.getItem("highlighttitlelocal") === "true") {
             const title = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
             const titles = document.getElementsByClassName('highlighttitle')

         title.forEach((title) => {
                            title.style.border = '2px solid #146FF8';
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

