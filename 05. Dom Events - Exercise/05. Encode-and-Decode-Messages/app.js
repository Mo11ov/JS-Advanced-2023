function encodeAndDecodeMessages() {
    const encodeBtn = document.querySelectorAll('main#main div button')[0];
    const decodeBtn = document.querySelectorAll('main#main div button')[1];
    let textarea = document.querySelectorAll('textarea');

    encodeBtn.addEventListener('click', onEncode);
    decodeBtn.addEventListener('click', onDecode);

    function onEncode() {
        let result = '';
        let text = textarea[0].value;
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text[i].charCodeAt(0) + 1);
        }
        textarea[1].value = result;
        textarea[0].value = '';
    }

    function onDecode() {
        let result = '';
        let text = textarea[1].value;
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text[i].charCodeAt(0) - 1);
        }
        textarea[1].value = result;
    }
}