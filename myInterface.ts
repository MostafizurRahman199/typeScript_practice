interface User1  {
    readonly dbId: number;
    name:string;
    email:string;
    userId:number;
    photoURL?:string;
    startTrail():string;
    getCoupon(couponName:string, value:number):number;

}

interface Admin extends User1 {
    role:string;
}









const person1:Admin = {

    dbId: 1,
    name:"Jhon",
    email:"jhon@gmail.com",
    userId:100,

    startTrail:()=>{
        return "Trail started";
    },

    getCoupon:(name:"mostafiz", off:10)=>{
        return 10;
    },

    role:"Software Engineer"
} 





person1.name = "Jhon Cena";
