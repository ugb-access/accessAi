export const TITLE_COLOR = () => {
    return `
          const changetitlecolor = (newColor) => {
              let scriptId = "Titlecolor";
              let storedColor = localStorage.getItem("titlecolorlocal");

              let colorToApply = storedColor === newColor ? storedColor : newColor;

              console.log("Applying color:", colorToApply);

              let existingScript = document.getElementById(scriptId);
              if (existingScript) {
                  console.log('existingScript removed');
                  existingScript.remove(); 
              }

              if (!newColor || newColor === "#000") {
                  localStorage.removeItem("titlecolorlocal"); 

                  const headings = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, button');
                  headings.forEach((heading) => {
                      heading.style.color = ""; // Reset to default
                  });

                  return; 
              }

              localStorage.setItem("titlecolorlocal", colorToApply);

              const titlecolor = document.createElement('script');
              titlecolor.id = scriptId;
              titlecolor.innerHTML = \`
                  (function () {
                      let color = '\${colorToApply}';

                      const changeTitleColor = () => {
                          const headings = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, button');
                          const accessibilityElement = document.getElementById('accessibilty');

                          headings.forEach((heading) => {
                              if (accessibilityElement && accessibilityElement.contains(heading)) {
                                  return;
                              }
                              heading.style.color = color;
                          });
                      };

                      changeTitleColor();
                  })();
              \`;

              document.body.appendChild(titlecolor);
          };

          window.addEventListener("load", () => {
              let storedColor = localStorage.getItem("titlecolorlocal");

              let existingScript = document.getElementById("Titlecolor");
              if (!storedColor) {
                  if (existingScript) {
                      console.log("Removing script on load...");
                      existingScript.remove();
                  }

                  const headings = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, button');
                  headings.forEach((heading) => {
                      heading.style.color = ""; // Reset to default
                  });

                  return;
              }

              changetitlecolor(storedColor);
          });
      `;
};
