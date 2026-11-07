// 1. Menu Hambúrguer Responsivo
const mainNav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  hambutton.classList.toggle('open');
});

// 2. Ano Atual Dinâmico no Rodapé
const currentYearSpan = document.querySelector('#currentyear');
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// 3. Data da Última Modificação Dinâmica no Rodapé
const lastModifiedParagraph = document.querySelector('#lastModified');
lastModifiedParagraph.textContent = `Última Modificação: ${document.lastModified}`;