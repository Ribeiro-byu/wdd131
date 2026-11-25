
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
        if (window.innerWidth >= 900) {
            navigation.classList.remove("open");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Abrir menu");
        }
    });
}