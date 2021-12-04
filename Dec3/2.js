const transpose = m => m[0].map((x,i) => m.map(x => x[i]))
const count = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
const most = j=>j.map(i=>count(i, "1") === count(i, "0") ? null : count(i, "1") > count(i, "0") ? "1" : "0") // most common
const least = j=>j.map(i=>count(i, "1") === count(i, "0") ? null : count(i, "1") > count(i, "0") ? "0" : "1") // least common
const r = require('fs').readFileSync('demo.txt', 'utf8').split("\n").map(i=>i.split(""))

oxygens = JSON.parse(JSON.stringify(r))
for (let oxygenPos = 0; oxygens.length > 1; oxygenPos++) {
    oxygens = oxygens.filter((item)=>item[oxygenPos] === (most(transpose(oxygens))[oxygenPos] || "1"))
}
co2s = JSON.parse(JSON.stringify(r))
for (let co2Pos = 0; co2s.length > 1; co2Pos++) {
    co2s = co2s.filter(item=>item[co2Pos] === (least(transpose(co2s))[co2Pos] || "0"))
}

console.log(parseInt(oxygens[0].join(""), 2) * parseInt(co2s[0].join(""), 2))
