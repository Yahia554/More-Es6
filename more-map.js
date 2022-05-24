const friends = ['tom imam', 'tom jery', 'tom bangi', 'tom herry'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths)

const products = [
    { name: 'water botol', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'Laptop', processor: 'amd', price: 50000, color: 'selver' },
    { name: 'lamp light', price: 350, color: 'red' }

];
const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price)
// console.log(productName);
// console.log(productPrice)
products.map(product => console.log(product));