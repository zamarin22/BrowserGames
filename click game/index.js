alert("Hello! Welcome to Clicking Game! 🎯\n\nThis took me a lot of working so, if you appreciate my work's. Don't forget to upvote!\n\nIf any bug's find, please comment it on the comment section.\n\nIf the sound is delay, i think it's because your internet is slow.");

let points = 0;
let multiplier = 1;
let pointsreq = 15;
let autoclicker1sREQ = 15000;
let autoClickerVal = 69;

/*
This will add the function adder
the purpose of this is, this will add numbers one by one like 1 -> 2 -> 3 -> 4.
*/
function pointsAdder() {
    points += multiplier;
    document.getElementById('points').innerHTML = points;
}
/*
the multiplier button
*/
function btn1() {
    //if the price is now perfect like if you reach 15 point's you will able to buy it.
    if(pointsreq <= points){
        //will deduct your point's because you bought it and it will keep the change
        points -= pointsreq;
        // it will multiply 2*
        multiplier *= 2;
        // it will double the price 
        pointsreq *= 2
        // you can see the requirements to buy
document.getElementById('btn1').innerHTML = "Multiply The Point's, Cost: "+pointsreq;
        //it will put it back to normal so the multiplying should work
        
        
        //will play the purchase sound
        document.getElementById('points').innerHTML = points;
        //audio src
                let audioBuy = new Audio('https://dl.dropbox.com/s/uordl1dqcx9dcxp/cash-register-purchase-87313.mp3?dl=0');
                  //uhh you know it
            audioBuy.play();
    }
    //will check if you don't have money
    else {
        alert("Not Enough Point's");
    }
}

//will create the function autoclicker 1s
function autoclicker1s() {
    if(points >= autoclicker1sREQ){
        alert('One Time Purchase!\nPlease Wait One Second')
        //will deduct the points because you bought it
        points -= autoclicker1sREQ;
        //will loop infinitely
        setInterval(()=>{
        points += autoClickerVal;
        document.getElementById('points').innerHTML = points;
        
    },1000)
        //audio src
                let audioBuy2 = new Audio('https://dl.dropbox.com/s/uordl1dqcx9dcxp/cash-register-purchase-87313.mp3?dl=0');
                  //uhh you know it
            audioBuy2.play();
    }
    //you can read it ↓
    else {
        alert("Not Enough Point's")
    }
}

//unnecesarry wouldn't work ↓

/*window.onload = function() {
    if(points >= pointsreq){
        let audioBuy = new Audio('https://dl.dropbox.com/s/uordl1dqcx9dcxp/cash-register-purchase-87313.mp3?dl=0');
        document.getElementById('btn1').addEventListener('click',function(){
            audioBuy.play();
        });
    }
}*/

//audio clicking is here
    window.onload = function(){
        //audio src
        let audioClick = new Audio('https://dl.dropbox.com/s/ukgals7vsxpgpra/mixkit-typewriter-soft-click-1125.wav?dl=0');

       //will play
 document.getElementById('button').addEventListener('click',function(){
        audioClick.play();
    });

    }