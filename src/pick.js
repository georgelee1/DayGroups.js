module.exports = function pick({ result, days, ...rest }) {
    const picks = result.slice();
    const picked = days.map((day) => {
        return {
            ...day,
            people: picks
                .filter(({ choice }) => choice[0] === day.day)
                .map((person) => ({ ...person, choice: person.choice.slice(1) })),
        }

        return Object.assign({}, day, {
            
        });
    });

    return {
        result: picked
            .filter(({ people }) => people.length)
            .map((pick) => ({ ...pick, count: pick.people.length })),
        ...rest,
    };
}