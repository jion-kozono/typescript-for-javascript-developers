export {}

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January)
console.log(Months.February)
console.log(Months.December)

// const MonthsJs = {
//   January: 0,
//   February: 1,
// }

// console.log(MonthsJs.February)

enum COLORS {
  RED = '#FFOOOO',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '000000',
  // YELLOW = 'FFFF00'
}
let green = COLORS.GREEN
console.log(green)

enum COLORS {
  YELLOW = 'FFFF00',
  GRAY = '808080'

}
COLORS.YELLOW
let yellow = COLORS.YELLOW;
console.log(yellow);