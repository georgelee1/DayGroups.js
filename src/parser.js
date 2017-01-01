module.exports = function lineParser(line) {
    const parts = line.split(/[\s,]+/);
    let name = '';
    let choice = [];

    parts.forEach((part) => {
        const day = parseInt(part, 10);
        if (isNaN(day)) {
            if (name) {
                name += ' ';
            }
            name += part;
        } else {
            choice.push(day - 1);
        }
    });

    return {
        name,
        choice,
    };
}