module.exports = function checker(result) {
    const include = [];
    const exclude = [];

    result.forEach(({ name, choice }) => {
        if (!choice.length) {
            exclude.push(name);
        } else {
            include.push({ name, choice })
        }
    });

    return { result: include, total: result.length, exclude };
}