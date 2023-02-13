function addItem() {
    const input = document.getElementById("newItemText").value;
    const list = document.getElementById("items");
    
    const newItem = document.createElement("li");
    newItem.textContent = input;

    list.appendChild(newItem);
}