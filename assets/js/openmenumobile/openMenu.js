// Abrindo e fechando menu hamburger com animação
let menuHamb = document.querySelector('.menuMobile');
let menuNavigation = document.querySelector('.menuNavigation');
// Abrindo
menuHamb.addEventListener('click', () => {
    if ( menuNavigation.classList.contains('menuOpened') ) {
        menuNavigation.classList.remove('menuOpened');
    } else {
        menuNavigation.classList.add('menuOpened');
    }
})


