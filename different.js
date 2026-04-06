// Odd numbers

console.log("Task 1: Print Odd Numbers");
for(let i = 0; i < 20 ; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}

console.log("Task 1: Print Odd Numbers");
for(let i = 0; i < 20 ; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}


console.log("Task 1: Print Odd Numbers");
for(let i = 1; i < 20 ; i+=2){
    console.log(i);
}

// print the number between 1 to 30 divisible by 5
console.log("Number Divisible by 5 between 1 to 30");
for(let i = 1; i<=30; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}


// print the number between 1 to 30 divisible by 3
console.log("Number Divisible by 3 between 1 to 30");
for(let i = 1; i<=30; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}


// print the number between 1 to 30 divisible by 3 or 5
console.log("Number Divisible by 3 or 5 between 1 to 30");
for(let i = 1; i<=30; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(i);
    }
}


// print the number between 1 to 30 divisible by 3 and 5
console.log("Number Divisible by 3 and 5 between 1 to 30");
for(let i = 1; i<=30; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}

// print the sum of numbers from 1 to 20 that are divisible by 3
let sum = 0;
for(let i = 1; i<=20 ; i++){
    if(i % 3 === 0){
        sum += i;
    }
}
console.log("The sum of divisible by 3 all numbers: ", sum);