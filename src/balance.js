function pass(balanced) {
    let final = false;
    for (let x = 0; x < balanced.length - 1; x++) {
        const pick = balanced[x];
        if (pick.people.length <= balanced[x + 1].people.length) {
            final = true;
            break;
        } else {
            const balanceValue = (pick.people.length + balanced[x + 1].people.length) / 2;
            const difference = pick.people.length - balanceValue;
            for (let y = 0; y < difference; y++) {
                const person = pick.people.shift();
                let moved = false;
                if (person.choice.length) {
                    const moveTo = balanced.find((nextPick, idx) => idx > x && person.choice.includes(nextPick.day));
                    if (moveTo) {
                        person.choice.splice(person.choice.indexOf(moveTo.day), 1);
                        moveTo.people.push(person);
                        moved = true;
                    }
                }
                if (!moved) {
                    pick.people.push(person);
                }
            }
        }
    }
    return final;
}

module.exports = function balance(picks) {
    const balanced = picks.slice().sort((a, b) => b.people.length - a.people.length);
    for (let x = 0; x < 10; x++) {
        let final = pass(balanced);
        if (final) {
            break;
        }
    }
    return balanced
        .map((pick) => Object.assign({}, pick, { count: pick.people.length }))
        .sort((a, b) => a.day - b.day);
}