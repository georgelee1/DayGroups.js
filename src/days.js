module.exports = function days(result) {
    const count = [0, 0, 0, 0, 0, 0, 0];
    result.forEach(({ choice }) => choice.forEach((day) => count[day]++));
    return count.map((val, idx) => ({ day: idx, count: val })).sort((a, b) => b.count - a.count);
};