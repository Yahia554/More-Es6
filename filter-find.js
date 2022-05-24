const numbers = [1, 45, 41, 13, 15, 51, 3, 5, 30, 2]
const bigNum = numbers.filter(numbers => numbers != 2);
const smallNum = numbers.filter(numbers => numbers < 20)
console.log(bigNum)

const products = [
    { name: 'water botol', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'Laptop', processor: 'amd', price: 50000, color: 'selver' },
    { name: 'lamp light', price: 350, color: 'red' }

];
const productPrice = products.filter(product => product.price > 2000);
const productColor = products.filter(product => product.color == 'selver')
// console.log(productColor)
const waitheItem = products.find(product => product.color == 'red')
// console.log(waitheItem)