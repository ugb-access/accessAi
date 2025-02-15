export const SCRIPT_MAGINIFIED = () => {
    return (
        `const toggleMagnifideScript = () => {
        let isScriptInjected = document.getElementById('textmagnifiedScript');

        // Convert localStorage string to boolean
        let magnified = localStorage.getItem('magnified') === 'true';

        if (isScriptInjected) {
            console.log('Removing script and cleaning up...');

            // Remove event listeners
            document.removeEventListener('mouseover', window.handleMouseOver);
            document.removeEventListener('mousemove', window.applyStyles);

            // Remove all magnified elements
            document.querySelectorAll('.magnify').forEach(el => el.remove());

            // Reset styles
            document.querySelectorAll('.textmagnidied').forEach(title => {
                title.style.backgroundColor = '';
                title.style.color = '';
            });

            // Remove script element
            isScriptInjected.remove();

            // Cleanup global references
            delete window.textmagnified;
            delete window.handleMouseOver;
            delete window.applyStyles;

            // Update local storage
            localStorage.setItem('magnified', 'false');
        } else {
            console.log('Creating script...');
            localStorage.setItem('magnified', 'true');
            const script = document.createElement("script");
            script.id = "textmagnifiedScript";
            script.innerHTML =
                (function () {
                    let magnified = localStorage.getItem('magnified') === 'true';

                    const applyStyles = () => {
                        const titles = document.getElementsByClassName('textmagnidied');
                        Array.from(titles).forEach(title => {
                            title.style.backgroundColor = magnified ? '#146FF8' : '';
                            title.style.color = magnified ? '#ffffff' : '';
                        });
                    };
                    window.applyStyles = applyStyles;

                    const handleMouseOver = (e) => {
                        if (!magnified) return;
                        let text = e.target?.innerText?.trim();
                        if (!text) return;
                        document.querySelector('.magnify')?.remove();

                        let magnifiedText = document.createElement('div');
                        magnifiedText.className = 'magnify';
                        magnifiedText.innerText = text;

                        Object.assign(magnifiedText.style, {
                            position: 'absolute',
                            background: 'grey',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: '32px',
                            color: 'white',
                            padding: '10px',
                            borderRadius: '5px',
                            pointerEvents: 'none',
                            whiteSpace: 'normal',
                            wordWrap: 'break-word',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                            left: Math.min(e.pageX + 15, window.innerWidth - 310) + 'px',
                            top: (e.pageY + 20) + 'px',
                            maxWidth: Math.min(300, window.innerWidth - e.pageX - 20) + 'px'
                        });

                        document.body.appendChild(magnifiedText);
                    };
                    window.handleMouseOver = handleMouseOver;

                    const textmagnified = () => {
                        magnified = !magnified;
                        localStorage.setItem('magnified', magnified);
                        applyStyles();
                        document.removeEventListener('mouseover', handleMouseOver);
                        if (magnified) {
                            document.addEventListener('mouseover', handleMouseOver);
                        }
                    };

                    // Initialize based on stored preference
                    document.addEventListener('mousemove', applyStyles);
                    if (magnified) {
                        document.addEventListener('mouseover', handleMouseOver);
                        applyStyles();
                    }

                    window.textmagnified = textmagnified;
                })();
            document.body.appendChild(script);
            localStorage.setItem('magnified', 'true');
        }
    }`
    )
}