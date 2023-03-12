function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let words = text.split(" ");

  if (convention !== "Camel Case" && convention !== "Pascal Case") {
    return document.getElementById("result").textContent = "Error!";
  }

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
    if (convention === "Pascal Case" || i != 0) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
  }
  
  return document.getElementById("result").textContent = words.join("");
}