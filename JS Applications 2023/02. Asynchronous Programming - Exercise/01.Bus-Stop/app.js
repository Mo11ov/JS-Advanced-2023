async function getInfo() {
    const busStopId = document.getElementById('stopId').value;
    const stopNameDiv = document.getElementById('stopName');
    const ulBuses = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${busStopId}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        stopNameDiv.textContent = data.name;   
        // reset values for buses
        ulBuses.replaceChildren();
        Object.entries(data.buses).forEach(([bus, arrivalTime]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${arrivalTime} minutes`;
            ulBuses.appendChild(li);
        });

    } catch (error) {
        ulBuses.replaceChildren();
        stopNameDiv.textContent = `Error`;
    }
}