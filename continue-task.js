console.log("Task 1:");
for(let i = 1; i<=40; i++){
    if(i % 2 != 0){
        continue;
    }
    else{
        console.log(i);
    }
}


console.log("Task 2:");
for(let j = 55; j<=85; j++){
    if(j % 2 != 0){
        if(j % 5 === 0){
            continue;
        }
        else{
            console.log(j);
        }
    }
}