// Objeto com as traduções
const traducoes = {
    pt: {
        titulo_pagina: "Página Inicial",
        titulo_apoio: "Apoio",
        nav_pagina_inicial: "Página Inicial",
        nav_sexualidade: "Sexualidade",
        nav_sexting: "Sexting",
        nav_sextortion: "Sextortion",
        nav_grooming: "Grooming",
        nav_apoio: "Apoio",
        paragrafo8: ` 
        Esta parte do site é inteiramente dedicada para fornecer links de instituições portuguesas que fornecem apoio as vítimas, 
            que sofrem com qualquer umas das práticas apresentadas nas seções anteriores deste site, lembra-te que não estás sozinha/o nesta luta,
            mas para que possas ser ajudado tens que permitir.<br><br>
            APAV: Especializada no apoio a vítimas de todos os tipos de crime, incluindo sexting, sextortion e grooming.
            Fornece apoio jurídico, psicológico e social, com orientações sobre como lidar com as situações e proteger a privacidade online.
            <a href="https://apav.pt/apav_v3/index.php/pt/">APAV</a>
            <img src="https://th.bing.com/th/id/R.7f2e3bd47340f7eb25970cba4a03884f?rik=KLJsLl8PkKD9dw&pid=ImgRaw&r=0"><br><br>

            Linha de Internet segura (CIG CNCS): Tem a missão de apoiar vítimas de crimes digitais, incluindo sexting, sextortion e grooming.
            A linha de internt segura também esclarece sobre como proceder em casos de crimes online, com dicas para segurança digital.
            <a href="https://www.internetsegura.pt/">Linha de internet segura</a>
            <img src="https://img.freepik.com/fotos-premium/ciberseguranca-seguranca-em-linha-protecao-de-dados-seguranca-da-internet-seguranca-da-rede-seguranca-da-informacao-protegida_980716-27127.jpg"><br><br>

            UMAR (União de Mulheres Alternativa e Resposta): Apoia vítimas de violência de género, incluindo formas de exploração online, especialmente quando afetam mulheres e jovens.
            A UMAR fornece apoio psicológico e jurídico, e encaminhamento para proteção de vítimas.
            <a href="https://feminismos.umar.pt/">UMAR (União de Mulheres Alternativa e Resposta)</a>
            <img src="https://feminista.pt/media/image/cartaz-conversa-sobre-violencia-domestica-ate-quando-28-novembro-2019-umar-biblioteca-de-penha-de-franca-lisboa/cartaz-conversa-sobre-violencia-domestica-ate-quando-28-novembro-2019-umar-biblioteca-de-penha-de-franca-lisboa_520_371.jpg"><br><br>

            SOS Criança (Instituto de Apoio à Criança): Ajuda crianças e jovens vítimas de abuso, incluindo a exploração sexual online.
            É uma linha de apoio para jovens e famílias, que fornece orientação sobre a proteção online.
            <a href="https://iacrianca.pt/">SOS Criança</a>
            <img src="https://novojornal.co.ao/storage/NJ/fotos/2020/NJ_Art/ng1062264.jpg"><br><br>

            Polícia Judiciária: Em Portugal, crimes como sextortion e grooming são tratados como crimes graves. A Polícia Judiciária tem uma unidade especializada em cibercrime.
            Ela investiga casos de exploração online, oferecendo apoio às vítimas para lidar com extorsão e identificar os criminosos.
            <a href="https://th.bing.com/th/id/OIP.IYLbwp20SmhLQbxjHreDygHaEB?rs=1&pid=ImgDetMain">Polícia Judiciária</a>
            <img src="https://1.bp.blogspot.com/-WCwS2WXOI9Y/YAL7rsl-nmI/AAAAAAAAIf4/1OxOPeUxjk4fOfLBzBKxa4D0fRch5cp2gCLcBGAsYHQ/w1200-h630-p-k-no-nu/Policia-Judiciaria%2B10.jpg">
        `
    },
    en: {
        titulo_pagina: "Home Page",
        titulo_apoio: "Support",
        nav_pagina_inicial: "Home Page",
        nav_sexualidade: "Sexuality",
        nav_sexting: "Sexting",
        nav_sextortion: "Sextortion",
        nav_grooming: "Grooming",
        nav_apoio: "Support",
        paragrafo8: `
        This section of the website is entirely dedicated to providing links to Portuguese institutions that offer support to victims 
        who suffer from any of the practices presented in the previous sections of this website. Remember, you are not alone in this fight, 
        but in order to receive help, you must allow it.<br><br>
        
        APAV: Specializes in supporting victims of all types of crime, including sexting, sextortion, and grooming. 
        It provides legal, psychological, and social support, with guidance on how to deal with situations and protect online privacy.
        <a href="https://apav.pt/apav_v3/index.php/pt/">APAV</a>
        <img src="https://th.bing.com/th/id/R.7f2e3bd47340f7eb25970cba4a03884f?rik=KLJsLl8PkKD9dw&pid=ImgRaw&r=0"><br><br>

        Safe Internet Line (CIG CNCS): It aims to support victims of digital crimes, including sexting, sextortion, and grooming.
        The safe internet line also provides guidance on how to proceed in cases of online crimes, with tips for digital safety.
        <a href="https://www.internetsegura.pt/">Safe Internet Line</a>
        <img src="https://img.freepik.com/fotos-premium/ciberseguranca-seguranca-em-linha-protecao-de-dados-seguranca-da-internet-seguranca-da-rede-seguranca-da-informacao-protegida_980716-27127.jpg"><br><br>

        UMAR (Union of Alternative Women and Response): Supports victims of gender-based violence, including forms of online exploitation, 
        especially when they affect women and young people. UMAR provides psychological and legal support, as well as referrals for victim protection.
        <a href="https://feminismos.umar.pt/">UMAR (Union of Alternative Women and Response)</a>
        <img src="https://feminista.pt/media/image/cartaz-conversa-sobre-violencia-domestica-ate-quando-28-novembro-2019-umar-biblioteca-de-penha-de-franca-lisboa/cartaz-conversa-sobre-violencia-domestica-ate-quando-28-novembro-2019-umar-biblioteca-de-penha-de-franca-lisboa_520_371.jpg"><br><br>

        SOS Criança (Institute for Child Support): Helps children and young people who are victims of abuse, including online sexual exploitation.
        It is a support line for young people and families, providing guidance on online protection.
        <a href="https://iacrianca.pt/">SOS Criança</a>
        <img src="https://novojornal.co.ao/storage/NJ/fotos/2020/NJ_Art/ng1062264.jpg"><br><br>

        Polícia Judiciária: In Portugal, crimes such as sextortion and grooming are treated as serious crimes. The Polícia Judiciária has a specialized cybercrime unit.
        It investigates online exploitation cases, offering support to victims to deal with extortion and identify criminals.
        <a href="https://th.bing.com/th/id/OIP.IYLbwp20SmhLQbxjHreDygHaEB?rs=1&pid=ImgDetMain">Polícia Judiciária</a>
        <img src="https://1.bp.blogspot.com/-WCwS2WXOI9Y/YAL7rsl-nmI/AAAAAAAAIf4/1OxOPeUxjk4fOfLBzBKxa4D0fRch5cp2gCLcBGAsYHQ/w1200-h630-p-k-no-nu/Policia-Judiciaria%2B10.jpg">
        `
    }
};

// Seleção de idioma
const idiomas = document.getElementById("idiomas");

// Quando o idioma mudar
idiomas.addEventListener("change", () => {
    const idiomaSelecionado = idiomas.value;

    // Atualize o título da página
    document.getElementById("titulo-apoio").innerText = traducoes[idiomaSelecionado].titulo_apoio;

    // Atualize os itens de navegação
    document.getElementById("nav-pagina-inicial").innerText = traducoes[idiomaSelecionado].nav_pagina_inicial;
    document.getElementById("nav-sexualidade").innerText = traducoes[idiomaSelecionado].nav_sexualidade;
    document.getElementById("nav-sexting").innerText = traducoes[idiomaSelecionado].nav_sexting;
    document.getElementById("nav-sextortion").innerText = traducoes[idiomaSelecionado].nav_sextortion;
    document.getElementById("nav-grooming").innerText = traducoes[idiomaSelecionado].nav_grooming;
    document.getElementById("nav-apoio").innerText = traducoes[idiomaSelecionado].nav_apoio;

    // Atualize o conteúdo do parágrafo
    document.getElementById("paragrafo8").innerHTML = traducoes[idiomaSelecionado].paragrafo8;
});