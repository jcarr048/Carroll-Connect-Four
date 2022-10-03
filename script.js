const cells = document.querySelectorAll('.cell')
const playerStatus = document.querySelector('#playerStatus')
const newGameBtn = document.querySelector('#newGameBtn')

const row0 = [
  cellIndex[0],
  cellIndex[1],
  cellIndex[2],
  cellIndex[3],
  cellIndex[4],
  cellIndex[5],
  cellIndex[6]
]
const row1 = [
  cellIndex[7],
  cellIndex[8],
  cellIndex[9],
  cellIndex[10],
  cellIndex[11],
  cellIndex[12],
  cellIndex[13]
]
const row2 = [
  cellIndex[14],
  cellIndex[15],
  cellIndex[16],
  cellIndex[17],
  cellIndex[18],
  cellIndex[19],
  cellIndex[20]
]
const row3 = [
  cellIndex[21],
  cellIndex[22],
  cellIndex[23],
  cellIndex[24],
  cellIndex[25],
  cellIndex[26],
  cellIndex[27]
]
const row4 = [
  cellIndex[28],
  cellIndex[29],
  cellIndex[30],
  cellIndex[31],
  cellIndex[32],
  cellIndex[33],
  cellIndex[34]
]
const row5 = [
  cellIndex[35],
  cellIndex[36],
  cellIndex[37],
  cellIndex[38],
  cellIndex[39],
  cellIndex[40],
  cellIndex[41]
]
const rows = [row0, row1, row2, row3, row4, row5]

const column0 = [
  cellIndex[0],
  cellIndex[7],
  cellIndex[14],
  cellIndex[21],
  cellIndex[28],
  cellIndex[35]
]
const column1 = [
  cellIndex[1],
  cellIndex[8],
  cellIndex[15],
  cellIndex[22],
  cellIndex[29],
  cellIndex[36]
]
const column2 = [
  cellIndex[2],
  cellIndex[9],
  cellIndex[16],
  cellIndex[23],
  cellIndex[30],
  cellIndex[37]
]
const column3 = [
  cellIndex[3],
  cellIndex[10],
  cellIndex[17],
  cellIndex[24],
  cellIndex[31],
  cellIndex[38]
]
const column4 = [
  cellIndex[4],
  cellIndex[11],
  cellIndex[18],
  cellIndex[25],
  cellIndex[32],
  cellIndex[39]
]
const column5 = [
  cellIndex[5],
  cellIndex[12],
  cellIndex[19],
  cellIndex[26],
  cellIndex[33],
  cellIndex[40]
]
const column6 = [
  cellIndex[6],
  cellIndex[13],
  cellIndex[20],
  cellIndex[27],
  cellIndex[34],
  cellIndex[41]
]

const columns = [column0, column1, column2, column3, column4, column5, column6]
