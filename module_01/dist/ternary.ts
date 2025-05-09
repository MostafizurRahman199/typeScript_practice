const age = 20;

const result = age>= 18 ? "adult" : "minor";

console.log(result);

const isAuthenticated = null;

const login = isAuthenticated ?? "Guest";