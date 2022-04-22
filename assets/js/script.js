// Abrindo e fechando menu hamburger com animação
let menuHamb = document.querySelector('.menuHamburger');
let menuNavigation = document.querySelector('.menuNavigation');
// Abrindo
menuHamb.addEventListener('click', () => {
    if ( menuNavigation.classList.contains('menuOpened') ) {
        menuNavigation.classList.remove('menuOpened');
        menuNavigation.style.display = 'none';
    } else {
        menuNavigation.classList.add('menuOpened');
        menuNavigation.style.display = 'flex';
    }
})
    



