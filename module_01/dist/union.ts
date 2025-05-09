// union

{
    type Programmer = "frontend" | "backend" | "fullstack";

    const programmer1 : Programmer = "backend";
    const programmer2 : Programmer = "frontend";
    const programmer3 : Programmer = "fullstack";



    type User = {
        name : string,
        age: number,
        gender: "male" | "female",
        bloodGroup : "A+" | "A-" | "B+" | "B-" | "O+" | "O-",
        contact : string,
    }

    const user1 : User = {
        name :"Maria",
        age : 22,
        gender:"female",
        bloodGroup:"O+",
        contact:"01700000000",
    }




    type FrontendDeveloper = {
        skills : string[],
        designation1 : "frontend developer",
    }

    type BackendDeveloper = {
        skills : string[],
        designation2 : "backend developer",
    }


    const FullstackDeveloper : FrontendDeveloper & BackendDeveloper = {
        skills : ["react", "node", "express", "mongodb"],
        designation1 : "frontend developer",
        designation2 : "backend developer",
    } 
}