const lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] // Initialize lowercase character
const uppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] // Initialize uppercase character
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] // Initialize numbers character
const symbols = ["!","\"","#","$","%","&", "'","(",")","*","+",",","-",".","/",":",";","<",">","?","@","[","]","\\","^","_","{","|","}","~","`","¨","µ","£","¤","§","€"] // Initialize symbols character
const pswdlength = process.argv[2] // length password
let password = ''
let c = ''
let j = ''

for (let i = 0; i < pswdlength; i++) {
    j = Math.floor(Math.random() * Math.floor(4))

    switch (j) {
        case 0:
            c = Math.floor(Math.random() * Math.floor(lowers.length))
            password += lowers[c]
            break;
        case 1:
            c = Math.floor(Math.random() * Math.floor(uppers.length))
            password += uppers[c]
            break;
        case 2:
            c = Math.floor(Math.random() * Math.floor(numbers.length))
            password += numbers[c]
            break;
        case 3:
            c = Math.floor(Math.random() * Math.floor(symbols.length))
            password += symbols[c]
            break;
        }
}
console.log( `Your new password is ${password}` )