const section = document.getElementById('detailsView');
// With this we change post textContent, cuz its only 1 post per View, so no need to create elements
const title = section.querySelector('#details-title');
const user = section.querySelector('#details-username');
const createdOn = section.querySelector('#details-time');
const content = section.querySelector('#details-content');

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
const comments = section.querySelector('#user-comment');

section.remove();

export function showDetails(event) {
    let target = event.target;

    if (target.tagName == 'H2') {
        target = target.parentElement;
    }

    if (target.tagName == 'A') {
        event.preventDefault();
        const id = target.id;
        showPost(id);
    }
}

async function showPost(postId) {
    const postUrl = `http://localhost:3030/jsonstore/collections/myboard/posts/${postId}`;
    const commenstUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments';

    const [postResponse, commentResponse] = await Promise.all([
        fetch(postUrl),
        fetch(commenstUrl)
    ]);

    const [postData, commentsData] = await Promise.all([
        postResponse.json(),
        commentResponse.json(),
    ]);

    comments.replaceChildren(...Object
        .values(commentsData)
        .filter(x => x.postId == postId)
        .map(x => createCommnetElement(x)));

    title.textContent = postData.title;
    user.textContent = postData.username;
    createdOn.textContent = postData.dateCreated;
    content.textContent = postData.content;
    form.id = postId;
    document.getElementById('main').replaceChildren(section);
}

function createCommnetElement(comment) {
    const div = Object.assign(document.createElement('div'), { className: 'topic-name-wrapper' });
    div.innerHTML = `
    <div class="topic-name">
        <p><strong>${comment.username}</strong> commented on <time>${comment.dateCreated}</time></p>
        <div class="post-content">
            <p>${comment.content}</p>
        </div>
    </div>`;

    return div;
}

async function onSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(form);

    const username = formData.get('username').trim();
    const content = formData.get('postText').trim();
    const postId = form.id;

    try {
        if (username == '' || content == '') {
            throw new Error('All fields are required!');
        }

        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                content,
                postId,
                dateCreated: new Date()
            })
        });

        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        form.reset();
        showPost(postId);

    } catch (err) {
        alert(err.message);
    }
}