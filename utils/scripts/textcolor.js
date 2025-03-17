export const TEXT_COLOR = () => {
    return `
          const changetextcolor = (newColor) => {
              let scriptId = "Textcolor";
              let storedColor = localStorage.getItem("textcolorlocal");

              let colorToApply = storedColor === newColor ? storedColor : newColor;

              console.log("Applying color:", colorToApply);

              let existingScript = document.getElementById(scriptId);
              if (existingScript) {
                  console.log('existingScript removed');
                  existingScript.remove(); 
              }

              if (!newColor || newColor === "#000") {
                  localStorage.removeItem("textcolorlocal"); 

                  const headings = document.body.querySelectorAll('p,a,span');
                  headings.forEach((heading) => {
                      heading.style.color = ""; // Reset to default
                  });

                  return; 
              }

              localStorage.setItem("textcolorlocal", colorToApply);

              const textcolor = document.createElement('script');
              textcolor.id = scriptId;
              textcolor.innerHTML = \`
                  (function () {
                      let color = '\$\{colorToApply}';

                      const changeTextColor = () => {
                          const headings = document.body.querySelectorAll('p,a,span');
                          const accessibilityElement = document.getElementById('accessibilty');

                          headings.forEach((heading) => {
                              if (accessibilityElement && accessibilityElement.contains(heading)) {
                                  return;
                              }
                              heading.style.color = color;
                          });
                      };

                      changeTextColor();
                  })();
              \`;

              document.body.appendChild(textcolor);
          };

          window.addEventListener("load", () => {
              let storedColor = localStorage.getItem("textcolorlocal");

              let existingScript = document.getElementById("Textcolor");
              if (!storedColor) {
                  if (existingScript) {
                      console.log("Removing script on load...");
                      existingScript.remove();
                  }

                  const headings = document.body.querySelectorAll('p,a,span');
                  headings.forEach((heading) => {
                      heading.style.color = ""; // Reset to default
                  });

                  return;
              }

              changetextcolor(storedColor);
          });
      `;
};
