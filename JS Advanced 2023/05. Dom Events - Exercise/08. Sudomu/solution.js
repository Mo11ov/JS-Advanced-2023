function solve() {
    const quickCheckBtn = document.querySelectorAll('tfoot tr td button')[0];
    const clearBtn = document.querySelectorAll('tfoot tr td button')[1];

    const table = document.querySelector('div#exercise table');
    const checkParagraph = document.querySelector('#check p');

    quickCheckBtn.addEventListener('click', onCheck)
    clearBtn.addEventListener('click', onClear);

    let inputs = document.querySelectorAll('tbody tr td input');

    function onCheck() {

        let isSudomu = true;

        let matrix = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value],
        ];

        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = matrix[i].map(x => Number(x));
        }

        for (let i = 0; i < matrix.length - 1; i++) {
            let rowOneSum = 0;
            let rowTwoSum = 0;
            let colOneSum = 0;
            let colTwoSum = 0;
            
            for (let j = 0; j < matrix.length; j++) {
                colOneSum += matrix[j][i];
                colTwoSum += matrix[j][i + 1];
                rowOneSum += matrix[i][j];
                rowTwoSum += matrix[i + 1][j]
            }

            if (rowOneSum !== rowTwoSum || colOneSum !== colTwoSum) {
                isSudomu = false;
            }

            if (rowOneSum < 1 || rowTwoSum < 1 || colOneSum < 1 || colTwoSum < 1) {
                isSudomu = false;
            }
        }
        
        if (isSudomu) {
            table.style.border = '2px solid green';
            checkParagraph.style.color = 'green';
            checkParagraph.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = '2px solid red';
            checkParagraph.style.color = 'red';
            checkParagraph.textContent = 'NOP! You are not done yet...';
        }
    }

    function onClear() {
        checkParagraph.textContent = '';
        table.style.border = '';

        inputs.forEach(input => input.value = '');
    }
}