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
        paragrafo: `
            Olá, esta página web foi desenvolvida por mim George Hebo, Cauã Costa e David Barros, da Escola Secundária De Santo André.
            Somos alunos do curso profissional de GPSI (Gestão e Programação de Sistemas informáticos), no 
            <a href="https://aesa.edu.pt/edu/index.php">Agrupamento de Escolas de Santo André</a>. Neste site nós temos como objetivo, 
            abordar temas relacionados a saúde, mais especificamente a sexualidade. Dentro do tema da sexualidade vamos explorar os seguintes temas: 
            sexting, sextortion e grooming. Este site tem a finalidade de ajudar os utilizadores a compreenderem os riscos associados a esses fenômenos 
            e promover comportamentos saudáveis e seguros tanto no ambiente digital quanto físico.
            <img src="https://th.bing.com/th/id/OIP.tBWZu5POmOGWvxK6dMnDcAHaF_?rs=1&pid=ImgDetMain">
        `,
        paragrafo1: `
            <strong>Aqui temos um vídeo informativo, para saber um bocado mais antes de seguir para os outros temas: </strong>
            <iframe 
            src="https://www.youtube.com/embed/JqHsP8VGufY" 
            width="560" 
            height="315" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
        `
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
        paragrafo: `
            Hello, this web page was developed by me, George Hebo, Cauã Costa, and David Barros, from Escola Secundária De Santo André.
            We are students of the professional course GPSI (Management and Programming of Computer Systems) at 
            <a href="https://aesa.edu.pt/edu/index.php">Agrupamento de Escolas de Santo André</a>. On this site, our goal is to address topics related to health, 
            specifically sexuality. Within the theme of sexuality, we will explore the following topics: sexting, sextortion, and grooming. 
            This site aims to help users understand the risks associated with these phenomena and promote healthy and safe behaviors both in digital and physical environments.
            <img src="https://th.bing.com/th/id/OIP.tBWZu5POmOGWvxK6dMnDcAHaF_?rs=1&pid=ImgDetMain">
        `,
        paragrafo1: `
            <strong>Here is an informational video, to know a bit more before moving on to the other topics: </strong>
            <iframe 
            src="https://www.youtube.com/embed/JqHsP8VGufY" 
            width="560" 
            height="315" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
        `,
        
    }
    
};

// Seleção de idioma
const idiomas = document.getElementById("idiomas");

// Quando o idioma mudar
idiomas.addEventListener("change", () => {
    const idiomaSelecionado = idiomas.value;

    // Atualize o título da página
    document.getElementById("titulo-pagina").innerText = traducoes[idiomaSelecionado].titulo_pagina;
    //document.getElementById("titulo-sexualidade").innerText = traducoes[idiomaSelecionado].titulo_sexualidade;

    // Atualize os itens de navegação
    document.getElementById("nav-pagina-inicial").innerText = traducoes[idiomaSelecionado].nav_pagina_inicial;
    document.getElementById("nav-sexualidade").innerText = traducoes[idiomaSelecionado].nav_sexualidade;
    document.getElementById("nav-sexting").innerText = traducoes[idiomaSelecionado].nav_sexting;
    document.getElementById("nav-sextortion").innerText = traducoes[idiomaSelecionado].nav_sextortion;
    document.getElementById("nav-grooming").innerText = traducoes[idiomaSelecionado].nav_grooming;
    document.getElementById("nav-apoio").innerText = traducoes[idiomaSelecionado].nav_apoio;

    // Atualize o conteúdo dos parágrafos
    document.getElementById("paragrafo").innerHTML = traducoes[idiomaSelecionado].paragrafo;
    document.getElementById("paragrafo1").innerHTML = traducoes[idiomaSelecionado].paragrafo1;

});
