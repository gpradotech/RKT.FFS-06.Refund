import { form, list, expense, category, amount } from "./elements.js";

export function createListItem() {
  // Cria um novo item de lista
  const expenseItem = document.createElement('li');
  expenseItem.classList.add('expense');

  // Cria o ícone do item
  const expenseIcon = document.createElement('img');
  expenseIcon.setAttribute('src', `/../img/${category.value}.svg`);
  expenseIcon.setAttribute('alt', `${category.value} icon`);

  // Cria a div de informações do item
  const expenseDescription = document.createElement('div');
  expenseDescription.classList.add('expense-info');

  // Cria o título do item
  const expenseTitle = document.createElement('strong')
  expenseTitle.textContent = expense.value;
  expenseDescription.append(expenseTitle);

  // Cria a categoria do item
  const expenseCategory = document.createElement('span');
  expenseCategory.textContent = category.options[category.selectedIndex].textContent;
  expenseDescription.append(expenseCategory);

  // Cria o valor do item
  const expenseAmount = document.createElement('span');
  expenseAmount.classList.add('expense-amount');
  expenseAmount.innerHTML = `<small>R$</small> ${amount.value.replace('R$', '')}`;

  // Cria o botão de exclusão do item
  const expenseDelete = document.createElement('img');
  expenseDelete.classList.add('remove-icon');
  expenseDelete.setAttribute('src', '/../img/remove.svg');
  expenseDelete.setAttribute('alt', 'Delete icon');

  // Adiciona os elementos ao item de despesa
  expenseItem.append(expenseIcon, expenseDescription, expenseAmount, expenseDelete);
  list.append(expenseItem);
}

form.onsubmit = () => {
  createListItem();
};