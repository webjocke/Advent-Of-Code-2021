r=require('fs').readFileSync('input.txt', 'utf8').split("\n").map(i=>{
    return {
        c: i.split(" ")[0],
        a: parseInt(i.split(" ")[1])
    }
}).reduce((t, c, index, array)=>{
    return {
        h: c.c == "forward" ? t.h + c.a : t.h,
        d: c.c == "up" ? t.d - c.a : ( c.c == "down" ? t.d + c.a : t.d )
    }
}, {h: 0, d: 0})
console.log(r.h*r.d)