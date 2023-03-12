function attachEventsListeners() {
    const convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', onConvert);

    function onConvert() {
        let convertFrom = document.getElementById('inputUnits').value;
        let convertTo = document.getElementById('outputUnits').value;
        
        const inputDistance = document.getElementById('inputDistance').value;
        let outputDistance = document.getElementById('outputDistance');

        const distanceInMeters = inputDistance * metricUnits[convertFrom];
        const result = distanceInMeters / metricUnits[convertTo];

        outputDistance.value = result;
    }

    const metricUnits = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };
}