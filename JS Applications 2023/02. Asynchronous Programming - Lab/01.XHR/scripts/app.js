function loadRepos() {
   const url = 'https://api.github.com/users/testnakov/repos';

   let xmlHttpRequest = new XMLHttpRequest();

   xmlHttpRequest.addEventListener('readystatechange', displayRepos);
   xmlHttpRequest.open('GET', url);
   xmlHttpRequest.send();

   function displayRepos() {
      if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
         document.getElementById('res').textContent = xmlHttpRequest.responseText;
      }
   }
}
