const myScore = 88;
const friendScore = 20;

if (myScore >80){
    if (friendScore > 80){
        console.log("Lets Go For Lunch!");
    }

    else if (friendScore <80 && friendScore >= 60){
        console.log("Good Luck Next Time My Friend.");
    }

    else if(friendScore <=59 && friendScore >= 40){
        console.log("I am gonna unseen your messages");
    }
    
    else if(friendScore <40){
        console.log("Blocking!!!");
    }
}

else {
    console.log("Going Home & Acting Sad!!!!!!");
}

