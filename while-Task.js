// Task 1
console.log("Task 1:");
let i = 1;
while(i<=60){
    console.log(i," I will invest at least 6 hrs every single day for next 60 days!");
    i++;
}

// Task 2:
console.log("Task 2:");
let i1 = 61;
while(i1<=100){
    if(i1 % 2 != 0){
        console.log(i1);
    }
    i1++;
}


// Task 3:
console.log("Task 3:");
let i2 = 78;
while( i2<=98){
    if(i2 % 2 == 0){
        console.log(i2);
    }
    i2++;
}


// Task 4:
console.log("Task 4:");
let sum = 0, i4 = 81;
while(i4 <= 131){
    if(i4 % 2 != 0){
        sum += i4;
    }

    i4++;
}
console.log("Sum of all odd number between 81 to 131: ",sum);


// Task 5:
console.log("Task 5:");
let sum1 = 0;
let i5=206;
while( i5<=311){
    if(i5 % 2 == 0){
        sum1 += i5;
    }

    i5++;
}
console.log("Sum of all even number between 91 to 129: ",sum1);


// Task 6:
console.log("Task 6:");
let multiply = 1,i7=1;
while(i7<=10){
    multiply = i7 * 5;
    console.log("5 * ",i7, "= ",multiply);
    i7++;
}


// Task 7:
console.log("Task 7: (Using Set Interval Function)");
let sec = 21; 
const timer = setInterval(() => {

    console.log(sec);
    sec--;

    if(sec == 14){
        clearInterval(timer);
    }

}, 1000);