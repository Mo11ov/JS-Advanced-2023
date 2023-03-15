async function solution() {
    try {
        const titlesUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
        const titlesResponse = await fetch(titlesUrl);
        const titlesData = await titlesResponse.json();
        const main = document.getElementById('main');

        titlesData.forEach(async article => {
            const firstDiv = Object.assign(document.createElement('div'), { className: 'accordion' });
            const secondDiv = Object.assign(document.createElement('div'), { className: 'head' });
            const span = Object.assign(document.createElement('span'), { textContent: `${article.title}` });
            const btn = Object.assign(document.createElement('button'), { className: 'button' }, { id: `${article._id}` }, { textContent: 'More' });
            btn.addEventListener('click', onClick);
            // hidden data
            const url = `http://localhost:3030/jsonstore/advanced/articles/details/${article._id}`
            const response = await fetch(url);
            const data = await response.json();
            const divExtra = Object.assign(document.createElement('div'), { className: 'extra' }, { style: "display: none" });
            const p = Object.assign(document.createElement('p'), { textContent: data.content });

            divExtra.appendChild(p);
            firstDiv.appendChild(secondDiv);
            firstDiv.appendChild(divExtra);
            secondDiv.appendChild(span);
            secondDiv.appendChild(btn);
            main.appendChild(firstDiv);
        });
    } catch (error) {
        console.log(error);
    }

    function onClick(event) {
        const parent = event.target.parentElement.parentElement;
        if (event.target.textContent === 'More') {
            event.target.textContent = 'Less'
            parent.children[1].style.display = 'block';
        } else {
            event.target.textContent = 'More'
            parent.children[1].style.display = 'none';
        }
    }
}

solution();