const fs = require('fs');

fs.writeFile('test.txt', 'Hello World! This is Bhavya.', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File has been written successfully');
});