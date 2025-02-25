export const SCRIPT_DARK = () => {
    return `
    const toggledarkcontrast = () =>{
        


        const darkcontrast = document.createElement("script");
        darkcontrast.id = ""
         let dark = false
    const DarkContrast = () => {
        const body = document.body
        const titles = document.getElementsByClassName('dark');
        const elements = document.querySelectorAll('p,a,button,h1,h2,h3,h4,h5,h6')
        dark = !dark
        if (dark) {
            body.style.background = '#181818'
            elements.forEach(ele => ele.style.color = '#fff')


        } else {
            body.style.background = '#ffffff';
            elements.forEach(el => el.style.color = '');


        }
        Array.from(titles).forEach(title => {
            if (dark) {
                title.style.backgroundColor = "#146FF8";
                title.style.color = '#ffffff';
            } else {
                title.style.backgroundColor = '';
                title.style.color = '';

            }
        })

    }
        }
    
    `
}
