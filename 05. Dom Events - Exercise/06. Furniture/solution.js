function solve() {
  let generateBtn = document.querySelectorAll('div#exercise button')[0];
  let buyBtn = document.querySelectorAll('div#exercise button')[1];

  // take and split the array to get info
  let input = document.querySelectorAll('div#exercise textarea')[0];
  let output = document.querySelectorAll('div#exercise textarea')[1];

  generateBtn.addEventListener('click', onGenerate);
  buyBtn.addEventListener('click', onBuy);

  function onGenerate() {
    let newItems = JSON.parse(input.value);

    newItems.forEach(obj => {
      let tableBody = document.querySelector('table tbody');
      let tr = document.createElement('tr');

      let imgSrc = document.createElement('img');
      imgSrc.src = obj.img

      let itemName = document.createElement('p');
      itemName.textContent = obj.name;

      let price = document.createElement('p');
      price.textContent = obj.price;

      let decorationFactor = document.createElement('p');
      decorationFactor.textContent = obj.decFactor;

      let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');

      let tdImg = document.createElement('td');
      tdImg.appendChild(imgSrc);
      tr.appendChild(tdImg);

      let tdName = document.createElement('td');
      tdName.appendChild(itemName);
      tr.appendChild(tdName);

      let tdPrice = document.createElement('td');
      tdPrice.appendChild(price);
      tr.appendChild(tdPrice);

      let tdDeFactor = document.createElement('td');
      tdDeFactor.appendChild(decorationFactor);
      tr.appendChild(tdDeFactor);

      let tdCheckbox = document.createElement('td');
      tdCheckbox.appendChild(checkbox);
      tr.appendChild(tdCheckbox);

      tableBody.appendChild(tr);
    });
  }

  function onBuy() {
    const items = Array.from(document.querySelectorAll('table tbody input'))
      .filter(x => x.checked);

      let names = [];
      let totalPrice = 0;
      let decorationFactor = 0;

    for (const item of items) {
      const itemData = item.parentElement.parentElement.children;
      
      names.push(itemData[1].textContent);
      totalPrice += Number(itemData[2].textContent);
      decorationFactor += Number(itemData[3].textContent);
    }
    
    decorationFactor = decorationFactor / names.length;

    let result = `Bought furniture: ${names.join(', ')}`;
    result += `\nTotal price: ${totalPrice.toFixed(2)}`;
    result += `\nAverage decoration factor: ${decorationFactor}`; 
    
    output.textContent = result;
  }
}