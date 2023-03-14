function attachEvents() {
    const input = document.getElementById('location');
    const submitBtn = document.getElementById('submit');

    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');
    const forecastDiv = document.getElementById('forecast');
    const label = document.querySelectorAll('.label');

    const weatherIcons = {
        sunny: '&#x2600',
        partlySunny: '&#x26C5',
        overcast: '&#x2601',
        rain: '&#x2614',
        degrees: '&#176',
    };

    submitBtn.addEventListener('click', onCLick);

    async function onCLick() {
        try {
            label[0].textContent = 'Current conditions';
            label[1].textContent = 'Three-day forecast';
            const locationUrl = `http://localhost:3030/jsonstore/forecaster/locations`;
            const response = await fetch(locationUrl);
            const data = await response.json();
            const locationData = data.find(x => x.name === input.value);
            const code = locationData.code;

            const currentUrl = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
            const weatherResponse = await fetch(currentUrl);
            const weatherData = await weatherResponse.json();

            forecastDiv.style.display = 'block';

            const div = document.createElement('div');
            div.setAttribute('class', 'forecasts');

            const symbolSpan = document.createElement('span');
            symbolSpan.setAttribute('class', 'condition symbol')

            const currCondition = weatherData.forecast.condition;
            let weatherIcon = '';

            if (currCondition == 'Sunny') {
                weatherIcon = weatherIcons['sunny'];
            } else if (currCondition == 'Partly sunny') {
                weatherIcon = weatherIcons['partlySunny'];
            } else if (currCondition == 'Overcast') {
                weatherIcon = weatherIcons['overcast'];
            } else if (currCondition == 'Rain') {
                weatherIcon = weatherIcons['rain'];
            }
            symbolSpan.innerHTML = weatherIcon;

            const spanGroup = document.createElement('span');
            spanGroup.setAttribute('class', 'condition');

            const citySpan = document.createElement('span');
            citySpan.setAttribute('class', 'forecast-data');
            citySpan.textContent = weatherData.name

            const degreesSpan = document.createElement('span');
            degreesSpan.setAttribute('class', 'forecast-data');
            degreesSpan.innerHTML = `${weatherData.forecast.low}${weatherIcons['degrees']}/${weatherData.forecast.high}${weatherIcons['degrees']}`;

            const iconSpan = document.createElement('span');
            iconSpan.setAttribute('class', 'forecast-data');
            iconSpan.textContent = currCondition;

            spanGroup.appendChild(citySpan);
            spanGroup.appendChild(degreesSpan);
            spanGroup.appendChild(iconSpan);
            div.appendChild(symbolSpan);
            div.appendChild(spanGroup);
            currentDiv.appendChild(div);

            // Upcoming section
            const upcomingUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
            const upcomingResponse = await fetch(upcomingUrl);
            const upcomingData = await upcomingResponse.json();

            const divUpcoming = document.createElement('div');
            divUpcoming.setAttribute('class', 'forecast-info');
            upcomingDiv.appendChild(divUpcoming);
            Object.entries(upcomingData.forecast).forEach(x => {


                const spanGroup = document.createElement('span');
                spanGroup.setAttribute('class', 'upcoming');

                const currCondition = x[1].condition;
                let weatherIcon = '';

                if (currCondition == 'Sunny') {
                    weatherIcon = weatherIcons['sunny'];
                } else if (currCondition == 'Partly sunny') {
                    weatherIcon = weatherIcons['partlySunny'];
                } else if (currCondition == 'Overcast') {
                    weatherIcon = weatherIcons['overcast'];
                } else if (currCondition == 'Rain') {
                    weatherIcon = weatherIcons['rain'];
                }

                const symbolSpan = document.createElement('span');
                symbolSpan.setAttribute('class', 'symbol')
                symbolSpan.innerHTML = weatherIcon;

                const degreesSpan = document.createElement('span');
                degreesSpan.setAttribute('class', 'forecast-data');
                degreesSpan.innerHTML = `${x[1].low}${weatherIcons['degrees']}/${x[1].high}${weatherIcons['degrees']}`;

                const weather = document.createElement('span');
                weather.setAttribute('class', 'forecast-data');
                weather.textContent = currCondition;

                spanGroup.appendChild(symbolSpan);
                spanGroup.appendChild(degreesSpan);
                spanGroup.appendChild(weather);
                divUpcoming.appendChild(spanGroup);        
            });

        } catch (error) {
            forecastDiv.style.display = 'block';
            label.forEach(x => x.textContent = 'Error');
        }
    }
}

attachEvents();