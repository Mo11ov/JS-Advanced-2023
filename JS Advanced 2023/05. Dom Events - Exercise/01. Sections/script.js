function create(words) {
   const content = document.getElementById('content');

   for (const word of words) {
      const div = document.createElement('div');
      const paragraph = document.createElement('p');

      paragraph.textContent = word;
      paragraph.style.display = 'none';

      div.appendChild(paragraph);
      div.addEventListener('click', onClick);;
      
      content.appendChild(div);
   }

   function onClick(event) {
      const curr = event.target.querySelector('p');
      curr.style.display = '';
   }
}