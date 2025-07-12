
let reverse = 0;
for (let number = 48; number !== 0; number = Math.floor(number / 10)) {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
}

console.log("Reversed number is: " + reverse);
