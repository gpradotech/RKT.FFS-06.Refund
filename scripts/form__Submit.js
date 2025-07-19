import { form, expense, category, amount } from './elements.js';
import { updateCounter } from './list__UpdateCounter.js';

// Previne o comportamento padrão do formulário
export function handleSubmit() {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // expense.value = ''
    // category.value = ''
    // amount.value = ''
    
    updateCounter()
    expense.focus() 
  });
}

handleSubmit()