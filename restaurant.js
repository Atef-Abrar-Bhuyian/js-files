const age = 40;
const price =500;   

if (age<=12){
    console.log("You Can Eat Free!!!");
}

else if(age >= 60){ 
    // 50% discount
    const discount = price * 50 /100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else if (age >= 50){
    // 25% discount
    const discount = price * 25 /100;
    const payAmount = price - discount;
    console.log(payAmount);

}

else if (age >= 40){
    // 15% discount
    const discount = price * 15 /100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else if (age >= 30){
    // 10% discount
    const discount = price * 15 /100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else{
    console.log("You Have To Pay Full Amount!!!");
}