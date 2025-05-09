{
    // generic types
    type GenericArray <T> = Array<T>

    // const rollNumbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const rollNumbers : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const mentors : Array<string> = ["a", 'b' , "c"]
    // const boolArray : Array<boolean> = [true, false, true];

    const rollNumbers : GenericArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const mentors : GenericArray<string> = ["a", 'b' , "c"]
    const boolArray : GenericArray<boolean> = [true, false, true];


// type User ={
//     name : string;
//     age : number | string;
// }


interface User {
    name : string;
    age : number | string;
}




    const user : GenericArray<User> = [
        {
            name:"Maria",
            age :100
        },
        {
            name  : "Shifat",
            age : "22"
        }
    ]



    // generic tuple
    type GenericTuple<T, U> = [T, U]

    const User : GenericTuple<string, number> = ["Shifat", 22]
    const Man  : [string, string] = ["Mr. X", "Mr. Y"]

    const woman : GenericTuple<string, string> = ["Mrs. X", "Mrs. Y"]

    const baby : GenericTuple<string, object> = ["baccha", {age: 1, name: "Shifat"}]




}