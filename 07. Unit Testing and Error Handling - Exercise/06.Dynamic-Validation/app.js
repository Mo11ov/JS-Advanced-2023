function validate() {
    const input = document.getElementById('email');
    const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

    input.addEventListener('change', () => {
        const value = input.value;
        if (emailRegex.test(value)) {
            input.className = 'none';
        } else {
            input.className = 'error';
        };
    });
}