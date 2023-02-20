function solve() {
  let generateBtn = document.querySelectorAll('div#exercise button')[0];
  let buyBtn = document.querySelectorAll('div#exercise button')[1];
  let table = document.querySelector('table tbody');
  // take and split the array to get info
  let input = document.querySelectorAll('div#exercise textarea')[0];
  let output = document.querySelectorAll('div#exercise textarea')[1];

  let items = [];

  generateBtn.addEventListener('click', onGenerate);
  buyBtn.addEventListener('click', onBuy);

  function onGenerate() {
    let newItems = JSON.parse(input.value);

    for (const item of newItems) {
      let currRow = createRow(item);
      table.appendChild(currRow.element);

      items.push(currRow);
    }
  }

  function onBuy() {
    const selecteItems = items.filter(x => x.isChecked()).map(x => x.item);
    const names = selecteItems.map(x => x.name);
    const price = selecteItems.map(x => x.price).reduce((a, b) => a + Number(b), 0).toFixed(2);
    const avgDecFactor = selecteItems.map(x => x.decFactor).reduce((a, b, i, arr) => a + Number(b) / arr.length, 0);

    let result = [
      `Bought furniture: ${names.join(', ')}`,
      `Total price: ${price}`,
      `Average decoration factor: ${avgDecFactor}`,
    ];

    output.textContent = result.join('\n');
  }

  function createRow(item) {
    const row = document.createElement('tr');
    
    // row.appendChild(create('td', { scope: 'col' }, create('img', { src: item.img })));
    // row.appendChild(create('td', { scope: 'col' }, create('p', { textContent: item.name })));
    // row.appendChild(create('td', { scope: 'col' }, create('p', { textContent: item.price })));
    // row.appendChild(create('td', { scope: 'col' }, create('p', { textContent: item.decFactor })));

    // with decoratad function
    row.appendChild(createCol(createImg(item.img)));
    row.appendChild(createCol(createPar(item.name)));
    row.appendChild(createCol(createPar(item.price)));
    row.appendChild(createCol(createPar(item.decFactor)));

    // const check = create('input', { type: 'checkbox' });
    const check = createCheck();
    row.appendChild(createCol(check));

    function isChecked() {
      return check.checked;
    }

    return {
      element: row,
      item,
      isChecked,
    }
  }

  function create(type, attr, content) {
    const element = document.createElement(type);
    Object.assign(element, attr);

    if (content != undefined) {
      element.appendChild(content)
    }

    return element;
  }

  // function decoration
  const createCol = create.bind(null, 'td', { scope: 'col' });
  const createPar = (text) => create('p', { textContent: text });
  const createImg = (src) => create('img', { src });
  const createCheck = create.bind(null, 'input', { type: 'checkbox' });
}