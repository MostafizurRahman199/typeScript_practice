{



//  Type assertion / type narrowing

let anything : any;

anything = "Shifat";

anything = 23;

(anything as number).valueOf()

// (anything as string).length;


type ErrorType = {
    message : string;
}


try {
    
} catch (error) {
    console.log((error as ErrorType).message);
}





type rollName = number;


type User1 = {
    name : string;
    age:number;
}


type UserWithRole = User1 & {
    role:string;
}


const user: User = {
    name: "Shifat",
    age: 22
}



interface User{
    name:string;
    age:number;
}




interface UserWithRole2 extends User{
    role:string;

}


const user2 : UserWithRole2 = {
    name : "Shifat",
    age : 22, 
    role : "Admin",
}


const user1: UserWithRole={
    name : "Shifat",
    age : 22,
    role : "Admin"
}



// js -> object , array -> object , function -> object

type Roll1 = number [];

interface Roll2 {
    [index: number]: number;
}

const rollName1 : Roll1 = [1,2,3,4,5,6];
const rollName2 : Roll2 = [1,2,3,4,5,6];


type Add = (a: number, b: number) => number;

interface Add2 {
    (num1 : number, num2: number): number;
}

const addition:Add = (hello1 , hello2) =>{
    return hello1 + hello2;
}





















}