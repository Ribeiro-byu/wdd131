// Obter o ano atual para os direitos autorais
const anoAtualSpan = document.querySelector("#anoatual");
const anoAtual = new Date().getFullYear();
if (anoAtualSpan) {
    anoAtualSpan.textContent = anoAtual;
}

// Obter a data da última modificação do documento
const ultimaModificacaoP = document.querySelector("#ultimaModificacao");
if (ultimaModificacaoP) {
    ultimaModificacaoP.textContent = `Last Modification: ${document.lastModified}`;
}