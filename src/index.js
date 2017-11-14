const commander = require('commander');
const load = require('./load');
const parser = require('./parser');
const days = require('./days');
const checker = require('./checker');
const pick = require('./pick');
const balance = require('./balance');
const print = require('./print');

commander
    .version('1.0.0')
    .usage('[options] <file>')
    .option('-d, --days <days>',
        'The days in which to restrict groupings to eg. "1,2,3", defaults to all days',
        v => v.split(',').map(v => parseInt(v, 10)),
        [1,2,3,4,5,6,7]
    )
    .option('-o, --output [value]', 'Output file location, defaults to output.txt', 'output.txt')
    .parse(process.argv);

const restrictDays = commander.days;
const output = commander.output;

if (commander.args.length) {
    const dayLabel = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    Promise.all(commander.args.map(file => load(file, parser(restrictDays))))
        .then(all =>  all.reduce((result, next) => {
            result.push(...next)
            return result;
        }, []))
        .then(checker)
        .then(({ result, ...rest }) => ({ result, ...rest, days: days(result) }))
        .then(pick)
        .then(balance)
        .then(print.bind(null, output))
        .then(({ result, exclude, total }) => {
            console.info('Total Days: ' + result.length);
            console.info('Days (size): ' + result.map(({ day, people }) => `${dayLabel[day]} (${people.length})`).join(' | '));
            console.info('Total People: ' + total);
            console.info('Total Included People: ' + result.reduce((val, next) => val + next.people.length, 0));
            console.info('Excluded People: ' + exclude.join(' | '));
        })
        .catch((e) => console.error(e));
} else {
    console.error('No data file defined');
    process.exit(1);
    return;
}