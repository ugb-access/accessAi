export const BACKGROUND_COLOR = () => {
    return `
          const changeBackgroundColor = (newBgColor) => {
              let storedBgColor = localStorage.getItem("bgcolorlocal");
              let bgColorToApply = storedBgColor === newBgColor ? storedBgColor : newBgColor;

              console.log("Applying background color:", bgColorToApply);

              if (!newBgColor || newBgColor === "#fff") {
                  localStorage.removeItem("bgcolorlocal");
                  document.body.style.setProperty("background-color", "", "important"); // Reset background
                  return; 
              }

              localStorage.setItem("bgcolorlocal", bgColorToApply);
     



              document.body.style.setProperty("background-color", bgColorToApply, "important");
              
              const footer = document.getElementsByTagName('footer');
              if (footer.length > 0) {
                  footer[0].classList.add('important-background');
                  let styleElement = document.getElementById('dynamic-styles');
                  if (!styleElement) {
                      styleElement = document.createElement('style');
                      styleElement.id = 'dynamic-styles';
                      document.head.appendChild(styleElement);
                  }
                  styleElement.innerHTML = \`
                      .important-background {
                          background: \${bgColorToApply} !important;
                          color: white;
                          transition: background-color 0.3s ease;
                      }
                  \`;
              }
          };

          window.addEventListener("load", () => {
              let storedBgColor = localStorage.getItem("bgcolorlocal");
              if (storedBgColor) {
                  changeBackgroundColor(storedBgColor);
              }
          });
      `;
};












