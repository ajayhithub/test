class user {
    constructor(user){
        this.user = user
    }

    logme(){
        console.log(`user is ${this.user}`);
    }
}

// extend use of inhertance        
class teacher extends user{       
     constructor(user,email,password){
         
        super(user);    // super is same as call method
        this.email = email;
        this.password = password;
     }

     addcourse(){
        console.log(`new course add ${this.user}`);
     }
}

const teach = new teacher("chai","chai@.com","12344");
teach.addcourse();

const student = new user("dixit");
student.addcourse(); // student.addcourse is not a function
student.logme();