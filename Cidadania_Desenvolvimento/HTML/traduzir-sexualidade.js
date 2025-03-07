// Objeto com as traduções
const traducoes = {
    pt: {
        titulo_pagina: "Página Inicial",
        titulo_sexualidade: "Sexualidade",
        nav_pagina_inicial: "Página Inicial",
        nav_sexualidade: "Sexualidade",
        nav_sexting: "Sexting",
        nav_sextortion: "Sextortion",
        nav_grooming: "Grooming",
        nav_apoio: "Apoio",
        paragrafo2: `A sexualidade é um aspecto fundamental da vida humana e engloba diversas dimensões, como o desejo, a atração,
            o prazer e a intimidade. A sexualidade está presente desde o nascimento e se desenvolve ao longo da vida e é
            influênciado por fatores biológicos, psicológicos, sociais e culturais. Os aspectos naturais da sexualidade humana e
            os riscos amplificados pela tecnologia e a vulnerabilidade, principalmente entre os jovens pode fazer com que práticas o 
            <strong>sexting, sextortion e grooming</strong> , ocorram com uma maior frequência e prejudiquem todos os envolvidos.
            <img src="https://www.blogs.unicamp.br/socialmente/wp-content/uploads/sites/238/2016/03/59_teaser_sexualidade.jpg">
            Para prevenir problemas com sexting não consensual, sextortion e grooming exige educação sexual e digital para ensinar
            sobre privacidade, consentimento e riscos online. Pais e/ou cuidadores devem estar atentos, e prestar sempre atenção as atividades online das crianças,
            acima de tudo é fundamental promover o uso consciente da tecnologia, e sempre utilizar ferramentas de privacidade online e ferramentas de segurança.<br><br>
            Para ajudar a compreender melhor como devemos navegar online de forma a evitar algum tipo de assédio e zelar pelo nosso bem estar e pelo bem estar do próximo,
            aqui está um vídeo para compreender melhor.
           <iframe 
            src="https://www.youtube.com/embed/OEiNddqHfEM" 
            width="560" 
            height="315" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe> `
    },
    en: {
        titulo_pagina: "Home Page",
        titulo_sexualidade: "Sexuality",
        nav_pagina_inicial: "Home Page",
        nav_sexualidade: "Sexuality",
        nav_sexting: "Sexting",
        nav_sextortion: "Sextortion",
        nav_grooming: "Grooming",
        nav_apoio: "Support",
        paragrafo2: `Sexuality is a fundamental aspect of human life and encompasses various dimensions, such as desire, attraction,
            pleasure, and intimacy. Sexuality is present from birth and develops throughout life, being influenced by biological, psychological, social, and cultural factors.
            The natural aspects of human sexuality and the amplified risks due to technology and vulnerability, especially among young people, can lead to practices such as 
            <strong>sexting, sextortion, and grooming</strong> occurring more frequently and harming everyone involved.
            <img src="https://www.blogs.unicamp.br/socialmente/wp-content/uploads/sites/238/2016/03/59_teaser_sexualidade.jpg">
            To prevent problems with non-consensual sexting, sextortion, and grooming, sexual and digital education is required to teach about privacy, consent, and online risks.
            Parents and/or caregivers must remain attentive and always monitor children's online activities. Above all, it is essential to promote the conscious use of technology and always use online privacy and security tools.<br><br>
            To help better understand how we should navigate online to avoid any type of harassment and ensure our well-being as well as the well-being of others,
            here is a video to help you understand better.
            <iframe 
            src="https://www.youtube.com/embed/OEiNddqHfEM" 
            width="560" 
            height="315" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>`
    }
};

// Seleção de idioma
const idiomas = document.getElementById("idiomas");

// Quando o idioma mudar
idiomas.addEventListener("change", () => {
    const idiomaSelecionado = idiomas.value;

    // Atualize o título da página
    document.getElementById("titulo-sexualidade").innerText = traducoes[idiomaSelecionado].titulo_sexualidade;

    // Atualize os itens de navegação
    document.getElementById("nav-pagina-inicial").innerText = traducoes[idiomaSelecionado].nav_pagina_inicial;
    document.getElementById("nav-sexualidade").innerText = traducoes[idiomaSelecionado].nav_sexualidade;
    document.getElementById("nav-sexting").innerText = traducoes[idiomaSelecionado].nav_sexting;
    document.getElementById("nav-sextortion").innerText = traducoes[idiomaSelecionado].nav_sextortion;
    document.getElementById("nav-grooming").innerText = traducoes[idiomaSelecionado].nav_grooming;
    document.getElementById("nav-apoio").innerText = traducoes[idiomaSelecionado].nav_apoio;

    // Atualize o conteúdo do parágrafo
    document.getElementById("paragrafo2").innerHTML = traducoes[idiomaSelecionado].paragrafo2;
    
});
