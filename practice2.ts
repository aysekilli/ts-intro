let loginUser = (email: string, password: string, isPaid: boolean) => {} //arrow func.
///loginUser("ay","a1234567")
//It doesn't work bc we need to provide the isPaid parameter
//if we don't want to provide it
//we can set a default
let loginUser2 = (name:string, email: string, isPaid:boolean = false) => {}

loginUser("a@a.com","soakpdapkdsa",true)
loginUser2("ayse","a@a.com")

//A better way to write functions. About returning; use :type for supposed type.
//:string after the parameter says which type to return.
function addThanks(word: string):string{
    return word + " thanks";
}

const getHello = (s: string):string => {
    return "Hello";
}

//creating a list of array
const heroes = ["Batman", "Wonderwoman", "Black Widow"]
const num = [1,2,3]

//loop through the string array
heroes.map((hero):string => {
    return `hero is ${hero}`
})

//same operation but for a number array
num.map((num):string => {
    return `Num is ${num}`
})
//ts is smart enough to know the types of context in array. So we don't need to annotate types
//Important thing is to specify the RETURN TYPE.

//error functions:
function consoleError(errmsg: string): void{
    console.log(ahmet);
}

var ahmet = new String("Aaaa");

//because it handles the error, It won't return void.
//NEVER.
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

//1 gün arayla kendim yazdım.
function consoleError2(errmsg2 : string): void{
    console.log(errmsg2);
}

function handleError2(errmsg2: string): never{
    throw new Error(errmsg2);
}

function multiplyTwo(num: number):number{
    return num * 2;
}

let yegen1: string = "mustafa altan";
let yegen2: string = "hasan efe";



export{}