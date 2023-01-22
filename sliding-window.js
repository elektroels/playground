const lib = require('./lib');

// via loop
const sliding_window_loop = (arr, size, fn) => {
    for (let i = 0; (i+(size-1)) < arr.length; i++) {
        fn(arr.slice(i, i+size))
    }
}

// via map
const sliding_window_map = (arr, size, fn) => {
    const window_length = size - 1
    arr.map((_val, i, list) => {
        if ((i+window_length) < list.length) {
            fn(list.slice(i, i+size))
        }
    })
}


sliding_window_loop(lib.range(11), 3, console.log)
console.log("---")
sliding_window_map(lib.range(11), 3, console.log)
