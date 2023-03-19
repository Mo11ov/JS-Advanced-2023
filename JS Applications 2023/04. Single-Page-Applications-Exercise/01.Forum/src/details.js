const section = document.getElementById('detailsView');
section.remove();

export function showDetails(event) {
    let target = event.target;

    if (target.tagName == 'H') {
        target = target.parentElement;
    }

    if (target.tagName == 'A') {
        event.preventDefault();
        showPost();
    }
}

function showPost(postId) {
    document.getElementById('main').replaceChildren(section);
}