class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log('start a support session');
    }
}
const aamit = new Support('amir khan', 'kustia');
const salman = new Support('salim', 'dhaka')
console.log(aamit)
console.log(salman)