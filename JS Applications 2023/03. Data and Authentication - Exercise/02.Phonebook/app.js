function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', onCreate);
}

const url = 'http://localhost:3030/jsonstore/phonebook';
const ul = document.getElementById('phonebook');

async function onLoad() {
    ul.replaceChildren();
    try {
        const response = await fetch(url);
        const data = await response.json();

        Object.values(data).forEach(x => {
            const li = Object.assign(document.createElement('li'), {textContent: `${x.person}: ${x.phone}`});
            const btn = Object.assign(document.createElement('button'), {textContent: 'Delete'}, {id: x._id});
            btn.addEventListener('click', onDelete);
            li.appendChild(btn);
            ul.appendChild(li);
        });

    } catch (error) {
        return alert(error);
    }
}

async function onDelete(event) {
    try {
        const response = await fetch(`${url}/${event.target.id}`, { 
            method: 'DELETE'
        }) 

    } catch (error) {
        return alert(error);
    }
}

async function onCreate() {
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
            },
            body: JSON.stringify({
                person: personInput.value,
                phone: phoneInput.value,
            })
        });
        
    } catch (error) {
        return alert(error);
    }

    personInput.value = '';
    phoneInput.value = '';

    onLoad();
}

attachEvents();