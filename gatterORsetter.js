// class 
class user {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    //get ==== getter
    get password(){
        return this._password.toUpperCase()  // we access password whatever return here it will show you
    }
    // set ===== setter
    set password(value){
          this._password = value
    }
}

const chai = new user("chai@.com","1234")
console.log(chai);



// object
const student = {
        _email : "stu@.com",
        _password : "12345",
    
    //get ==== getter  
    // get mean memory se leke ana and return modified data 
    get email(){
        return this._email.toUpperCase()  // we access password whatever return here it will show you
    },
    // set ===== setter

    // set email me modified value store karata hai
    set email(value){
          this._email = value
    }
}

console.log(student.email);




