const array = [2, 4, 3, 7, 8, 0, 0, 9, 4, 6, 9, 9, 0]; // input

// output : [0, 0, 0, 2, 4, 3, 7, 8, 4, 6, 9, 9, 9]

const temp = []
const output = array.reduce((accumlator, current) => {
    if (current === 0) {
        accumlator.unshift(current)
    }
    if (current === 9) {
        temp.push(current)
    }
    if (current !== 0 && current !== 9) {
        accumlator.push(current)
    }

    return accumlator;
}, [])