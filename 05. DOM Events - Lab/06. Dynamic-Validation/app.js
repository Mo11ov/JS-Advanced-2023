function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', onChange)

    function onChange(event) {
        let text = event.target.value;
        text = text.toLowerCase();
        const regex = /.*\@.*\.\w{2,3}/g;

        if (!regex.test(text)) {
            event.target.className = 'error';
        } else {
            event.target.className = '';
        }
    }
}