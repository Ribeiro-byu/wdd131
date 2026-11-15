// 1. Atualização do rodapé com o ano atual e a data da última modificação
document.getElementById("ano-atual").textContent = new Date().getFullYear();
document.getElementById("ultima-modificacao").textContent = `Última modificação: ${document.lastModified}`;

// 2. Variáveis estáticas de clima (Temperatura de 30 °C e vento de 5 km/h)
const temperatura = 30;
const velocidadeVento = 5;

// 3. Função de linha única para cálculo da sensação térmica
const calcularSensacaoTermica = (temp, vento) => 13.12 + (0.6215 * temp) - (11.37 * Math.pow(vento, 0.16)) + (0.3965 * temp * Math.pow(vento, 0.16));

// 4. Validação das condições e exibição do resultado na página
const elementoSensacao = document.getElementById("sensacao-termica");

if (temperatura <= 10 && velocidadeVento > 4.8) {
    const sensacao = calcularSensacaoTermica(temperatura, velocidadeVento);
    elementoSensacao.textContent = `${sensacao.toFixed(1)} °C`;
} else {
    elementoSensacao.textContent = "N/A";
}