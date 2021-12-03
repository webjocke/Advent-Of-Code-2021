
//const mostCommon = []
// const leastCommon = []

const transpose = m => m[0].map((x,i) => m.map(x => x[i]))
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
const mostCommon = (arr)=>{
    const mostCommon = []
    arr.forEach(i => {
        onces = countOccurrences(i, "1")
        zeros = countOccurrences(i, "0")
        //console.log(`${onces} vs ${zeros}, samma=${onces === zeros}`)
        if (onces === zeros) {
            console.log("most same")
            mostCommon.push(null)
        } else if (onces > zeros) {
            mostCommon.push("1")
        } else {
            mostCommon.push("0")
        }
    })
    return mostCommon
}
const leastCommon = (arr)=>{
    const leastCommon = []
    arr.forEach(i => {
        onces = countOccurrences(i, "1")
        zeros = countOccurrences(i, "0")
        //console.log(`${onces} vs ${zeros}, samma=${onces === zeros}`)
        if (onces === zeros) {
            console.log("least same")
            leastCommon.push(null)
        } else if (onces > zeros) {
            leastCommon.push("0")
        } else {
            leastCommon.push("1")
        }
    })
    return leastCommon
}

r = require('fs').readFileSync('input.txt', 'utf8').split("\n").map(i=>{
    return i.split("")
})
//console.log(r)
r2 = transpose(r)
//console.log(r)

// r2.forEach(i => {
//     onces = countOccurrences(i, "1")
//     zeros = countOccurrences(i, "0")
//     console.log(`${onces} vs ${zeros}, samma=${onces === zeros}`)
//     if (onces === zeros) {
//         console.log("nice")
//         mostCommon.push(null)
//         leastCommon.push(null)
//     } else if (onces > zeros) {
//         mostCommon.push("1")
//         leastCommon.push("0")
//     } else {
//         mostCommon.push("0")
//         leastCommon.push("1")
//     }
// })

firstValue = JSON.parse(JSON.stringify(r))
firstMostCommon = []
firstValuePos = 0
while (firstValue.length > 1) {
    firstMostCommon = mostCommon(transpose(firstValue))
    //console.log({firstValue, firstMostCommon})
    firstValue = firstValue.filter((item)=>{
        return item[firstValuePos] === (firstMostCommon[firstValuePos] || "1")
    })
    firstValuePos += 1
}
console.log({firstValue: firstValue[0].join("")})

firstThing = parseInt(firstValue[0].join(""), 2)

secondValue = JSON.parse(JSON.stringify(r))
secondleastCommon = []
secondValuePos = 0
while (secondValue.length > 1) {
    secondleastCommon = leastCommon(transpose(secondValue))
    //console.log(secondValuePos, secondValue)
    secondValue = secondValue.filter((item)=>{
        return item[secondValuePos] === (secondleastCommon[secondValuePos] || "0")
    })
    secondValuePos += 1
}
console.log({secondValue: secondValue[0].join("")})


secondThing = parseInt(secondValue[0].join(""), 2)

console.log(firstThing*secondThing)


// gamma = parseInt(common.join(""), 2)
// console.log({gamma})

// const other = common.map((i)=>{
//     return i===1?0:1
// })
// console.log({other})

// otherthing = parseInt(other.join(""), 2)
// console.log({otherthing})

// console.log(gamma*otherthing)

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