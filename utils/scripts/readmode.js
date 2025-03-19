export const READ_MODE = () => {
    return `
        const togglereadmode = () => {
            let isScriptInjected = document.getElementById("ReadMoode");
            let  isEnabled = localStorage.getItem("Readmodelocal") === "true";
       

            const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, img.svg, li, ul, ol, table, th, td, blockquote, pre, code, em, strong, small, sub, sup, del, ins, mark, abbr, dfn, kbd, q, cite, var, nav, header, footer, aside, section, article, figure, figcaption, main, div, form, fieldset, legend, label, button, input, textarea, select, option, optgroup, progress, meter, output, details, summary, dialog, menu, menuitem, menuitemcheckbox, menuitemradio');
       

            const body = document.body;
           
            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("Readmodelocal", "false");
                isScriptInjected.remove();
                
           

                const titles = document.getElementsByClassName('change');
                Array.from(titles).forEach(title => {
                    title.style.backgroundColor = "";
                    title.style.color = '';
                });

              
                return;
                
            }
            console.log("Injecting script...");
            const readmode = document.createElement('script');
            readmode.id = "ReadMoode";
            readmode.innerHTML = \`
            (function (){
                let isEnabled = localStorage.getItem("Readmodelocal") === "true";
                localStorage.setItem("Readmodelocal", "true");
            
        const originalClasses = new Map();

    const readMode = () => {
        const body = document.body; // Select the body element

        const titles = document.getElementsByClassName('change');
        const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, img.svg, li, ul, ol, table, th, td, blockquote, pre, code, em, strong, small, sub, sup, del, ins, mark, abbr, dfn, kbd, q, cite, var, nav, header, footer, aside, section, article, figure, figcaption, main, div, form, fieldset, legend, label, button, input, textarea, select, option, optgroup, progress, meter, output, details, summary, dialog, menu, menuitem, menuitemcheckbox, menuitemradio, script, style, link, meta, title, base, head, body, html');

        isEnabled = !isEnabled; // Toggle state

        elements.forEach(element => {
            if (element.id !== "accessibilty") { // Skip the element with ID 'accessibility'
                if (isEnabled) {
                    // Store the original classes if not already stored
                    if (!originalClasses.has(element)) {
                        originalClasses.set(element, element.className || ''); // Use empty string if no class exists
                    }
                    element.removeAttribute('class'); // Remove all classes
                    body.style.margin = '0px auto';
                    body.style.width = '40%';
                } else {
                    // Restore the original classes
                    if (originalClasses.has(element)) {
                        element.className = originalClasses.get(element); 
                                            element.Attribute('class'); // Remove all classes

                    }
                    body.style.margin = '';
                    body.style.width = '';
                }
            }
        });

        // Apply background color to 'change' elements
        Array.from(titles).forEach(title => {
            if (isEnabled) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = 'white';
            } else {
                title.style.backgroundColor = ''; // Reset to default
                title.style.color = '';

            }
        });

        // Clear the originalClasses map when disabling read mode to avoid memory leaks
        if (!isEnabled) {
            originalClasses.clear();
        }
    };
           readMode()
            })();
            \`;

            document.body.appendChild(readmode);
        };

          window.addEventListener("load", () => {         
            if (localStorage.getItem("Readmodelocal") === "true") {
      

        const titles = document.getElementsByClassName('animation');
                   Array.from(titles).forEach(title => {
                        
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = '#ffffff';
                        
                    });

            }
        });
    `;
};
