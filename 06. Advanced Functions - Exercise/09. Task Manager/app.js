function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const dueDate = document.getElementById('date');
    const addBtn = document.getElementById('add');
    
    addBtn.addEventListener('click', addTask)
    
    const [_, openSection, inProgress, complete] = Array.from(document.querySelectorAll('div section'))
        .map(e => e.children[1]);
        
    function addTask(event) {
        // preventing constant reload on click add button
        event.preventDefault();

        if (task.value == '' || description.value == '' || dueDate == '') {
            return;
        }

        const article = document.createElement('article');
        
        article.appendChild(create('h3', task.value));
        article.appendChild(create('p', `Description: ${description.value}`));
        article.appendChild(create('p', `Due Date: ${dueDate.value}`));
        
        const divBtn = create('div', '', 'flex')
        const startBtn = create('button', 'Start', 'green');
        const deleteBtn = create('button', 'Delete', 'red');
        const finishBtn = create('button', 'Finish', 'orange');

        divBtn.appendChild(startBtn);
        divBtn.appendChild(deleteBtn);

        article.appendChild(divBtn);
        openSection.appendChild(article);

        // resets values from input fileds
        task.value = '';
        description.value = '';
        dueDate.value = '';

        // setting event listeners to buttons
        deleteBtn.addEventListener('click', onDelete);
        startBtn.addEventListener('click', onStart);
        finishBtn.addEventListener('click', onFinish);

        // inner functions so individual articles have own functions and state
        function onDelete() {
            article.remove();
        }

        function onStart() {
            startBtn.remove();
            divBtn.appendChild(finishBtn);
            inProgress.appendChild(article);
        }

        function onFinish() {
            divBtn.remove();
            complete.appendChild(article);
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