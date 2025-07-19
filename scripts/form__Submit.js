import { form, expense } from './elements.js';

// Previne o comportamento padrão do formulário
export function handleSubmit() {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    expense.focus()
  });
}

handleSubmit()