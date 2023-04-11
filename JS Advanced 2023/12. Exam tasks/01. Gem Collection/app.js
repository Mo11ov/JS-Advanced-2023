window.addEventListener("load", solve);

function solve() {
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', onAdd);
    const previewList = document.getElementById('preview-list');
    const collectionList = document.getElementById('collection');

    function onAdd(event) {
        event.preventDefault();

        const gemName = document.getElementById('gem-name');
        const color = document.getElementById('color');
        const carats = document.getElementById('carats');
        const price = document.getElementById('price');
        const type = document.getElementById('type');

        if (gemName.value == '' || color.value == '' || carats.value == '' || price.value == '' || type.value == '') {
            return;
        }

        const tempGemName = gemName.value;
        const tempColor = color.value;
        const tempCarats = carats.value;
        const tempPrice = price.value;
        const temmType = type.value;

        const li = create('li', '', 'gem-info');
        const article = create('article');
        const h4 = create('h4', gemName.value);
        const pColor = create('p', `Color: ${color.value}`);
        const pCarats = create('p', `Carats: ${carats.value}`);
        const pPrice = create('p', `Price: ${price.value} $`);
        const pType = create('p', `Type: ${type.value}`);

        article.appendChild(h4);
        article.appendChild(pColor);
        article.appendChild(pCarats);
        article.appendChild(pPrice);
        article.appendChild(pType);

        li.appendChild(article);

        const saveBtn = create('button', 'Save to Collection', 'save-btn');
        saveBtn.addEventListener('click', onSave);
        const editBtn = create('button', 'Edit Information', 'edit-btn');
        editBtn.addEventListener('click', onEdit);
        const cancelBtn = create('button', 'Cancel', 'cancel-btn');
        cancelBtn.addEventListener('click', (event) => {
            event.preventDefault();
            li.remove();
            addBtn.disabled = false;
        })

        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(cancelBtn);

        previewList.appendChild(li);
        addBtn.disabled = true;
        resetInput();

        function onSave(event) {
            event.preventDefault();
            li.remove();

            const collectionLi = create('li');
            const p = create('p', `${tempGemName} - Color: ${tempColor}/ Carats: ${tempCarats}/ Price: ${tempPrice}$/ Type: ${temmType}`, 'collection-item');

            collectionLi.appendChild(p);
            collectionList.appendChild(collectionLi);
            addBtn.disabled = false;
        }


        function onEdit(event) {
            event.preventDefault();

            gemName.value = tempGemName;
            color.value = tempColor;
            carats.value = tempCarats;
            price.value = tempPrice;
            type.value = temmType;
            addBtn.disabled = false;
            li.remove();
        }

        function create(type, content, className) {
            const element = document.createElement(type);
            element.textContent = content;

            if (className != undefined) {
                element.className = className;
            }

            return element;
        }

        function resetInput() {
            gemName.value = '';
            color.value = '';
            carats.value = '';
            price.value = '';
            type.value = '';
        }
    }
}
