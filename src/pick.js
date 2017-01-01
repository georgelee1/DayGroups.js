module.exports = function pick({ result, days }) {
    const picks = result.slice();
    const picked = days.map((day) => {
        return Object.assign({}, day, {
            people: picks
                .filter(({ choice }) => choice[0] === day.day)
                .map((person) => Object.assign({}, person, { choice: person.choice.slice(1) })),
        });
    });
    return picked
        .filter(({ people }) => people.length)
        .map((pick) => Object.assign({}, pick, { count: pick.people.length }));
}