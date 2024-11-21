// type NewUser = {
//   name: string;
//   id: number;
// };

// type Admin = {
//   username: string;
//   id: string;
// };

// let mostafiz: NewUser | Admin = {
//   name: "Mostafiz",
//   id: 11202003,
// };

// mostafiz = {
//   username: "mostafiz",
//   id: "11202003",
// };


const mama = helloId("hello");
console.log(mama);



function helloId(id: number | string): number | string {
  if (typeof id === "number") {
   return  id + 10;
  } else if (typeof id === "string") {
    return id.toUpperCase();
  }
  return "";
}


// array 

const data : number[] = [1,2,3,4,5];
const data2 : string[] = ["friends", "family", "relatives"];
const data3 : (number | string | boolean)[] = [1, "father", 2, "mother", 3 , "uncle", true];






