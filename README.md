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
```

## Run
`yarn start`

## Output (console)
```
Total Days: 3
Days (size): 0 (2) | 1 (2) | 2 (2) |
Total People: 6
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