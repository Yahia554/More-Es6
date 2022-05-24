const numbers = [2, 4, 5, 7, 9]
const output2 = []

const doubleIt = number => number * 2
for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result)
}
// console.log(output2)


//  map
//const output = numbers.map(doubleIt);
const output = numbers.map(x => x * 2)
const sqeare = numbers.map(x => x * x)
console.log(sqeare)