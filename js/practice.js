// program to print prime numbers between the two numbers

const lowerNumber = parseInt(prompt('Enter the lower number: '));
const higherNumber = parseInt(prompt('Enter the higher number: '));

// Looping from lowerNumber to higherNumber

for(let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // Looping through 2 to user input number

    for(j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    };

    // If number greater than 1 and not divisible by other numbers

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}


