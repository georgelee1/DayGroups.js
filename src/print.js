const fs = require('fs');

const DAY_TITLE = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function toString(result) {
    let val = '';
    result.forEach((day) => {
        val += '/////////////////////////\n';
        val += `${DAY_TITLE[day.day]} (${day.people.length})\n`;
        val += '/////////////////////////\n';
        day.people.forEach((person) => {
            val += `${person.name}\n`;
        });
    });
    return val;
}

module.exports = function(path, result) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, toString(result), function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
}