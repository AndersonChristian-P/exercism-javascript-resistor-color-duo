`````javascript

export const colors = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]

export const value = colorNumbers => Number(colorNumbers.map(colorNumber => colors.indexOf(colorNumber)).join(""))
`````
1. .map() creates a new array with the results of calling a provided function on every element in the calling array
2. to combine the numbers in the array into one number use .join("") to create a string from the array
3. parseInt() then parses the string and returns an integer

