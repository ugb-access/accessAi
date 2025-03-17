export const TITLE_COLOR = () => {
    return `
          const changetitlecolor = (newColor) => {
              let scriptId = "Titlecolor";
              let storedColor = localStorage.getItem("titlecolorlocal");

              // Toggle color: If same as stored, do nothing
              let colorToApply = storedColor === newColor ? storedColor : newColor;

              console.log("Applying color:", colorToApply);

              // ✅ Remove existing script if present
              let existingScript = document.getElementById(scriptId);
              if (existingScript) {
                  existingScript.remove();
              }

              // ✅ Update LocalStorage
              if (colorToApply === "#000") {
                  localStorage.removeItem("titlecolorlocal"); // ⚠️ Remove color if it's black
              } else {
                  localStorage.setItem("titlecolorlocal", colorToApply);
              }

              // ✅ If no color, stop execution (script should be removed)
              if (!localStorage.getItem("titlecolorlocal")) {
                  return;
              }

              // Inject script to apply color
              const titlecolor = document.createElement('script');
              titlecolor.id = scriptId;
              titlecolor.innerHTML = \`
                  (function () {
                      let color = '\$\{colorToApply}';

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

          // ✅ On page load, apply last stored color
          window.addEventListener("load", () => {
              let storedColor = localStorage.getItem("titlecolorlocal");

              // ✅ Remove script if no color is stored
              if (!storedColor) {
                  let existingScript = document.getElementById("Titlecolor");
                  if (existingScript) existingScript.remove();
                  return;
              }

              // ✅ Apply color if stored
              changetitlecolor(storedColor);
          });
      `;
};
