//using functions properly

function addTwo(num:number): number { //second number is the return ype.
    return num + 2;
}

function getUpper(val: string){
    return val.toUpperCase();
}

//here is important.
function signUpUser(name: string, email: string, isPremium : boolean){}

//arrow function:
let loginUser = (name:string, email:string, isPremium:boolean = false) => {} // isPremium is false by default.
loginUser("Ayse", "a@a");


addTwo(5);
let myValue = addTwo(5);
getUpper("ayse");
signUpUser("ayse", "ayse@email.com", true);

//learnin about function philosophy.

//second function part of the video for return types.

function getValue(myValue: number): boolean | string{
    if (myValue > 10) {
        return true; //return type is boolean
    }
    return "200 OK"; //return type is string
}

const getHello = (s:string):string => {
    return "Hello"
} //arrow functionda arrowdan önce return type koyduk.

const heros = ["thor", "batman", "superman"];
// biz bunu oluşturduk ama tipi belirtmedik.
heros.map((hero):string => {
    return `Hero is ${hero}`; // burada heros arrayindeki her elemanı alarak string döndürdük.
    // tırnak için altgr + , tuşu kullandım.
})
//bu mapping detaylı işler.


//good praactice is to use void return type for functions that do not return anything.
function consoleError(errmsg: string): void {
    console.log(errmsg);
//    return 1; X
} //void return type, yani hiçbir şey döndürmüyor.


//never returns a value ama throw yapabilir.
function handleError(errmsg:string): never{
//console.error(errmsg);
    throw new Error(errmsg);
}

//diğer videoda union konusulacak.
//notes:
//among which rules we use let,const, var?
//let is used for variables that can change.
//const is used for variables that should not change.
//var is used for variables that can change, but it is not recommended to use it in modern JavaScript.
export {};