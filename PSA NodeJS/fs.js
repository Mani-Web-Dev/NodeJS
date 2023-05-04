//  File System

// Data Sources

/**
 * Text File abc.text
 * Json File abc.json
 * csv File abc.csv
 */

const fs = require("fs")

fs.readFile("abc.json", "utf-8", (err, data) => {
    if (err) throw error
    console.log(data);

    fs.writeFile("xyz.json", data, (err, data) => {
        if (err) throw err;
        console.log("file writing successful");
    })
})


