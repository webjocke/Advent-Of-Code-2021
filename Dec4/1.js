const { count } = require('console')

const common = []

const transpose = m => m[0].map((x,i) => m.map(x => x[i]))
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

r = require('fs').readFileSync('input.txt', 'utf8').split("\n").map(i=>{
    return i.split("")
})
//console.log(r)
r = transpose(r)
//console.log(r)

r.forEach(i => {
    if (countOccurrences(i, "1") > countOccurrences(i, "0")) {
        common.push(1)
    } else {
        common.push(0)
    }
})

console.log({common})

gamma = parseInt(common.join(""), 2)
console.log({gamma})

const other = common.map((i)=>{
    return i===1?0:1
})
console.log({other})

otherthing = parseInt(other.join(""), 2)
console.log({otherthing})

console.log(gamma*otherthing)

// r = r.reduce((t, c, index, array)=>{
//     return {
//         h: c.c == "forward" ? t.h + c.a : t.h,
//         d: c.c == "up" ? t.d - c.a : ( c.c == "down" ? t.d + c.a : t.d )
//     }
// }, {h: 0, d: 0})
//console.log(r)
///console.log(common)
//console.log(r.h*r.d)

/* 
00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
*/