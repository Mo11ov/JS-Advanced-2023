function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('div input[type="button"]'));

    const daysOutput = document.getElementById('days');
    const hoursOutput = document.getElementById('hours');
    const minutesOutput = document.getElementById('minutes');
    const secondsOutput = document.getElementById('seconds');

    buttons.forEach(btn => {
        btn.addEventListener('click', onConvert);
    });

    
    function onConvert(event) {
        let input = event.target.parentElement.querySelector('div input[type="text"]');
        let result = Number(input.value) / timeValues[input.id];
        
        daysOutput.value = result * timeValues.days;
        hoursOutput.value = result * timeValues.hours;
        minutesOutput.value = result * timeValues.minutes;
        secondsOutput.value = result * timeValues.seconds;
    }
    
    const timeValues = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }
}