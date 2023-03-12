function argumentsInfo() {
    const input = Array.from(arguments);
    
    const types = {};

    input.forEach(x => {
        console.log(`${typeof x}: ${x}`);

        if (types[typeof x] == undefined) {
            types[typeof x] = 0;
        }
        types[typeof x]++;
    });
    
    const result = Object.entries(types).sort(((a, b) => b[1] - a[1]));
    
    for (const [type, count] of result) {
        console.log(`${type} = ${count}`);
    }
}   

argumentsInfo('cat', 8, 42, function () { console.log('Hello world!'); });