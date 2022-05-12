// Evento de clique para reconhecer o idioma selecionado e chamar função que traduz
let langs = document.querySelectorAll('.languages img');
langs.forEach((item) => {
    item.addEventListener('click', () => {
        let lang = item.getAttribute('data-language');
        // Chamando a função que vai definir qual o conteudo de acordo com a linguagem
        verifyLang(lang);
    })
})

// Função que joga as informações no idioma selecionado na tela
let insertInfoPage = (objectInfo) => {
    // HEADER
    // Menu
    let itemsMenu = document.querySelectorAll('.menuNavigation a');
    for( let i in itemsMenu ) {
        itemsMenu[i].innerHTML = objectInfo.optionsMenu[i];
        itemsMenu[i].title = objectInfo.optionsMenu[i];
    }

    // MAIN
    // Banner central
    document.querySelector('.bannerApresentation h1').innerHTML = objectInfo.descBanner;

    // Tecnologias
    document.querySelector('.contentInovation h2').innerHTML = objectInfo.descTechnology;
    let optionsTechnology = document.querySelectorAll('.inovation h2');
    for( let i in optionsTechnology ) {
        optionsTechnology[i].innerHTML = objectInfo.optionsTechnology[i];
    }

    // Titulo dos Beneficios
    let titleBenefits = document.querySelectorAll('.benefits figcaption');
    for( let i in titleBenefits ) {
        titleBenefits[i].innerHTML = objectInfo.titleBenefits[i];
    }

    // Descrição dos beneficios
    let descBenefits = document.querySelectorAll('.benefits .knowMore p');
    for( let i in descBenefits ) {
        descBenefits[i].innerHTML = objectInfo.descBenefits[i];
        descBenefits[i].title = objectInfo.descBenefits[i];
    }

    // Tecnologia e inovação
    document.querySelector('.technology h1').innerHTML = objectInfo.titleTecInnovation;
    document.querySelector('.technology p').innerHTML = objectInfo.descTecInnovation;

    // Soluções para sua visão
    document.querySelector('.visionSolutions h1').innerHTML = objectInfo.visionSolutions

    // Contato
    document.querySelector('address p').innerHTML = objectInfo.contact;
    document.querySelector('.contactUs .areaForm p').innerHTML = objectInfo.news;
    document.querySelector('.contactUs form input[type=submit]').setAttribute('value', objectInfo.btnNews);

    // Buscar cidade
    document.querySelector('.searchCity h2').innerHTML = objectInfo.searchOptica;
    document.querySelector('.searchCity input[type=text]').setAttribute('placeholder', objectInfo.insertCity);
    document.querySelector('.searchCity input[type=submit]').setAttribute('value', objectInfo.btnSend);

    // FOOTER
    // Details
    document.querySelector('footer .details').innerHTML = objectInfo.footerOptions;

    // botões saiba mais
    document.querySelector('.visionSolutions a').innerHTML = objectInfo.btnKnowMore;
    document.querySelector('.visionSolutions a').setAttribute('title', objectInfo.btnKnowMore);
    document.querySelector('.technology a').innerHTML = objectInfo.btnKnowMore;
    document.querySelector('.technology a').setAttribute('title', objectInfo.btnKnowMore);

    // botões de redes sociais
    let socials = document.querySelectorAll('.socials > div a');
    for( let i in socials ) {
        socials[i].title = objectInfo.goToSocial[i];
    }
}