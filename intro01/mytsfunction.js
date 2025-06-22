"use strict";
//using functions properly
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
//here is important.
function signUpUser(name, email, isPremium) { }
//arrow function:
var loginUser = function (name, email, isPremium) {
    if (isPremium === void 0) { isPremium = false; }
}; // isPremium is false by default.
loginUser("Ayse", "a@a");
addTwo(5);
var myValue = addTwo(5);
getUpper("ayse");
signUpUser("ayse", "ayse@email.com", true);
//learnin about function philosophy.
//second function part of the video for return types.
function getValue(myValue) {
    if (myValue > 10) {
        return true; //return type is boolean
    }
    return "200 OK"; //return type is string
}
var getHello = function (s) {
    return "Hello";
}; //arrow functionda arrowdan önce return type koyduk.
var heros = ["thor", "batman", "superman"];
// biz bunu oluşturduk ama tipi belirtmedik.
heros.map(function (hero) {
    return "Hero is ".concat(hero); // burada heros arrayindeki her elemanı alarak string döndürdük.
    // tırnak için altgr + , tuşu kullandım.
});
//bu mapping detaylı işler.
//good praactice is to use void return type for functions that do not return anything.
function consoleError(errmsg) {
    console.log(errmsg);
    //    return 1; X
} //void return type, yani hiçbir şey döndürmüyor.
//never returns a value ama throw yapabilir.
function handleError(errmsg) {
    //console.error(errmsg);
    throw new Error(errmsg);
}
