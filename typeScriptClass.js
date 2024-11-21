var User = /** @class */ (function () {
    function User(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "New York";
    }
    return User;
}());
var user = new User("shifat@gmail.com", "shifat", "011202003");
console.log(user.city);
