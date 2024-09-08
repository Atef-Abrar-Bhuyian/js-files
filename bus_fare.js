const age = 60;
const student = false;
let ticket = 800;
let discount

if (age < 10){
    console.log("Your Ticket is FREE!!");
}

else if (student==true){
    const ticket = 800 * 50/100;
    console.log("Ticket Price For Student is "+ ticket);
}

else if (age >= 60){
    const discount = 800 * 15/100;
    const ticket = 800 - discount;
    console.log("Ticket of People 60+ is "+ ticket);
}

else{
    console.log("Ticket Price 800TK.")
}