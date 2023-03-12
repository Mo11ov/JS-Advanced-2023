function deleteByEmail() {
    const tables = document.querySelectorAll('tbody tr');
    const input = document.querySelector('input[name="email"]').value;
    let isDeleted = "Not found.";

    for(const row of tables){
        const columns = row.children;
        if (columns[1].textContent === input) {
            row.remove();
            isDeleted = "Deleted.";
        }
    }

    document.getElementById('result').textContent = isDeleted;
}