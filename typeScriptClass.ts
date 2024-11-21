class User {
    
    
    protected _courseCount = 1;



    readonly city: string = "New York";
    constructor(
        public email: string,
        public name: string,
        private userId: string
    ) {
        this.city = "New York";
    }


    private deleteToken(){
        console.log("Token deleted");
    }


    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount():number{
        return this._courseCount;
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("course count should be more than 1");
        }else{
            this._courseCount = courseNum;
        }
    }




}



class SubUser extends User{
    isFamily: boolean = true;
    changeCourseCount(){
        {
            this._courseCount = 4;
        }
    }
}


const user = new User("shifat@gmail.com", "shifat", "011202003");
console.log(user.city);