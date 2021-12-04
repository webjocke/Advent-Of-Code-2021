const common = []
const transpose = m => m[0].map((x,i) => m.map(x => x[i]))
const count = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
const r = transpose(require('fs').readFileSync('demo.txt', 'utf8').split("\n").map(i=>i.split("")))
r.forEach(i => common.push(count(i, "1") > count(i, "0") ? 1:0))
const gamma = parseInt(common.join(""), 2)
const epsilon = parseInt(common.map(i=>i===1?0:1).join(""), 2)
console.log(gamma*epsilon)
