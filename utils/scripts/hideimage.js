export const HIDE_IMAGE = () => {
    return `
        const togglehideimage = () => {
            let isScriptInjected = document.getElementById("HideImage");
            let hideImageState = localStorage.getItem("hideimagelocal") === "true";
                    const body = document.body;
                    
                    if (isScriptInjected) {
                            const images = document.querySelectorAll('img, Image');
  images.forEach((img) => {
            if (!img.closest("#accessibilty")) {
                    img.style.display = 'block';
               
            }
        });
                        console.log("Removing script...");
                        localStorage.setItem("hideimagelocal", "false");
                        isScriptInjected.remove();

                

                const titles = document.getElementsByClassName('image');

                  Array.from(titles).forEach(title => {
                            title.style.backgroundColor = "";
                            title.style.color = '';
                        
                    });
                return;
            }
            console.log("Injecting script...");
            const hideimage= document.createElement('script');
            hideimage.id = "HideImage";
            hideimage.innerHTML = \`
            (function (){
                let hideImageState= localStorage.getItem("hideimagelocal") === "true";
                localStorage.setItem("hideimagelocal", "true");
            
           
    const hideImage = () => {
        hideImageState = !hideImageState;
        const images = document.querySelectorAll('img, Image');
        const titles = document.getElementsByClassName('image'); // Get all elements with class 'change'
        images.forEach((img) => {
            if (!img.closest("#accessibilty")) {
                if (hideImageState) {
                    img.style.display = 'none';
                } else {
                    img.style.display = 'block';
                }
            }
        });
        Array.from(titles).forEach(title => {
            if (hideImageState) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = 'white';
            } else {
                title.style.backgroundColor = ''; // Reset to default
                title.style.color = '';

            }
        });
    };
    hideImage()
            })();
            \`;

            document.body.appendChild(hideimage);
        };

          window.addEventListener("load", () => {         
            if (localStorage.getItem("hideimagelocal") === "true") {
                    const images = document.querySelectorAll('img, Image');

    images.forEach((img) => {
            if (!img.closest("#accessibilty")) {
                    img.style.display = 'none';
              
            }
        });
        const titles = document.getElementsByClassName('image');
                   Array.from(titles).forEach(title => {
                        
                            title.style.backgroundColor = "#146FF8";
                            title.style.color = '#ffffff';
                        
                    });

            }
        });
    `;
};