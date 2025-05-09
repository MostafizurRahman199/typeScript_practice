// type Alice
{

    type Student =  {
        name :string,
        age:number,
        gender:string,
        contact?:string,
        address:string,
    }


    const student1:Student = {
        name:"Shifat",
        age:24,
        gender:"male",
        contact:"01700000000",
        address:"Dhaka",
    }


    const student2 :Student ={
        name :"Mama",
        age:24,
        gender:"male",
        address:"Barisal",
    }


    type UserName = string
    type isAdmin = boolean


    const userName: UserName = "Shifat"
    const isAdmin: isAdmin = true


    type Add = (num1:number, num2:number) => number;


    const add:Add = (num1 , num2)=>{
        return num1 + num2;
    }




}
