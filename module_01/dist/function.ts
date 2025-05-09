// normal function
// Arrow function


function add(num1:number, num2:number):number{
    return num1 + num2;
}

add(2,4);



const addArrow = (num1:number, num2:number):number =>{
    return num1 + num2;
}

addArrow(2,4);


// function inside object called Method

const poorUser = {
    name :"Shifat",
    balance : 0,
    addBalance(balance:number):number{
        return this.balance + balance;
    }
}


const arr : number[] = [2,4,6];
const squareArray:number[] = arr.map((num:number):number => num * num)


