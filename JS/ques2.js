function sumOfDigits(a) {
    let sum = 0;
    while (a !== 0) {
        sum += a % 10;
        a = Math.floor(a / 10);
    }
    console.log(sum);
}
sumOfDigits(245);
