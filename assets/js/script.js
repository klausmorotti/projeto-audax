// Cancelando evento dos links e formularios
// links 
let links = document.querySelectorAll('form, a:not(footer .socials a)');
links.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
    })
})
// formularios
let forms = document.querySelectorAll('form');
links.forEach((item) => {
    item.addEventListener('submit', (event) => {
        event.preventDefault();
    })
})
// Scroll suave para o inicio da tela ao clicar nas logos audax
let image = document.querySelector('footer .logoAudax img');

image.addEventListener('click', () => {
    let top = document.querySelector('header').scrollTop;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    })
})
