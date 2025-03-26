export const SAFE_PROFILE = () => {
    return `
    const saveprofile = () => {
        console.log('saveprofile: ', saveprofile);
        const saveProfile = document.createElement('script');
        saveProfile.id = "Save_Profile";
        saveProfile.innerHTML = \`
        (function () {
            let isCustomColor = localStorage.getItem('isCustomColor') === 'true';

            const saveProfileHandler = (active) => {
                const root = document.documentElement;
                if (!active) {
                    root.style.setProperty('--primary-color', '#146FF8');
                    root.classList.remove('seizure');
                    isCustomColor = false;
                } else {
                    root.style.setProperty('--primary-color', '#3d6aaf');
                    root.classList.add('seizure');
                    isCustomColor = true;
                }
                localStorage.setItem('isCustomColor', isCustomColor);
                localStorage.setItem('primaryColor', root.style.getPropertyValue('--primary-color'));
            };

            // Load saved settings on page load
            window.addEventListener('load', () => {
                const root = document.documentElement;
                const savedColor = localStorage.getItem('primaryColor');
                const savedCustomColor = localStorage.getItem('isCustomColor') === 'true';

                if (savedColor) {
                    root.style.setProperty('--primary-color', savedColor);
                }

                if (savedCustomColor) {
                    root.classList.add('seizure');
                } else {
                    root.classList.remove('seizure');
                }
            });

            // Make function accessible globally
            window.saveProfileHandler = saveProfileHandler;
        })();
        \`;

        // Append the script to the document
        document.body.appendChild(saveProfile);
    };

    saveprofile()
`};
