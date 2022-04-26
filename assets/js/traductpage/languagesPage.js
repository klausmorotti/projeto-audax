// objeto que contém as informações das linguagens de tradução
let verifyLang = (lang) => {
    var objectInfo = {};
    if (lang == 'pt-br') {
        objectInfo = {
            optionsMenu: ['Visão Saudável', 'Lentes', 'Tecnologia', 'Inovação', 'Audax'],
            descBanner: 'As lentes do futuro serão assim. </br> As nossas ja são.',
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
            searchOptica: 'Encontre uma óptica parceira Audax',
            insertCity: 'Insira sua cidade aqui',
            btnSend: 'Enviar',
            footerOptions: 'Audax | Dúvidas | Contato | Copyright © 2022 Audax Vision'
        }
    } else if (lang == 'en') {
        objectInfo = {
            optionsMenu: ['Healthy vision', 'Lenses', 'Technology', 'Innovation', 'Audax'],
            descBanner: 'The lenses of the future will be like this. </br> Ours are already.',
            descTechnology: "We don't just design ophthalmic lenses, </br> we design unparalleled experiences",
            optionsTechnology: ['Innovation', 'Technology', 'Precision'],
            titleBenefits: ['Your eyes deserve the best', 'Superior quality', 'Look to the future'],
            descBenefits: ['Learn more about your vision', 'Learn more about our lenses', 'Learn more about our technologies'],
            titleTecInnovation: 'Technology and innovation',
            descTecInnovation: "Behind every AUDAX lens is a long way to go that you don't see. Get to know some of the latest technologies used in AUDAX lenses.",
            btnKnowMore: 'Know More',
            visionSolutions: 'Solutions for your vision.',
            contact: 'Contact:',
            news: 'Stay up to date with <span>News</span>',
            searchOptica: 'Find an Audax Optical Partner',
            insertCity: 'Enter your city here',
            btnSend: 'Send',
            footerOptions: 'Audax | Doubts | Contact | Copyright © 2022 Audax Vision'
        }
    } else if ( lang == 'esp' ) {
        objectInfo = {
            optionsMenu: ['Visión Saludable', 'Lentes', 'Tecnología', 'Innovación', 'Audax'],
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
            searchOptica: 'Encuentre un socio óptico de Audax',
            insertCity: 'Ingresa tu ciudad aquí',
            btnSend: 'Mandar',
            footerOptions: 'Audax | Dudas | Contacto | Copyright © 2022 Audax Visión'
        }
    }
    // Função que joga os dados do objeto na tela
    insertInfoPage(objectInfo);
}