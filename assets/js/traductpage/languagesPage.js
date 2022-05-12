// objeto que contém as informações das linguagens de tradução
let verifyLang = (lang) => {
    var objectInfo = {};
    if (lang == 'pt-br') {
        objectInfo = {
            optionsMenu: ['Visão Saudável', 'Lentes', 'Tecnologia', 'Inovação', 'Sobre nós'],
            descBanner: 'As lentes do futuro serão assim. </br> As nossas já são.',
            descTechnology: 'Não projetamos apenas lentes oftálmicas, </br> projetamos experiências incomparáveis',
            optionsTechnology: ['Inovação', 'Tecnologia', 'Precisão'],
            titleBenefits: ['Seus olhos merecem o melhor', 'Qualidade superior', 'Olhe para o futuro'],
            descBenefits: ['Saiba mais sobre sua visão', 'Saiba mais sobre nossas lentes', 'Saiba mais sobre nossas tecnologias'],
            titleTecInnovation: 'Tecnologia e inovação',
            descTecInnovation: 'Por trás de cada lente AUDAX existe um longo caminho que você não vê. Conheça um pouco das tecnologias de última geração utilizada nas lentes AUDAX.',
            btnKnowMore: 'Saiba Mais',
            visionSolutions: 'Soluções para sua visão.',
            contact: 'Contato:',
            news: 'Fique por dentro das <span>Novidades</span>',
            btnNews: 'Enviar',
            searchOptica: 'Encontre uma óptica parceira Audax',
            insertCity: 'Insira sua cidade aqui',
            btnSend: 'Encontrar uma óptica',
            footerOptions: 'Audax | Dúvidas | Contato | Copyright © 2022 Audax Vision',
            goToSocial:['Ir para o Facebook', 'Ir para o instagram', 'Ir para o Youtube', 'Ir para o LinkedIn']
        }
    } else if (lang == 'en') {
        objectInfo = {
            optionsMenu: ['Healthy vision', 'Lenses', 'Technology', 'Innovation', 'About us'],
            descBanner: 'The lenses of the future will be like this. </br> Ours already are.',
            descTechnology: "We don't just design ophthalmic lenses, </br> we design unparalleled experiences",
            optionsTechnology: ['Innovation', 'Technology', 'Precision'],
            titleBenefits: ['Your eyes deserve the best', 'Superior quality', 'Look to the future'],
            descBenefits: ['Learn more about your vision', 'Learn more about our lenses', 'Learn more about our technologies'],
            titleTecInnovation: 'Technology and innovation',
            descTecInnovation: "Behind every AUDAX Lens there is so much you can´t see. Learn a little about the newest generation technology used on the creation of an AUDAX lens.",
            btnKnowMore: 'Know More',
            visionSolutions: 'Solutions for your vision.',
            contact: 'Contact:',
            news: 'Stay up to date with our <span>News</span>',
            btnNews: 'Send',
            searchOptica: 'Find an Audax Optical Partner',
            insertCity: 'Enter your city here',
            btnSend: 'Find an optician',
            footerOptions: 'Audax | Doubts | Contact | Copyright © 2022 Audax Vision',
            goToSocial:['Go to Facebook', 'Go to instagram', 'Go to Youtube', 'Go to LinkedIn']
        }
    } else if ( lang == 'esp' ) {
        objectInfo = {
            optionsMenu: ['Visión Saludable', 'Lentes', 'Tecnología', 'Innovación', 'Sobre nosotros'],
            descBanner: 'Las lentes del futuro serán así. </br> Los nuestros ya lo son.',
            descTechnology: 'No solo diseñamos lentes oftálmicos, </br> diseñamos experiencias inigualables',
            optionsTechnology: ['Innovación', 'Tecnología', 'Precisión'],
            titleBenefits: ['Tus ojos se merecen lo mejor', 'Calidad superior', 'Mira al futuro'],
            descBenefits: ['Aprende más sobre tu visión', 'Aprende más sobre nuestras lentes', 'Aprende más sobre nuestras tecnologías'],
            titleTecInnovation: 'Tecnología e innovación',
            descTecInnovation: 'Detrás de cada lente AUDAX hay un largo camino por recorrer que no ves. Conozca algunas de las últimas tecnologías utilizadas en lentes AUDAX.',
            btnKnowMore: 'Sepa mas',
            visionSolutions: 'Soluciones para tu visión.',
            contact: 'Contacto:',
            news: 'Manténgase actualizado con <span>Noticias</span>',
            btnNews: 'Mandar',
            searchOptica: 'Encuentre un socio óptico de Audax',
            insertCity: 'Ingresa tu ciudad aquí',
            btnSend: 'Encontrar un óptico',
            footerOptions: 'Audax | Dudas | Contacto | Copyright © 2022 Audax Visión',
            goToSocial:['Ir a Facebook', 'Ir a instagram', 'Ir a Youtube', 'Ir a LinkedIn']
        }
    }
    // Função que joga os dados do objeto na tela
    insertInfoPage(objectInfo);
}