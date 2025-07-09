"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loginUser = function (email, password, isPaid) { }; //arrow func.
///loginUser("ay","a1234567")
//It doesn't work bc we need to provide the isPaid parameter
//if we don't want to provide it
//we can set a default
var loginUser2 = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("a@a.com", "soakpdapkdsa", true);
loginUser2("ayse", "a@a.com");
//A better way to write functions. About returning; use :type for supposed type.
//:string after the parameter says which type to return.
function addThanks(word) {
    return word + " thanks";
}
var getHello = function (s) {
    return "Hello";
};
//creating a list of array
var heroes = ["Batman", "Wonderwoman", "Black Widow"];
var num = [1, 2, 3];
//loop through the string array
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
//same operation but for a number array
num.map(function (num) {
    return "Num is ".concat(num);
});
//ts is smart enough to know the types of context in array. So we don't need to annotate types
//Important thing is to specify the RETURN TYPE.
//error functions:
function consoleError(errmsg) {
    console.log(ahmet);
}
var ahmet = new String("Aaaa");
//because it handles the error, It won't return void.
//NEVER.
function handleError(errmsg) {
    throw new Error(errmsg);
}
//1 gün arayla kendim yazdım.
function consoleError2(errmsg2) {
    console.log(errmsg2);
}
function handleError2(errmsg2) {
    throw new Error(errmsg2);
}
function multiplyTwo(num) {
    return num * 2;
}
var yegen1 = "mustafa altan";
var yegen2 = "hasan efe";
