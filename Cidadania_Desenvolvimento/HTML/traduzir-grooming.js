// Objeto com as traduções
const traducoes = {
    pt: {
        titulo_pagina: "Página Inicial",
        titulo_grooming: "Grooming",
        nav_pagina_inicial: "Página Inicial",
        nav_sexualidade: "Sexualidade",
        nav_sexting: "Sexting",
        nav_sextortion: "Sextortion",
        nav_grooming: "Grooming",
        nav_apoio: "Apoio",
        paragrafo7: ` 
        Grooming é o aliciamento de menores pela internet com o intuito de se buscar benefícios sexuais.
            Normalmente, ocorre por meio de redes sociais, sites de jogos de ou de animação, por exemplo.
            Grooming pode ter consequências devastadoras para as vítimas. 
            Além do trauma emocional,as vítimas podem sofrer danos psicológicos a longo prazo como depressão, ansiedade e PTSD.
            Embora as vitimas sejas mais entre os menores de 18.
            Resumindo, a comunicação e a educação afetivo-sexual, juntamente com o apoio do ambiente mais próximo dos menores, 
            São as ferramentas mais eficazes, tanto para prevenir a violência, como para não perpetuar as suas consequências a longo prazo.
            para evitar o grooming, devemos tomar as seguintes medidas: Não fale com estranhos na internet, não partilhar informações pessoais,
            ver com quem a criança conversa e por segurança utilize aplicações para monitorar as atividades. Isto são apenas algumas medidas,
            caso algo chegue próximo ou ao extremo, as autoridades competentes devem ser acionadas.
            <img src="https://periodismohoy.com/wp-content/uploads/2019/03/Ciberacoso.jpg"><br><br>
            Vídeo explicativo sobre o grooming:
            <iframe  
            src="https://www.youtube.com/embed/b84KHZOqiqw" 
            width="560" 
            height="315" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
        `,
        titulo_video: "Aqui está um vídeo para compreender melhor."
    },
    en: {
        titulo_pagina: "Home Page",
        titulo_grooming: "Grooming",
        nav_pagina_inicial: "Home Page",
        nav_sexualidade: "Sexuality",
        nav_sexting: "Sexting",
        nav_sextortion: "Sextortion",
        nav_grooming: "Grooming",
        nav_apoio: "Support",
        paragrafo7: `
         Grooming is the online enticement of minors with the intent of seeking sexual benefits.
        It usually occurs through social media, gaming websites, or animation sites, for example.
        Grooming can have devastating consequences for the victims. 
        In addition to emotional trauma, victims can suffer long-term psychological damage such as depression, anxiety, and PTSD.
        Although victims are more commonly under 18 years old.
        In summary, communication and affective-sexual education, together with the support of the minors' close environment, 
        are the most effective tools, both to prevent violence and to avoid perpetuating its long-term consequences.
        To prevent grooming, we should take the following measures: Do not talk to strangers online, do not share personal information, 
        monitor with whom the child is talking, and for safety, use apps to track activities. These are just some measures, 
        and if something gets too close or extreme, the competent authorities should be contacted.
        <img src="https://periodismohoy.com/wp-content/uploads/2019/03/Ciberacoso.jpg"><br><br>
        Explanatory video on grooming:
        <iframe  
        src="https://www.youtube.com/embed/b84KHZOqiqw" 
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
    document.getElementById("titulo-grooming").innerText = traducoes[idiomaSelecionado].titulo_grooming;

    // Atualize os itens de navegação
    document.getElementById("nav-pagina-inicial").innerText = traducoes[idiomaSelecionado].nav_pagina_inicial;
    document.getElementById("nav-sexualidade").innerText = traducoes[idiomaSelecionado].nav_sexualidade;
    document.getElementById("nav-sexting").innerText = traducoes[idiomaSelecionado].nav_sexting;
    document.getElementById("nav-sextortion").innerText = traducoes[idiomaSelecionado].nav_sextortion;
    document.getElementById("nav-grooming").innerText = traducoes[idiomaSelecionado].nav_grooming;
    document.getElementById("nav-apoio").innerText = traducoes[idiomaSelecionado].nav_apoio;

    // Atualize o conteúdo do parágrafo
    document.getElementById("paragrafo7").innerHTML = traducoes[idiomaSelecionado].paragrafo7;
});
