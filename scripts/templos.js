
// Atualiza o ano do rodapé
const currentYear = document.querySelector("#currentyear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Mostra a última modificação
const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = `Última modificação: ${new Date(document.lastModified).toLocaleString("pt-BR")}`;
}

// Controla o menu hambúrguer
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {
        const menuIsOpen = navigation.classList.toggle("open");

        menuButton.textContent = menuIsOpen ? "✕" : "☰";
        menuButton.setAttribute("aria-expanded", menuIsOpen);
        menuButton.setAttribute("aria-label", menuIsOpen ? "Fechar menu" : "Abrir menu");
    });

    // Fecha o menu ao clicar em um link
    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Abrir menu");
        });
    });

    // Fecha o menu com ESC
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navigation.classList.remove("open");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Abrir menu");
        }
    });

    // Fecha o menu quando a tela aumenta
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            navigation.classList.remove("open");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Abrir menu");
        }
    });
}

// Filtra os templos ao clicar nos links do menu
const linksFiltro = document.querySelectorAll("#navigation a[data-filtro]");
const templos = document.querySelectorAll(".grid-container figure");
const tituloPrincipal = document.querySelector("main h1");

const nomesFiltro = {
    antigo: "Templos Antigos",
    novo: "Templos Novos",
    grande: "Templos Grandes",
    pequeno: "Templos Pequenos"
};

linksFiltro.forEach((link) => {
    link.addEventListener("click", (event) => {

        event.preventDefault();

        const filtro = link.getAttribute("data-filtro");

        if (tituloPrincipal) {
            tituloPrincipal.textContent = nomesFiltro[filtro];
        }

        templos.forEach((templo) => {

            const idade = templo.getAttribute("data-idade");
            const tamanho = templo.getAttribute("data-tamanho");

            if (filtro === idade || filtro === tamanho) {
                templo.style.display = "block";
            } else {
                templo.style.display = "none";
            }

        });

    });
});
