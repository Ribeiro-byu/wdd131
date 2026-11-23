const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Curitiba Brasil",
        localizacao: "Curitiba, Paraná, Brasil",
        consagracao: "2008, 1 de junho",
        area: 27850,
        urlDaImagem: "https://assets.ldscdn.org/72/b6/72b681f306c6854de506d5d31374e79545bc7f2a/curitiba_brazil_temple.jpeg"
    },
    {
        nomeDoTemplo: "Brasília Brasil",
        localizacao: "Brasília, Distrito Federal, Brasil",
        consagracao: "2023, 17 de setembro",
        area: 25000,
        urlDaImagem: "https://cloudfront-us-east-1.images.arcpublishing.com/deseretnews/FW5U5BU43GLUG2HJJLXIOWXZAM.jpg"
    },
    {
        nomeDoTemplo: "Rio de Janeiro Brasil",
        localizacao: "Rio de Janeiro, Brasil",
        consagracao: "2022, 8 de maio",
        area: 29966,
        urlDaImagem: "https://www.churchofjesuschrist.org/imgs/babb14dad30611ecafedeeeeac1ebc39ad94142b/full/500%2C/0/default"
    }
];

const galeria = document.querySelector(".grid-container");
const tituloSecao = document.querySelector("#titulo-secao");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        const isOpen = navigation.classList.contains("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.textContent = isOpen ? "✕" : "☰";
    });
}

function obterAnoConsagracao(dataString) {
    return parseInt(dataString, 10);
}

function mostrarTemplos(listaDeTemplos) {
    galeria.innerHTML = "";

    listaDeTemplos.forEach((templo) => {
        const cartao = document.createElement("figure");

        const nome = document.createElement("h2");
        nome.textContent = templo.nomeDoTemplo;

        const imagem = document.createElement("img");
        imagem.src = templo.urlDaImagem;
        imagem.alt = templo.nomeDoTemplo;
        imagem.loading = "lazy";

        const localizacao = document.createElement("p");
        localizacao.textContent = `Localização: ${templo.localizacao}`;

        const consagracao = document.createElement("p");
        consagracao.textContent = `Consagração: ${templo.consagracao}`;

        const area = document.createElement("p");
        area.textContent = `Área: ${templo.area.toLocaleString("pt-BR")} pés quadrados`;

        cartao.appendChild(nome);
        cartao.appendChild(imagem);
        cartao.appendChild(localizacao);
        cartao.appendChild(consagracao);
        cartao.appendChild(area);

        galeria.appendChild(cartao);
    });
}

document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();
    tituloSecao.textContent = "Página Inicial";
    mostrarTemplos(templos);
});

document.querySelector("#antigos").addEventListener("click", (event) => {
    event.preventDefault();
    tituloSecao.textContent = "Antigos";
    const filtrados = templos.filter((templo) => obterAnoConsagracao(templo.consagracao) < 1900);
    mostrarTemplos(filtrados);
});

document.querySelector("#novos").addEventListener("click", (event) => {
    event.preventDefault();
    tituloSecao.textContent = "Novos";
    const filtrados = templos.filter((templo) => obterAnoConsagracao(templo.consagracao) > 2000);
    mostrarTemplos(filtrados);
});

document.querySelector("#grandes").addEventListener("click", (event) => {
    event.preventDefault();
    tituloSecao.textContent = "Grandes";
    const filtrados = templos.filter((templo) => templo.area > 90000);
    mostrarTemplos(filtrados);
});

document.querySelector("#pequenos").addEventListener("click", (event) => {
    event.preventDefault();
    tituloSecao.textContent = "Pequenos";
    const filtrados = templos.filter((templo) => templo.area < 10000);
    mostrarTemplos(filtrados);
});

const anoSpan = document.querySelector("#currentyear");
if (anoSpan) {
    anoSpan.textContent = new Date().getFullYear();
}

const ultimaModificacao = document.querySelector("#lastModified");
if (ultimaModificacao) {
    ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;
}

mostrarTemplos(templos);