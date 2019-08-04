"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function basicType() {
    // bool型
    var flag = false;
    // number型
    var decimal = 256;
    var hex = 0xfff;
    var binary = 0;
    var octal = 83;
    // string型
    var color = "white";
    color = 'black';
    var myColor = "my color is " + color;
    // list
    var list1 = [1, 2, 3];
    var list2 = [1, 2, 3];
    // tnple
    var x1;
    x1 = ['hello', 10];
    // x1 = [10, 'hello'] // ERROR
    console.log(x1[0].substr(1));
    // console.log(x1[1].substr(1)) // ERROR
    var x2;
    x2[3] = 'hoge';
    console.log(x2[5].substr());
    // x[6] = true // ERROR
    var whatever = 0;
    whatever = 'something';
    whatever = false;
    // let ceratainlyNumbers: number[] = ['0']// ERROR
    var ceratainlyNumbers = [0];
    var maybeNumbers = ['0'];
    var probaplyNumbers = ['0'];
    ceratainlyNumbers[0].toFixed(1); // OK
    maybeNumbers[0].toFixed(1); // Runtime ERROR
    // probaplyNumbers[0].toFixed(1) // ERROR
    // "strictNullChecks": trueなら役立つ
    var hoge = null;
    var fuga = undefined;
    // object
    var objectBrace;
    var objectType;
    objectBrace = true;
    objectBrace = 0;
    // objectType = false // ERROR
    // objectType = 0 // ERROR
}
exports.basicType = basicType;
// void型
function logger(message) {
    var unsable = undefined; // input this or null
    console.log(message);
}
// never 戻り値を得てはいけない
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
