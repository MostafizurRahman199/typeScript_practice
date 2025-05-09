function createUser({name:string, isPaid:boolean}){

}

createUser({name:"shifat", isPaid:true} );


type User ={
    name: string;
    email:string,
    isPaid:boolean,
}


function createInfo(info:User):User{
 return {email:"nice@gmail.com", name:"shifat", isPaid:false };
}


createInfo({name:"Shifat", email:"shifat@gmail.com", isPaid:true});



type Person = {
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean;
    creditCardDetails?:number;

}


const newPerson: Person = {
    _id: "0987654321",
    name: "John Doe",
    email: "john.doe@gmail.com",
    isActive: true,
    creditCardDetails: 1234567890123456 // optional property
};


const myPerson :Person = {
    _id:"1234567890",
    name:"Shifat",
    email:"shifat@gmail.com",
    isActive:true,
}

//________________combination of type make new type

type cardNumber = {
    cardNumber :string
}

type cardDate = {
    cardDate:string;
}

type cardDetails = cardNumber & cardDate & {
    cardCVV:number;
}


const newCardDetails: cardDetails = {
    cardNumber: "1234-5678-9012-3456",
    cardDate: "12/25",
    cardCVV: 123
};