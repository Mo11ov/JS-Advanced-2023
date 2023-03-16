function attachEvents() {
    document.getElementById('submit').addEventListener('click', onSend);
    document.getElementById('refresh').addEventListener('click', onRefresh);
}

const url = 'http://localhost:3030/jsonstore/messenger';
const textArea = document.getElementById('messages');
const inputName = document.querySelector('[name="author"]');
const inputContent = document.querySelector('[name="content"]');

async function onSend() {
    const name = inputName.value;
    const content = inputContent.value;

    try {
        const respones = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
            },
            body: JSON.stringify({
                author: name,
                content: content,
            })
        });

    } catch (error) {
        return alert(error);
    }
}

async function onRefresh() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const result = [];
        Object.values(data).forEach(x => {
            result.push(`${x.author}: ${x.content}`);
        });
        textArea.value = result.join('\n');

    } catch (error) {
        return alert(error);
    }
}

attachEvents();