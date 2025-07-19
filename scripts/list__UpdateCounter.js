import { counter, list } from "./elements.js";

export function updateCounter() {
  let count = list.children.length;
  counter.textContent = `${count} despesa${count > 1 ? 's' : ''}`;
}

// Atualiza automaticamente sempre que a lista for alterada
const observer = new MutationObserver(() => {
  updateCounter();
});

observer.observe(list, { childList: true });

// Atualiza ao carregar a página
updateCounter();