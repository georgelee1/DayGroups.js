const load = require('./load');
const parser = require('./parser');
const days = require('./days');
const pick = require('./pick');
const balance = require('./balance');
const print = require('./print');

const dayLabel = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

load('data.txt', parser)
    .then((result) => ({ result, days: days(result) }))
    .then(pick)
    .then(balance)
    .then(print.bind(null, 'output.txt'))
    .then((result) => {
        console.info('Total Days: ' + result.length);
        console.info('Days (size): ' + result.map(({ day, people }) => `${dayLabel[day]} (${people.length})`).join(' | '));
        console.info('Total People: ' + result.reduce((val, next) => val + next.people.length, 0));
    })
    .catch((e) => console.error(e));