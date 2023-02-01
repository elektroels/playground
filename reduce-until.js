const lib = require('./lib');
const assert = require('assert');

// Reduce version
const reduce_until = (arr, red, cond) => {
    index = -1 
    const reduced = arr.reduce(
        (acc, curr, i) => {
            if (cond(acc)) {
                if (index < 0) index = i
                return acc
            }
            else return red(acc, curr)
        }
    )
    return {reduced, index}
}

// 0+1+2+3+4 = 10
const r10 = reduce_until(
    lib.range(10),
    (a, c) => a + c,
    val => val >= 10
)

assert(r10, { reduced: 10, index: 5})
console.log(r10)


