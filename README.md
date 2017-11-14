# Day Groups

A small simple utility that auto picks people with defined availability into as few as possible groups of days, balancing the numbers as evenly across days.

## Input (data.txt)

Input is a CSV file. Any column that is not a number is assumed part of the name, otherwise the day availability Mon-Sun (1-7)
```
PersonOne,1,2
PersonTwo,1,3
PersonThree,3
PersonFour,1,2
PersonFive,1,2
PersonSix,2,3
PersonSeven,4,5
PersonEight,5
```

## Run
`yarn start [options] <file>`

Example:

`yarn start --days 1,2,3 --output output.txt data.txt`

## Options
    -V, --version         output the version number
    -d, --days <days>     The days in which to restrict groupings to eg. "1,2,3", defaults to all days
    -o, --output [value]  Output file location, defaults to output.txt
    -h, --help            output usage information


## Output (console)
```
Total Days: 3
Days (size): Mon (2) | Tue (2) | Wed (2)
Total People: 8
Total Included People: 6
Excluded People: PersonSeven | PersonEight
```

## Output (output.txt)
```
/////////////////////////
Monday (2)
/////////////////////////
PersonFour
PersonFive
/////////////////////////
Tuesday (2)
/////////////////////////
PersonSix
PersonOne
/////////////////////////
Wednesday (2)
/////////////////////////
PersonThree
PersonTwo
```