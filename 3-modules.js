// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }

const names = require('./4-names')
const sayHi = require('./5-utils')
//console.log(names)
const data = require('./6-alternative-flavour') 
require(`./7-mind-grenade`)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)