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
            // Resets div for new data 
            document.querySelectorAll('div[class="forecasts"]').forEach(x => x.remove());
            document.querySelectorAll('div[class="forecast-info"]').forEach(x => x.remove());

            const locationUrl = `http://localhost:3030/jsonstore/forecaster/locations`;
            const response = await fetch(locationUrl);
            const data = await response.json();
            const locationData = data.find(x => x.name === input.value);
            const code = locationData.code;

            const currentUrl = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
            const weatherResponse = await fetch(currentUrl);
            const weatherData = await weatherResponse.json();

            forecastDiv.style.display = 'block';

            const currCondition = weatherData.forecast.condition;
            const div = create('div', { className: 'forecasts' });
            const symbolSpan = create('span', { className: 'condition symbol' }, currCondition);
            const spanGroup = create('span', { className: 'condition' });
            const citySpan = create('span', { className: 'forecast-data' });
            citySpan.textContent = weatherData.name;

            const degreesSpan = create('span', { className: 'forecast-data' });
            degreesSpan.innerHTML = `${weatherData.forecast.low}${weatherIcons['degrees']}/${weatherData.forecast.high}${weatherIcons['degrees']}`;

            const weatherTextSpan = create('span', { className: 'forecast-data' });
            weatherTextSpan.textContent = currCondition;

            spanGroup.appendChild(citySpan);
            spanGroup.appendChild(degreesSpan);
            spanGroup.appendChild(weatherTextSpan);
            div.appendChild(symbolSpan);
            div.appendChild(spanGroup);
            currentDiv.appendChild(div);

            // Upcoming section
            const upcomingUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
            const upcomingResponse = await fetch(upcomingUrl);
            const upcomingData = await upcomingResponse.json();

            const divUpcoming = create('div', { className: 'forecast-info' });
            upcomingDiv.appendChild(divUpcoming);

            Object.entries(upcomingData.forecast).forEach(x => {
                const currCondition = x[1].condition;
                
                const spanGroup = create('span', { className: 'upcoming'});              
                const symbolSpan = create('span', { className: 'symbol' }, currCondition);
                const degreesSpan = create('span', { className: 'forecast-data' });
                degreesSpan.innerHTML = `${x[1].low}${weatherIcons['degrees']}/${x[1].high}${weatherIcons['degrees']}`;

                const weather = create('span', { className: 'forecast-data' });
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

    function create(type, attr, weatherCondition) {
        const element = document.createElement(type);
        Object.assign(element, attr);

        if (weatherCondition != undefined) {
            let weatherIcon = '';
            if (weatherCondition == 'Sunny') {
                weatherIcon = weatherIcons['sunny'];
            } else if (weatherCondition == 'Partly sunny') {
                weatherIcon = weatherIcons['partlySunny'];
            } else if (weatherCondition == 'Overcast') {
                weatherIcon = weatherIcons['overcast'];
            } else if (weatherCondition == 'Rain') {
                weatherIcon = weatherIcons['rain'];
            }
            element.innerHTML = weatherIcon;
        }
        return element;
    }
}

attachEvents();