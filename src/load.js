const fs = require('fs');
const readline = require('readline');

module.exports = function readData(path, parser) {
    return new Promise((resolve, reject) => {
        const result = [];
        const rd = readline.createInterface({
            input: fs.createReadStream(path),
            output: process.stdout,
            terminal: false
        });

        rd.on('line', function(line) {
            result.push(parser(line));
        });

        rd.on('close', function() {
            resolve(result);
        });
    })
}