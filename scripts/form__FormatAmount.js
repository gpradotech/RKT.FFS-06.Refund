import { amount } from "./elements.js";

export function formatAmount() {
  amount.addEventListener('input', (event) => {
    let value = event.target.value; // Get the input value
    value = value.replace(/\D/g, ''); // Remove non-digit characters
    if (value === "") value = "0";
    value = parseFloat(value) / 100; // Convert to float and divide by 100
    value = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }); // Format as currency
    event.target.value = value;
  });
}

formatAmount();