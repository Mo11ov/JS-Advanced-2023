import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns as townNames } from './towns.js';

const root = document.getElementById('towns');
const input = document.getElementById('searchText');
document.querySelector('button').addEventListener('click', onSearch);

const towns = townNames.map(x => ({name: x, match: false}));

const townsTemplate = (towns) => html`
<ul>
   ${towns.map(x => html`<li class=${x.match ? 'active' : ''}>${x.name}</li>`)}
</ul>`

function update() {
   render(townsTemplate(towns), root);
}

function onSearch() {
   const text = input.value.trim();
   let count = 0;
   towns.forEach(x => {
      if (text && x.name.includes(text)) {
         x.match = true;
         count++;
      } else {
         x.match = false;
      }
   });

   input.value = '';
   document.getElementById('result').textContent = `${count} matches found`;
   update();
} 

update();