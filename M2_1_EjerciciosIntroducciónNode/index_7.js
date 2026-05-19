let { randomnum } = require('./7_random.js');
let { createConsecutiveArray, createconsarray } = require('./7_consarray.js');
 
let num = randomnum();
let result = createconsarray(num);
 
console.log(`Número aleatorio: ${num}`);
console.log(`Array de 10 consecutivos: [${result}]`);