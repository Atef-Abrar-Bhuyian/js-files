// continue --> skip rest of the code for this iteration

// break --> i am done with this loop, loop end

let n=0;
while (n <50){
    n++;
    if(n%5 !==0){
        continue;
    }
    console.log(n);
}