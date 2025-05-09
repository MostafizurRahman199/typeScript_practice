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
var mama = helloId("hello");
console.log(mama);
function helloId(id) {
    if (typeof id === "number") {
        return id + 10;
    }
    else if (typeof id === "string") {
        return id.toUpperCase();
    }
    return "";
}
