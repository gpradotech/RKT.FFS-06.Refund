import { list } from './elements.js';

export function removeItem() {
  list.addEventListener('click', (event) => {
    const removeIcon = event.target.closest('.remove-icon');
    if (removeIcon) {
      const item = removeIcon.closest('li');
      if (item) {
        item.remove();
      }
    }
  });
}

removeItem();