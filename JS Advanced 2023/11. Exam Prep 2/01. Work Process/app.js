function solve() {
    const addBtn = document.getElementById('add-worker');
    addBtn.addEventListener('click', onSubmit)
    const tBody = document.getElementById('tbody');
    const spanSalary = document.getElementById('sum');
    let salaryResult = 0;

    function onSubmit(event) {
        event.preventDefault();
        let firstName = document.getElementById('fname');
        let lastName = document.getElementById('lname');
        let email = document.getElementById('email');
        let birth = document.getElementById('birth');
        let position = document.getElementById('position');
        let salary = document.getElementById('salary');

        if (firstName.value == '' || lastName.value == '' || email.value == '' || birth.value == '' || position.value == '' || salary.value == '') {
            resetInput();
            return;
        }

        salaryResult += Number(salary.value);
        spanSalary.textContent = salaryResult.toFixed(2);
        // temps for returning values to form for edit
        const tempFirstName = firstName.value;
        const tempLastName = lastName.value;
        const tempEmail = email.value;
        const tempBirthDate = birth.value;
        const tempPosition = position.value;
        const tempSalary = salary.value;

        const tr = create('tr');
        const tdFirstName = create('td', firstName.value);
        const tdLastName = create('td', lastName.value);
        const tdEmail = create('td', email.value);
        const tdBirthDate = create('td', birth.value);
        const tdPosition = create('td', position.value);
        const tdSalary = create('td', salary.value);
        const tdButtons = create('td');
        const firedBtn = create('button', 'Fired', 'fired');
        firedBtn.addEventListener('click', () => {
            salaryResult -= tempSalary;
            spanSalary.textContent = salaryResult.toFixed(2);
            tr.remove();
        });
        const editBtn = create('button', 'Edit', 'edit');
        editBtn.addEventListener('click', onEdit);
        tdButtons.appendChild(firedBtn);
        tdButtons.appendChild(editBtn);

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdBirthDate);
        tr.appendChild(tdPosition);
        tr.appendChild(tdSalary);
        tr.appendChild(tdButtons);

        tBody.appendChild(tr);
        resetInput();

        function onEdit() {
            firstName.value =  tempFirstName;
            lastName.value = tempLastName;
            email.value = tempEmail;
            birth.value = tempBirthDate;
            position.value = tempPosition;
            salary.value = tempSalary;

            salaryResult -= tempSalary;
            spanSalary.textContent = salaryResult.toFixed(2);
            tr.remove();
        }

        function resetInput() {
            firstName.value = '';
            lastName.value = '';
            email.value = '';
            birth.value = '';
            position.value = '';
            salary.value = '';
        }
    }

    function create(type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;

        if (className != undefined) {
            element.className = className;
        }

        return element;
    }

}
solve()