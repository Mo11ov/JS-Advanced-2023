async function lockedProfile() {
    const mainDiv = document.getElementById('main');
    mainDiv.replaceChildren();

    try {
        const url = 'http://localhost:3030/jsonstore/advanced/profiles';
        const response = await fetch(url);
        const data = await response.json();
        const personsData = Object.entries(data);

        for (const [id, pData] of personsData) {
            const profileDiv = Object.assign(document.createElement('div'), { className: 'profile' });
            profileDiv.innerHTML =
                `
        	<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="${pData.username}" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="${pData.username}" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${pData.username}" disabled readonly />
				<div id="user1HiddenFields" style="display: none;">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${pData.email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user1Age" value="${pData.age}" disabled readonly />
				</div>
				
				<button>Show more</button> 
        `;
            mainDiv.appendChild(profileDiv);
        }
    } catch (error) {
        console.log(error);
    }

    const buttons = Array.from(document.querySelectorAll('div button'));
    buttons.forEach(btn => btn.addEventListener('click', onUnlock));

    function onUnlock(event) {
        const isUnlockChecked = event.target.parentElement.querySelector('input[value="unlock"]');

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