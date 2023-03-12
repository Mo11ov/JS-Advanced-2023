function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('div button'));

    buttons.forEach(btn => btn.addEventListener('click', onUnlock));

    function onUnlock(event) {
        const isUnlockChecked = event.target.parentElement.querySelector('input[value="unlock"][type="radio"]');

        if (isUnlockChecked.checked) {
            let hiddenData = event.target.parentElement.querySelector('div');

            if (event.target.textContent === 'Show more') {
                hiddenData.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                hiddenData.style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }
    }
}