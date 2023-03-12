function validate() {
    const userName = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const checkBox = document.getElementById('company');
    const number = document.getElementById('companyNumber');
    const validDiv = document.getElementById('valid');

    const allValues = [userName, email, password, confirmPassword, number];

    checkBox.addEventListener('change', () => {
        const companyInfo = document.getElementById('companyInfo');

        if (checkBox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });

    const nameRegex = /^[A-Za-z0-9]{3,20}$/;
    const passRegex = /^[\w]{5,15}$/;
    const emailRegex = /.*@.*\..*/;
    const companyRegex = /^[0-9]{4}$/;

    document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault();
        allValues.forEach(x => x.style.borderColor = '');
        
        const inCorectValues = [];

        if (!nameRegex.test(userName.value)) {
            inCorectValues.push(userName);
        }

        if (!passRegex.test(password.value) || password.value !== confirmPassword.value) {
            inCorectValues.push(password);
            inCorectValues.push(confirmPassword);
        }

        if (!emailRegex.test(email.value)) {
            inCorectValues.push(email);
        }

        if (checkBox.checked) {
            if (!companyRegex.test(number.value)) {
                inCorectValues.push(number);
            } 
        }

        if (inCorectValues.length == 0) {
            validDiv.style.display = 'block';             
        } else {
            validDiv.style.display = 'none'
            inCorectValues.forEach(x => x.style.borderColor = 'red');
        }     
    });
}
