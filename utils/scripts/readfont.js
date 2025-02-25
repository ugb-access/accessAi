export const SCRIPT_READ = () => {
    return `
        window.toggleReadMode = () => {
            let isScriptInjected = document.getElementById("readfontscript");
            let read = localStorage.getItem("readfontlocal") === "true";

            if (isScriptInjected) {
                console.log("Removing script...");
                isScriptInjected.remove();
                return;
            }

            console.log("Injecting script...");
            const Readfont = document.createElement("script");
            Readfont.id = "readfontscript";
            Readfont.innerHTML = \`
            (function () {
                let read = localStorage.getItem("readfontlocal") === "true";
                
                window.readfont = () => {
                    read = !read;
                    localStorage.setItem("readfontlocal", read);
                    
                    const titles = document.getElementsByClassName("textbold");
                    Array.from(titles).forEach((title) => {
                        title.style.backgroundColor = read ? "#146FF8" : "";
                        title.style.color = read ? "#ffffff" : "";
                    });

                    if (read) {
                        document.body.style.fontWeight = "500";
                        document.body.classList.add("read-mode");
                        document.querySelectorAll("h1,h2,h3,h4,h5,h6,a,p,span").forEach((title) => {
                            if (title.id !== "accessibilty") {
                                title.style.fontWeight = "600";
                            }
                        });
                    } else {
                        document.body.style.fontWeight = "";
                        document.body.classList.remove("read-mode");
                        document.querySelectorAll("h1,h2,h3,h4,h5,h6,a,p,span").forEach((title) => {
                            title.style.fontWeight = "";
                        });
                    }
                };
            })();
            \`;

            document.body.appendChild(Readfont);
        };
    `;
};
