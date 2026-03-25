// Task 1
console.log("Task 1:");
for(let i = 1; i<=60; i++){
    console.log(i," I will invest at least 6 hrs every single day for next 60 days!");
}

// Task 2:
console.log("Task 2:");
for(let i = 61; i<=100; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}


// Task 3:
console.log("Task 3:");
for(let i = 78; i<=98; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}


// Task 4:
console.log("Task 4:");
let sum = 0;
for(let i=91; i<=129; i++){
    if(i % 2 != 0){
        sum += i;
    }
}
console.log("Sum of all odd number between 91 to 129: ",sum);


// Task 5:
console.log("Task 5:");
let sum1 = 0;
for(let i=51; i<=85; i++){
    if(i % 2 == 0){
        sum1 += i;
    }
}
console.log("Sum of all even number between 91 to 129: ",sum1);


// Task 6:
console.log("Task 6:");
let multiply = 1;
for(let i=1; i<=10; i++){
    multiply = i * 9;
    console.log("9 * ",i, "= ",multiply);
}


// Task 7:
// Using Set Interval Function:
console.log("Task 7 (Using Set Interval Function):");
let sec = 81;
const timer = setInterval(() => {
    console.log(sec);
    sec--;

    if(sec == 64){
        clearInterval(timer);
    }
}, 1000);