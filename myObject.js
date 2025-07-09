"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Bad behaviour of objects
var User = {
    name: "Ayşe",
    email: "ayse@ayse.com",
    isActive: true
};
//this is not the use case of objects. It is "through the functions"
//either pass objects into a function or return some objects.
//creating a simple method with passing objects:
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "ayse", isPaid: true, email: "macmac@himail.fifi" };
//there is a better way to define funcs and methods tho.
createUser(newUser);
//there are other better ways to add other objects when calling the function. Hitesh will show in other videos.
//What happens when we want to return an actual object?
function createCourse() {
    return { name: "react.js", price: 90 };
} //case where we return object types.
console.log(createCourse);
console.log(createUser(newUser));
