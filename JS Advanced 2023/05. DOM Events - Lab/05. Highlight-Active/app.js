function focused() {
    const divs = document.querySelectorAll('body div div input[type="text"]');

    for (const div of divs) {
        div.addEventListener('focus', (event) => {
            event.target.parentElement.className = 'focused';
        });
        div.addEventListener('blur', (event) => {
            event.target.parentElement.className = 'blurred'
        })
    }
}


// bubling variation
function focusedV2() {
    const parent = document.querySelector('div');

    parent.addEventListener('focusin', onFocus);
    parent.addEventListener('focusout', onBlur);

    function onFocus(event) {
        event.target.parentElement.className = 'focused';
    }

    function onBlur(event) {
        event.target.parentElement.className = 'blurred';
    }
}