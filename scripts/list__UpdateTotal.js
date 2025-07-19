import { total, list } from "./elements.js";

export function updateTotal() {
  // Passo 1: Pegar todos os elementos que tem a classe expense-amount
  let prices = list.querySelectorAll('.expense-amount');
  
  // Passo 2: Inicializar a variável para armazenar o total
  let sum = 0;

  // Passo 3: Iterar a lista de elementos para percorrer todos os preços
  prices.forEach((span) => {
    // Passo 4: Extrair o conteúdo do span
    const text = span.textContent;
    // Passo 5: Remover o símbolo de moeda e espaços e substituir vírgulas por pontos
    const valorLimpo = text.replace('R$ ', '').trim().replace(',', '.');
    // Passo 6: Converter para número de ponto flutuante
    const number = parseFloat(valorLimpo);
    // Passo 7: Somar ao total, se for um número válido
    if (!isNaN(number)) {
      sum += number;
    }
  });

  // Passo 8: Atualizar o elemento total com o valor formatado (mesmo se lista vazia)
  total.innerHTML = `<small>R$</small> ${sum.toFixed(2).replace('.', ',')}`;

}


// Atualiza o total sempre que a lista for alterada (item adicionado ou removido)
const observer = new MutationObserver(() => {
  updateTotal();
});
observer.observe(list, { childList: true, subtree: true });

// Atualiza ao carregar a página
updateTotal();