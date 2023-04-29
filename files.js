const {readFileSync, writeFile, readFile } = require('fs')

//readFileSync is synchronous and waits for function to finish executing before returning
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
console.log(first, second)

console.log("------------------------")

//readFile is asynchronous and will return before function completes and will throw
//an error as a result
readFile('./content/first.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

// const second1 = readFile('./content/second.txt', 'utf-8')
