function search() {
   // let list = document.getElementById("towns").children;
   let listItems = document.querySelectorAll("ul#towns li");
   let searchParam = document.getElementById("searchText").value;
   let matches = 0;

   for (const li of listItems) {
      let text = li.textContent;
      if (text.includes(searchParam) && searchParam.length != 0) {
         li.style.fontWeight = "bold";
         li.style.textDecoration = "underline";
         matches++;
      } else {
         li.style.fontWeight = "normal";
         li.style.textDecoration = "";
      }
   }

   document.getElementById("result").textContent = `${matches} matches found`;
}
