{

    // spread operator and destructuring assignment
    // rest operator
    


const friends : string[] = ["Rifat", "Rakib", "Sabbir", "Redowan"];
const collegeFriend: string[] = ["Tamim", ];

friends.push(...collegeFriend);



const teachers = {
    teacher1: "Shamim",
    teacher2: "Samiul",
    teacher3: "Sabbir",
}


const seniorTeachers = {
    teacher4: "Shamim",
    teacher5: "Samiul",
    teacher6: "Sabbir",
}


const allTeachers = {
    ...teachers,
    ...seniorTeachers,
}

// rest operator

const greetFriends = (...friends:string[])=>{
    console.log(`Hello ${friends[0]}, ${friends[1]}, ${friends[2]}`);
}

greetFriends(...friends);






}