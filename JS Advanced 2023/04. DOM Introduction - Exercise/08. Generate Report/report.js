function generateReport() {
    let output = document.getElementById("output");
    let checks = Array.from(document.querySelectorAll("thead tr th input"));
    let tableRows = Array.from(document.querySelectorAll("tbody tr"));

    let result = [];

    for (let i = 0; i < tableRows.length; i++) {
        const current = {};
        const rowData = Array.from(tableRows[i].querySelectorAll("td"));

        for (let j = 0; j < rowData.length; j++) {
            if (checks[j].checked) {
                current[checks[j].name] = rowData[j].textContent; 
            }

        }
        result.push(current);
    }
    output.value = JSON.stringify(result);
}