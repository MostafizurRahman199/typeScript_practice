function add(number1: number, number2: number = 1): number {
    return number1 + number2;
}

function getUpper(val: string): string {
    if (!val) {
        throw new Error('Input string cannot be empty');
    }
    return val.toUpperCase();
}

const loginUser = (email: string, name: string = ""): string => {
    if (!email) {
        throw new Error('Email is required');
    }
    return `${email} and ${name}`;
};

loginUser("shifat@gmail.com", "Shifat");






// map

const friends = ["asif", "nahid", "sharjij"];

friends.map((friend):string =>{
    return `My friend is ${friend}`;
})



function consoleError(errorMsg:string):void{
    console.error(errorMsg);
}



//use never typed  at the time of throw error
function errorThrow(error:string):never {
    throw new Error(error);
}







console.log(getUpper("hello"));


add(5);


export{};