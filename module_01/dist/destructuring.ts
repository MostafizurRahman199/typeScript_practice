
const user ={
    id: 345,
    name:{
        firstName: "Shifat",
        middleName:"Mia",
        lastName: "Hossain"
    },

    contactNo:"01700000000",
    address:{
        city:"Dhaka",
        country:"Bangladesh"
    }
};

const {
    contactNo, 
    name:{middleName : midName},
} = user;


// array destructuring

const myFriends = ["mia", "apple", "suna", "sina"];
const [lover, bestfriend, sexyfriend, ...friend] = myFriends;
