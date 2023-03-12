function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);

    function onMove(event) {
        const offset = event.offsetX;
        const percentage = Math.floor(offset / 300 * 100);
        document.getElementById('result').textContent = percentage + '%';
    }
}