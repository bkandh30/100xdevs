const fs = require('fs');


fs.readFile('a.txt', 'utf8', (err, data) => {
    console.log('File contents:', data);
});

// Expensive operation (you can adjust the iterations to make it more expensive)
function expensiveOperation(iterations) {
    console.log('Starting expensive operation...');
    let result = 0;
    for (let i = 0; i < iterations; i++) {
        for (let j = 0; j < 1000; j++) {
            result += Math.sqrt(j) * Math.random();
        }
    }
    console.log('Expensive operation completed');
    return result;
}

expensiveOperation(1000);

console.log('This message will appear first due to async nature of file read');