import { form, expense, category, amount } from './elements.js';

// Previne o comportamento padrão do formulário
export function handleSubmit() {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // expense.value = ''
    // category.value = ''
    // amount.value = ''
    
    expense.focus() 
  });
}

handleSubmit()