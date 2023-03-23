// Initialize and navigates through the application!
export function initialize(links){
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    nav.addEventListener('click', onNavigate);

    const context = {
        showSection,
        updateNav,
        goTo,
    };

    function showSection(section) {
        main.replaceChildren(section);
    }

    function onNavigate(event) {
        let target = event.target;

        if (target.tagName == 'IMG') {
            target = target.parentElement;
        }

        if (target.tagName == 'A') {
            event.preventDefault();
            const url = new URL(target.href);
            goTo(url.pathname);
        }
    }
    // Updates navbar
    function updateNav() {
        const user = localStorage.getItem('user');
        if (user) {
            nav.querySelectorAll('.user').forEach(x => x.style.display = 'block');
            nav.querySelectorAll('.guest').forEach(x => x.style.display = 'none');
        } else {
            nav.querySelectorAll('.user').forEach(x => x.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(x => x.style.display = 'block');
        }
    }

    function goTo(name, ...params) {
        const handler = links[name];
        if (typeof handler == 'function') {
            handler(context, ...params);
        }
    }

    return context;
};