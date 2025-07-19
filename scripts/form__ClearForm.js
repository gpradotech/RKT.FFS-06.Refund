import { expense, category, amount } from './elements.js';
import { list } from './elements.js';

// Função que limpa os campos do formulário, definindo seus valores como vazio
export function clearForm() {
  expense.value = '';
  category.value = '';
  amount.value = '';
}

// Cria um observador para monitorar mudanças na lista de itens
const observer = new MutationObserver(() => {
  clearForm(); // Sempre que houver mudança na lista, limpa o formulário
});

// Inicia a observação do elemento 'list', monitorando adição ou remoção de itens filhos
observer.observe(list, { childList: true });

// Limpa o formulário assim que o arquivo é carregado
clearForm();