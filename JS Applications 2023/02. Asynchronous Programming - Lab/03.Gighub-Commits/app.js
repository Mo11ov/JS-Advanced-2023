function loadCommits() {
    // Try it with Fetch API
    const output = document.getElementById('commits');
    const userName = document.getElementById('username').value;
    const repoName = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${userName}/${repoName}/commits`;

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
                li.innerHTML = `${line.commit.author.name}: ${line.commit.message}`;
                output.appendChild(li);
            }
        })
        .catch(error => {
            output.replaceChildren();
            const li = document.createElement('li');
            li.innerHTML = `Error: ${error} (Not Found)`;
            output.appendChild(li);
        });
}