const price = 10000;

if(price >5000){
    // 10% discount
    const discount = price * 10 /100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else if (price > 2000){
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else{
    console.log("You Have to Pay Full Amount!!!")
}