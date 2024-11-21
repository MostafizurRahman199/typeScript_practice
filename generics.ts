const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val:boolean |  number):boolean | number{
    return val;
}

function identityTwo(val:any):any{
    return val;
}


function identityThree<Type>(val:Type):Type{
    return val;
}

identityThree(true);
identityThree("true");

function getSearchProducts<T>(products:T[]):T{
    return products[0];
}

getSearchProducts([1,2,3,4,5,6,7,8,9,10]);

interface Database{
    connection:string;
    username:string;
    password:string;
}

function getSearchProductsFour<Database>(val:Database):Database{
    return val;
}


getSearchProductsFour({connecttion:"200", username:"shifat", password:"iloveAmmu199#"});

