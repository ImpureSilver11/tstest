"use strict";
// 2-1-1 ~ 2-1-2
function expo2(amount) {
    return Math.pow(amount, 2);
}
// const value =  expo2('1000')
// const withTax = value * 1.1 //NaN
// const value =  expo2(1000)
console.log(expo2(1000));
// console.log(expo2('1000')) // Error
// 2-1-3
function taxed(amount) {
    return amount * 1.1;
}
// function fee(amount){  // NaN
//   return `{amount * 1.4}`
// }
function fee(amount) {
    return amount * 1.4;
}
// "noImplicitAny": false の時
// function price(amount): number{ // Error
function price(amount) {
    return "" + fee(amount);
}
var demand = '¥' + taxed(price(1000));
