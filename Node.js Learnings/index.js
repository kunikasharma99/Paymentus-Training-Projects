console.log("Hello");

// require('./add.js')
// const modexport = require('./add');
// const sum = modexport(2,4);
// console.log(sum);

//require('./batman')
//require('./superman')
const name1 = require('./module caching');
// console.log(name1.getName());
// name1.setName("Paxcom");
// console.log(name1.getName());

const kunika = new name1('Kunika');
console.log(kunika.getName());
kunika.setName("Paxcom");
console.log(kunika.getName());

const sharma = new name1("Paymentus");
console.log(sharma.getName())