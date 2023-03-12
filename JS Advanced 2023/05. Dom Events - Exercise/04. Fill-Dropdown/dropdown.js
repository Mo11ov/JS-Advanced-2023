function addItem() {
    const dropdownMenu = document.getElementById('menu');
    let text = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.textContent = text.value;
    option.value = itemValue.value;

    dropdownMenu.appendChild(option);
    text.value = '';
    itemValue.value = '';
}