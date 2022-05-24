// declare variable based on name of an object property
const myObject = { x: 2, y: 6, a: 5, d: 9, v: 5 };
const { d, v, x, y } = myObject;
// console.log(d, v, x, y);

// destructuring array
const [p, q] = [24, 56, 77];
// console.log(p, q)

//  
const [best, faltu, picci] = ['sami', 'rohan', 'salman']
// console.log(best, picci)

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'ruti' },
    web: {
        work: 'web develop', empoly: 22, fremwark: 'react',
        tec: { first: 'html', secound: 'css', third: 'js' }
    }
}

console.log(company.web.tec.third);
console.log(company?.back?.web?.empoly)