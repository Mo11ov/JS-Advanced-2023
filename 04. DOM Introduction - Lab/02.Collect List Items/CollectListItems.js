function extractText() {
    const list = document.getElementById("items");
    const items = Array.from(list.children);

    const result = items.map(li => li.textContent).join("\n");
    const textArea  = document.getElementById("result");
    
    textArea.value = result;
}