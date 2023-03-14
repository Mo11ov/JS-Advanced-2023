function solve() {
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const divInfo = document.querySelector('div span[class="info"]');

    let stop = {
        next: 'depot'
    }

    async function depart() {
        try {
            const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;

            const response = await fetch(url);
            const data = await response.json();
            // Separating(Detaching) data from response 
            stop = JSON.parse(JSON.stringify(data));

            divInfo.textContent = `Next stop ${stop.name}`;
        } catch (error) {
            divInfo.textContent = `Error`;
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {
        try {
            departBtn.disabled = false;
            arriveBtn.disabled = true;

            divInfo.textContent = `Arriving at ${stop.name}`;
        } catch (error) {
            divInfo.textContent = `Error`;
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();