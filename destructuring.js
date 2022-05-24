const fish = { id: 54, name: 'king Hilsha', price: 9000, phone: '01785555555', adress: 'barishal', dress: 'rupali' }

const { id, dress, adress, price, phone } = fish
// console.log(id, name, price, adress, phone);
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'ruti' },
    web: { work: 'web develop', empoly: 22, fremwark: 'react', tec: { first: 'html', secound: 'css', third: 'js' } }
}
const { name, } = company;
const { fremwark } = company.web;
const { work, empoly, first, third } = company.web.tec;
console.log(third, name, fremwark);

