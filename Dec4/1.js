const transpose = m => m[0].map((x,i) => m.map(x => x[i]))
const sumOfUnmarked = (board, bools)=>board.reduce((total, value, index) => bools[index] === false ? total+value : total, 0)
const hasWon = (bool_board) => {
    const rows = [...Array(Math.ceil(bool_board.length / 5))].map((_,i) => bool_board.slice(i*5,i*5+5))
    for (let i = 0; i<rows.length; i++) if (rows[i].every((val) => val)) return true // row
    for (let i = 0; i<transpose(rows).length; i++) if (transpose(rows)[i].every((val) => val)) return true // column
    return false
}

const splitted = require('fs').readFileSync('demo.txt', 'utf8').split("\n\n")
const all_marks = splitted.shift().split(",").map(i=>parseInt(i))
const boards = splitted.map(i=>i.trim().split(/\s+/).map(i=>parseInt(i)))

let amount_of_marks = 1
while (true) {
    for (let i = 0; i<boards.length; i++) {

        marks = all_marks.slice(0, amount_of_marks)
        bools = boards[i].map(j=>marks.includes(j))

        if (hasWon(bools)) {
            console.log(sumOfUnmarked(boards[i], bools) * marks.pop())
            return
        }
    }
    amount_of_marks += 1
}
