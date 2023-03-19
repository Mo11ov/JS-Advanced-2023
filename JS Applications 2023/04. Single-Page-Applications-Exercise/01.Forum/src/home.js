import { showDetails } from './details.js';


const section = document.getElementById('homeView');
section.querySelector('div.topic-title').addEventListener('click', showDetails);
section.remove();

export function showHome(event) {
    event.preventDefault();
    document.getElementById('main').replaceChildren(section);
}