function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableRows = document.querySelectorAll("tbody tr");
      let searchParam = document.getElementById("searchField").value;

      for (const row of tableRows) {
         row.classList.remove("select");
         if (searchParam.length != 0 && row.innerHTML.includes(searchParam)) {
            row.className = "select";
         }
      }
   }
}