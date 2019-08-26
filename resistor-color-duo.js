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

export const value = colorNumbers => {
  return Number(colorNumbers.map(colorNumber => colors.indexOf(colorNumber)).join(""))
}