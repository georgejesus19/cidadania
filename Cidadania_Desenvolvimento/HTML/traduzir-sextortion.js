// Objeto com as traduções
const traducoes = {
    pt: {
        titulo_pagina: "Página Inicial",
        titulo_sextortion: "Sextortion",
        nav_pagina_inicial: "Página Inicial",
        nav_sexualidade: "Sexualidade",
        nav_sexting: "Sexting",
        nav_sextortion: "Sextortion",
        nav_grooming: "Grooming",
        nav_apoio: "Apoio",
        paragrafo6: ` 
        Sextortion é um tipo de crime digital em que os criminosos obtêm ou falsificam imagens íntimas de uma pessoa e as usam para extorsão, 
            ameaçando expor o conteúdo caso suas exigências não sejam atendidas. 
            Esse crime está em crescimento devido à ampla conectividade da internet e ao uso de webcams, 
            afetando principalmente menores de idade e adultos vulneráveis.
            Desvantagens do Sextortion
            Impacto psicológico severo: Pode causar vergonha, medo, ansiedade e, em casos extremos, levar ao suicídio.
            Estudos mostraram que cerca de 28% dos casos documentados envolveram vítimas que tentaram ou cometeram suicídio.
            Subnotificação: Muitos casos não são reportados por medo de humilhação, dificultando a ação das autoridades.
            Juridição complicada: Os criminosos, vítimas e plataformas frequentemente estão em diferentes países, complicando a aplicação da lei.
            Uso de inteligência artificial: Ferramentas de IA permitem criar imagens falsas convincentes, agravando a ameaça e dificultando a detecção.
            Exploração financeira e sexual: Criminosos podem exigir dinheiro ou outras ações ilícitas, com muitos casos envolvendo menores de idade como vítimas principais.
            Soluções para Combater o Sextortion
            Educação e conscientização: Campanhas educacionais podem informar jovens e pais sobre os riscos e como se proteger online.
            Ferramentas de detecção: Empresas de tecnologia devem investir em sistemas de IA para identificar esquemas de sextortion em plataformas digitais.
            Colaboração internacional: É essencial o trabalho conjunto entre governos, organizações e plataformas para combater os crimes de maneira global.
            Legislação robusta: É necessário criar ou reforçar leis específicas contra o sextortion, garantindo punições severas.
            Apoio às vítimas: Serviços de suporte psicológico e orientação legal devem ser acessíveis às vítimas para minimizar danos e facilitar a denúncia.
            <img src="https://www.the420.in/wp-content/uploads/2021/02/sextortion-evolved.jpg"><br><br>
            De forma a elucidar melhor os leitores, aqui está um vídeo explicativo para o tema:
            <iframe  
            src="https://www.youtube.com/embed/Y7cfvoRC8Yg" 
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
        titulo_sextortion: "Sextortion",
        nav_pagina_inicial: "Home Page",
        nav_sexualidade: "Sexuality",
        nav_sexting: "Sexting",
        nav_sextortion: "Sextortion",
        nav_grooming: "Grooming",
        nav_apoio: "Support",
        paragrafo6: `
         Sextortion is a type of cybercrime where criminals obtain or forge intimate images of a person and use them for extortion, 
        threatening to expose the content if their demands are not met. 
        This crime is on the rise due to the widespread connectivity of the internet and the use of webcams, 
        primarily affecting minors and vulnerable adults.
        Disadvantages of Sextortion:
        Severe psychological impact: It can cause shame, fear, anxiety, and in extreme cases, lead to suicide.
        Studies have shown that about 28% of documented cases involved victims who attempted or committed suicide.
        Underreporting: Many cases are not reported due to fear of humiliation, making it difficult for authorities to take action.
        Complicated jurisdiction: Criminals, victims, and platforms are often in different countries, complicating law enforcement.
        Use of artificial intelligence: AI tools allow the creation of convincing fake images, worsening the threat and making detection harder.
        Financial and sexual exploitation: Criminals may demand money or other illicit actions, with many cases involving minors as the primary victims.
        Solutions to Combat Sextortion:
        Education and awareness: Educational campaigns can inform young people and parents about the risks and how to stay safe online.
        Detection tools: Tech companies should invest in AI systems to identify sextortion schemes on digital platforms.
        International collaboration: Joint efforts between governments, organizations, and platforms are essential to combat the crime globally.
        Strong legislation: Laws specific to sextortion need to be created or strengthened to ensure severe punishments.
        Victim support: Psychological support services and legal guidance must be accessible to victims to minimize harm and facilitate reporting.
        <img src="https://www.the420.in/wp-content/uploads/2021/02/sextortion-evolved.jpg"><br><br>
        To further clarify for readers, here is an explanatory video on the topic:
        <iframe  
        src="https://www.youtube.com/embed/Y7cfvoRC8Yg" 
        width="560" 
        height="315" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>
        `
    }
};

// Seleção de idioma
const idiomas = document.getElementById("idiomas");

// Quando o idioma mudar
idiomas.addEventListener("change", () => {
    const idiomaSelecionado = idiomas.value;

    // Atualize o título da página
    document.getElementById("titulo-sextortion").innerText = traducoes[idiomaSelecionado].titulo_sextortion;

    // Atualize os itens de navegação
    document.getElementById("nav-pagina-inicial").innerText = traducoes[idiomaSelecionado].nav_pagina_inicial;
    document.getElementById("nav-sexualidade").innerText = traducoes[idiomaSelecionado].nav_sexualidade;
    document.getElementById("nav-sexting").innerText = traducoes[idiomaSelecionado].nav_sexting;
    document.getElementById("nav-sextortion").innerText = traducoes[idiomaSelecionado].nav_sextortion;
    document.getElementById("nav-grooming").innerText = traducoes[idiomaSelecionado].nav_grooming;
    document.getElementById("nav-apoio").innerText = traducoes[idiomaSelecionado].nav_apoio;

    // Atualize o conteúdo do parágrafo
    document.getElementById("paragrafo6").innerHTML = traducoes[idiomaSelecionado].paragrafo6;
});
