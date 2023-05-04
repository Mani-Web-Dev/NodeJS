const bcrypt = require("bcrypt");

let userPayload = {
    uid: 101,
    name: 'Rahul Gandhi',
    password: "RG123",
    CC: "1111 2222 3333 4444"
}

console.log(userPayload);


let salt = bcrypt.genSaltSync(10);

let newPassword = bcrypt.hashSync(userPayload.password, salt)

console.log(salt);
console.log(newPassword);


userPayload = { ...userPayload, password: newPassword }

console.log(userPayload)


let flag = bcrypt.compareSync("RG123", userPayload.password);

flag ? console.log("Login Successfull") : console.log("Login Failed");