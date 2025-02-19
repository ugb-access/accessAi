export const SCRIPT_CENTER = () => {
    return `
            const toggleTextcenter = () => {
                const body = document.body;
                let isScriptInjected = document.getElementById("textcenter");
                console.log('isScriptInjected: ', isScriptInjected);
                let center = localStorage.getItem("textCenter") === "true";
                console.log('center: ', center);

                if (isScriptInjected) {
                    console.log('Removing script...');
                    isScriptInjected.remove();
                    body.style.textAlign = "";
                    body.classList.remove("text-center");
                    document.querySelectorAll('.textcenter').forEach(title => {
                    title.style.backgroundColor = '';
                    title.style.color = '';
                    });

                    if (center) {
                        localStorage.setItem("textCenter", "false");
                    }
                    return;
                }

                console.log('Creating script...');

                const textcenter = document.createElement("script");
                textcenter.id = "textcenter";
                // Use textContent instead of innerHTML to ensure script execution
                textcenter.textContent = \`
                    (function() {                                                                                                   
                        let center = localStorage.getItem("textCenter") === "true";

                        const applyTextCenter = () => {
                            console.log('Applying text center...');
                            const titles = document.getElementsByClassName("textcenter");
                            const body = document.body;
                            console.log('body: ', body);
                            const idelement = document.getElementById("accessibility");

                            if (idelement) {
                                idelement.style.textAlign = center ? "left" : "";
                            }

                            console.log('center: ', center);
                            if (center) {
                                body.style.textAlign = "center";
                                body.classList.add("text-center");
                            } else {
                                body.style.textAlign = "";
                                body.classList.remove("text-center");
                            }

                            Array.from(titles).forEach((title) => {
                                title.style.backgroundColor = center ? "#146FF8" : "";
                                title.style.color = center ? "#ffffff" : "";
                            });
                        };

                        // Apply saved state on page load
                        applyTextCenter();
                    })();
                \`;

                // Set localStorage before appending the script
                localStorage.setItem("textCenter", "true");
                document.body.appendChild(textcenter);
                console.log('textcenter: ', textcenter);
            };
            
        // Ensure styles are applied on page load
        window.addEventListener("mousemove", () => {
            if (localStorage.getItem("textCenter") === "true") {
                console.log("Applying saved text center styles...");
                document.body.style.textAlign = "center";
                document.body.classList.add("text-center");
                document.querySelectorAll('.textcenter').forEach(title => {
                    title.style.backgroundColor = "#146FF8";
                    title.style.color = "#ffffff";
                });
            }
        });
    `;
};


// export const SCRIPT_CENTER = () => {
//     return `
//         const toggleTextcenter = () => {
//             console.log('toggleTextcenter: ');
//             const body = document.body;
//             let center = localStorage.getItem("textCenter") === "true";

//             if (center) {
//                 console.log("Removing text center styles...");
//                 body.style.textAlign = "";
//                 body.classList.remove("text-center");
//                 document.querySelectorAll('.textcenter').forEach(title => {
//                     title.style.backgroundColor = "";
//                     title.style.color = "";
//                 });
//                 localStorage.setItem("textCenter", "false");
//             } else {
//                 console.log("Applying text center styles...");
//                 body.style.textAlign = "center";
//                 body.classList.add("text-center");
//                 document.querySelectorAll('.textcenter').forEach(title => {
//                     title.style.backgroundColor = "#146FF8";
//                     title.style.color = "#ffffff";
//                 });
//                 localStorage.setItem("textCenter", "true");
//             }
//         };

//     `;
// };