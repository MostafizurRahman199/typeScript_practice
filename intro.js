// Create user object with additional properties
const user = {
    name: "Mostafizur Rahman",
    age: 20,
    email: "mostafizur@example.com",
    location: "Bangladesh"
};

// Function to display user info
function displayUserInfo(user) {
    try {
        console.log("User Information:");
        console.log("-----------------");
        console.log(`Name: ${user.name}`);
        console.log(`Age: ${user.age}`);
        console.log(`Email: ${user.email}`);
        console.log(`Location: ${user.location || "Not specified"}`);
    } catch (error) {
        console.error("Error displaying user information:", error);
    }
}

// Display user information
displayUserInfo(user);