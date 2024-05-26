"use strict";
let myName = "\tTanzeela  \n\t muzammil  \t shah";
console.log(`Name with white space and line break: "${myName}"`);
console.log(`Name after stipping : ${myName.trim().replace(/\s+/g, ' ')}`);
