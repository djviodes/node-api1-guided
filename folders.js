// This 'require' syntax is another way to import a third-party library
const fs = require('fs')

// Create a new folder called 'data'
fs.mkdirSync('data')

// Create a new folder for each letter of the alphabet,
// inside the 'data' folder that was created above
for (let i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i)
    fs.mkdirSync(`data/${letter}`)
}