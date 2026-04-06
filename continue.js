//continue > skip rest of the code for this iteration
//break > stop the loop

// Using for Loop with continue:

for(let i = 1; i<10; i++){
    if(i % 2 != 0){
        continue;
    }
    console.log(i);
}

// Using while loop with continue:
let j = 0;
while(j < 50){
    j++;
    
    if(j % 5 !== 0){
        continue;
    }

    console.log(j);
    
}
