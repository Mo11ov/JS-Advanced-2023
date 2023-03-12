function loadRepos() {
	const userName = document.getElementById('username').value;
	const output = document.getElementById('repos');
	const url = `https://api.github.com/users/${userName}/repos`;

	fetch(url)
		.then(response => {
			if (response.ok == false) {
				throw `${response.status}: ${response.statusText}`;
			} else {
				return response.json();
			}
		})
		.then(data => {
			output.replaceChildren();
			for (const line of data) {
				const li = document.createElement('li');
				li.innerHTML = `<a href="${line.html_url}"> ${line.full_name}</a>`;
				output.appendChild(li);
			}
		})
		.catch(error => {
			output.replaceChildren();
			output.innerHTML = `<p>${error}</p>`;
		});
}