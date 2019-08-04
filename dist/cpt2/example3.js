"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1
function advancedType() {
    var pochi;
    pochi.bark;
    pochi.tail.color = 'black';
    pochi.wing.color = 'gold';
    pochi.fly;
    return pochi;
}
exports.advancedType = advancedType;
function returnNever() {
    throw new Error();
}
var unexistenceType = returnNever();
// let problematicNumber: string & number = '0' //ERROR
// union Types
var value;
value = false;
value = 1;
value = '1';
var numberOfStrings;
numberOfStrings = [0, '1'];
// numberOfStrings = [0, '1', false] // ERROR
var nullableString;
nullableString = null;
nullableString = 'notnull';
var nullableStrings;
nullableStrings.push(null);
nullableStrings.push('notnull');
// nullableStrings.push(false))
var status;
status = 'ToDo';
status = 'Doing';
// status = 'やってない' // ERROR
var zero;
zero = 0;
// zero = 1 // ERROR
zero.toFixed(1); // 0.0
