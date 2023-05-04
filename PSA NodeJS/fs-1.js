
const fs = require("fs");


fs.readFile("notes.txt", (err, data) => {
    if (err) throw err;
    console.log(String(data))
})

fs.writeFile("notes-2.txt", "This is the content to be written2", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Data Writing successfull")
})

fs.appendFile("notes-2.txt", "\nThis is the new appended Data", (err) => {
    if (err) throw err;
    console.log("You have appended the data successfully")
});



