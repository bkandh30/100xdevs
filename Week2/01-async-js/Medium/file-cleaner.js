const fs = require('fs');

fs.readFile('b1.txt', 'utf8', (err, data) => {
    const cleanedData = data.replace(/\s+/g, ' ').trim();
    fs.writeFile('b1.txt', cleanedData, 'utf8', (err) => {
        console.log('File has been cleaned');
    });
});