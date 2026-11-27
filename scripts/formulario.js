const produtos = [
  {
    id: "fc-1888",
    nome: "capacitor de fluxo",
    classificacaomedia: 4.5
  },
  {
    id: "fc-2050",
    nome: "fios elétricos",
    classificacaomedia: 4.7
  },
  {
    id: "fs-1987",
    nome: "circuitos de tempo",
    classificacaomedia: 3.5
  },
  {
    id: "ac-2000",
    nome: "reator de baixa tensão",
    classificacaomedia: 3.9
  },
  {
    id: "jj-1969",
    nome: "equalizador de distorção",
    classificacaomedia: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const selectProduto = document.getElementById("nome-produto");

    if (selectProduto) {
        produtos.forEach(produto => {
            const option = document.createElement("option");
            option.value = produto.id;
            // Capitaliza a primeira letra para exibição limpa mantendo o dado original
            option.textContent = produto.nome.charAt(0).toUpperCase() + produto.nome.slice(1);
            selectProduto.appendChild(option);
        });
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