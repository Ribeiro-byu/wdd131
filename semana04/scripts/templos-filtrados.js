const galeria = document.querySelector(".grid-container");
const tituloSecao = document.querySelector("#titulo-secao");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");
const navLinks = document.querySelectorAll("#navigation a");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        const isOpen = navigation.classList.contains("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.textContent = isOpen ? "✕" : "☰";
    });
}

function atualizarMenuAtivo(linkSelecionado) {
    navLinks.forEach((link) => link.classList.remove("active"));
    linkSelecionado.classList.add("active");

    // Fecha o menu no celular após clicar em uma opção
    if (navigation.classList.contains("open")) {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    }
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
    atualizarMenuAtivo(event.currentTarget);
    tituloSecao.textContent = "Página Inicial";
    mostrarTemplos(templos);
});

document.querySelector("#antigos").addEventListener("click", (event) => {
    event.preventDefault();
    atualizarMenuAtivo(event.currentTarget);
    tituloSecao.textContent = "Antigos";
    const filtrados = templos.filter((templo) => obterAnoConsagracao(templo.consagracao) < 1900);
    mostrarTemplos(filtrados);
});

document.querySelector("#novos").addEventListener("click", (event) => {
    event.preventDefault();
    atualizarMenuAtivo(event.currentTarget);
    tituloSecao.textContent = "Novos";
    const filtrados = templos.filter((templo) => obterAnoConsagracao(templo.consagracao) > 2000);
    mostrarTemplos(filtrados);
});

document.querySelector("#grandes").addEventListener("click", (event) => {
    event.preventDefault();
    atualizarMenuAtivo(event.currentTarget);
    tituloSecao.textContent = "Grandes";
    const filtrados = templos.filter((templo) => templo.area > 90000);
    mostrarTemplos(filtrados);
});

document.querySelector("#pequenos").addEventListener("click", (event) => {
    event.preventDefault();
    atualizarMenuAtivo(event.currentTarget);
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