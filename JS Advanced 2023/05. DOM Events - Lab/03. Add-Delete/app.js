function addItem() {
    const input = document.getElementById('newItemText').value;
    const listItems = document.querySelector('ul#items');
    
    // creating list item
    const li = document.createElement('li');
    li.textContent = input;
    // creating anchor tag
    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    // addig event listener
    deleteBtn.addEventListener('click', () => li.remove());
    // adding the anchor to the list item
    li.appendChild(deleteBtn);

    // adding li item to all list items
    listItems.appendChild(li);
}