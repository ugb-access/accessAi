export const SCRIPT_READ = () => {
    return `
        toggleReadMode = () => {
            let isScriptInjected = document.getElementById("readfontscript");
            let read = localStorage.getItem("readfontlocal") === "true";

            if (isScriptInjected) {
                console.log("Removing script...");
                localStorage.setItem("readfontlocal", "false");
                isScriptInjected.remove();

                const titles = document.getElementsByClassName("textbold");
                Array.from(titles).forEach((title) => {
                        title.style.backgroundColor = "" ;
                        title.style.color = "";
                        });


                          document.body.style.fontWeight = "";
                        document.body.classList.remove("read-mode");
                        document.querySelectorAll("h1,h2,h3,h4,h5,h6,a,p,span").forEach((title) => {
                            if (title.id !== "accessibilty") {
                                title.style.fontWeight = "";
                            }
                        });

                return;
            }

            console.log("Injecting script...");
            const Readfont = document.createElement("script");
            Readfont.id = "readfontscript";
            Readfont.innerHTML = \`
            (function () {
                let read = localStorage.getItem("readfontlocal") === "true";
                const readfont = () => {
                    localStorage.setItem("readfontlocal","true");    
                    read = !read;
                    
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
                    } 
                        else {
                        document.body.style.fontWeight = "";
                        document.body.classList.remove("read-mode");
                        document.querySelectorAll("h1,h2,h3,h4,h5,h6,a,p,span").forEach((title) => {
                            title.style.fontWeight = "";
                        });
                    }
                };
                 window.Allreadmode = () =>{
                        read = !read;
                    localStorage.setItem("readfontlocal","true");
                        readfont()
                 }

                readfont()
            })();
            \`;
           localStorage.setItem("readfontlocal",read.toString());
            document.body.appendChild(Readfont);
        };

                window.addEventListener("load", () => {         
            if (localStorage.getItem("readfontlocal") === "true") {
                 document.body.style.fontWeight = "500";
                        document.body.classList.add("read-mode");
                        document.querySelectorAll("h1,h2,h3,h4,h5,h6,a,p,span").forEach((title) => {
                            if (title.id !== "accessibilty") {
                                title.style.fontWeight = "600";
                            }
                        });
                            const titles = document.getElementsByClassName("textbold");
                    Array.from(titles).forEach((title) => {
                        title.style.backgroundColor =  "#146FF8" ;
                        title.style.color =  "#ffffff" ;
                    });
            }
        });

    `;
};
