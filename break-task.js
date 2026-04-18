// Task 1: 

console.log("Task 1:");
for(let i = 1; i<= 200; i++){
    console.log(i);

    if(i == 100){
        break;
    }
    
}


// Task 2:
console.log("Task 2:"); 
let i = 1;
let sum = 0;

while(i){
    sum += i;
    i++;

    if(sum >= 100){
        break;
    }
}
console.log(sum);


//Task 3:
console.log("Task 3:");
let k = 1;
console.log(k);
while(k <= 100){
    
    k++;
    
    if(Number.isInteger(Math.sqrt(k))){
       break;
    }
    
    console.log(k);
}




