
class  user {

    constructor(user,email,password){
        this.user = user;
        this.email =user;
        this.password = password;
    }

    encryptpassword(){
        return `${this.password}abc`
    }
     changeuser(){
        return `${this.user.toUpperCase()}`
     }
}

const chai = new user("chai",'chai@.com',"123");
console.log(chai.encryptpassword());
console.log(chai.changeuser());







