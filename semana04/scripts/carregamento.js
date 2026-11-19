document.addEventListener("DOMContentLoaded", () => {
  const elementoModificacao = document.getElementById("ultima-modificacao");

  if (elementoModificacao) {
    elementoModificacao.textContent = document.lastModified;
  }
});