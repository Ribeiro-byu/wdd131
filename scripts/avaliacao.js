document.addEventListener("DOMContentLoaded", () => {
    const contadorElemento = document.getElementById("contador-avaliacoes");
    const chaveStorage = "totalAvaliacoesEnviadas";

    // Recupera o valor atual do localStorage ou inicia em 0
    let totalAvaliacoes = Number(localStorage.getItem(chaveStorage)) || 0;

    // Incrementa 1 a cada carregamento da página de confirmação
    totalAvaliacoes += 1;

    // Salva o novo total no localStorage
    localStorage.setItem(chaveStorage, totalAvaliacoes);

    // Exibe na tela
    if (contadorElemento) {
        contadorElemento.textContent = totalAvaliacoes;
    }

    // Atualiza datas no rodapé
    const spanAno = document.getElementById("ano-atual");
    const spanModificacao = document.getElementById("ultima-modificacao");

    if (spanAno) {
        spanAno.textContent = new Date().getFullYear();
    }
    if (spanModificacao) {
        spanModificacao.textContent = document.lastModified;
    }
});