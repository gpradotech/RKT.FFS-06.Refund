import { counter, list } from "./elements.js";

export function updateCounter() {
  let count = list.children.length;
  counter.textContent = `${count} despesa${count > 1 ? 's' : ''}`;
}

document.onsubmit = () => {
  updateCounter();
};