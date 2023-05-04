const jwt = require("jsonwebtoken");

let userPayload = {
    name: "Rahul Gandhi",
    email: 'rahul@gmail.com'
}
let token = jwt.sign(userPayload, "TryNextTime");
console.log(token);