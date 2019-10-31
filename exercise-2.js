const rows = 8 // in total 
const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

process.stdout.write('a) \n')
for (let row = rows; row >= 1; row--) {

    for (let col = 0; col < cols.length; col++) {

        let string = `${cols[col]}${row}` 
        if (col !== cols.length -1) string += ' '
        process.stdout.write(`${string}`)
    }
    process.stdout.write('\n')
}

process.stdout.write('b) \n')
for (let row = 1; row < rows + 1; row++) {

    for (let colIndex = cols.length - 1; colIndex >= 0; colIndex--) {
        let string = `${cols[colIndex]}${row}`
        if (colIndex !== 0) string += ' '
        process.stdout.write(string)
    }
    process.stdout.write('\n')
}
