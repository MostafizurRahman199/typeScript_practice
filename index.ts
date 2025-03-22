let num : number = 5;
console.log(num);



let sentences : string = "Hello world";

let sentencesLength : number = sentences.length;
console.log(sentencesLength);



let isDone : boolean = false;
console.log(isDone);



const isPalindrome = (str:string):boolean=>{
    let len = str.length;
    for (let i=0; i<len/2; i++){
        if (str[i] !== str[len - 1 - i]){
            return false;
        }
    }
    return true;
}



const name1 = "Shifat";


const numbers : number[] = [1,2,3,4,5];
console.log(numbers);


const names : string[] = Array.of("Shifat", "Rahman", "Shifat");
console.log(names);




const doubleData:number[] = [1,2,3,4,5].map((num:number)=>num*2);
console.log(doubleData);




// user1 = login => normal user 
// user2 = login => admin user 
enum Roles{
    user = "user",
    admin = "admin",
}

type LoginDetails = {
    name : string;
    email : string;
    password : string;
    role: Roles;
}


const user1  : LoginDetails = {
    name : "Shifat",
    email : "fardilshifat199@gmail.com",
    password : "12345",
    role: Roles.user
}


const user2 : LoginDetails = {
    email:"admin@gmail.com",
    name:"Admin",
    password
    :"admin",
    role:Roles.admin
}






