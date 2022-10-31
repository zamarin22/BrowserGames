window.onload=function(){
    var c;
    var canvas = document.querySelector("canvas");
    c=document.querySelector("canvas");
    c=c.getContext("2d");
    c.width=300;
    c.height=200;
    var ballX=c.width/2; //x axis start postition
    var ballY=c.height/2;//y axis start postition
    var ballRadius=4;
    var dx=1; //x velocity
    var dy=1; //y velocity
    var paddle1X=0, paddle1Y=80, paddle1WIDTH=3, paddle1HEIGHT=35;
    var paddle2X=297, paddle2Y=80, paddle2WIDTH=3, paddle2HEIGHT=35;
    var score1=0;
    var score2=0;
    var AI=.9; // AI= 0 for multiplayer
    
    
    //mousemove eventListener controls
    window.addEventListener("mousemove",function(event) {paddle1Y=event.clientY-innerHeight/2-paddle1HEIGHT/2+c.height/2; event.preventDefault();});
    //touchmove eventListener controls
    canvas.addEventListener("touchmove", function(e){
            var rect = canvas.getBoundingClientRect();
            var root = document.documentElement;
            var touch = e.changedTouches[0];
            var touchY = parseInt(touch.clientY) - rect.top - root.scrollTop ;
            e.preventDefault();
            paddle1Y = touchY - paddle1HEIGHT/2;});
            
            
            
            
            
    //keyboard controls
    function dealWithKeyboard(e) {
      if (e.keyCode == "81") { //q
        paddle1Y-=2;
      }
      else if (e.keyCode == "65"){ //a
        paddle1Y+=2;
      }
      if (e.keyCode == "38") { //arrow up
        paddle2Y-=2;
      }
      else if (e.keyCode == "40"){ //arrow down
        paddle2Y+=2;
      }
    }
    
    
    //game reset
    function reset(){ //reset game == center ball
      ballX=c.width/2; //center
      ballY=c.height/2; //center
      dx = 1; //reset speed
      dy = 1; //reset speed
      //AI = 1; //reset AI
    }
    
    //CORE ANIMATE FUNCTION  
    function animate(){
    requestAnimationFrame(animate);
      
    c.clearRect(0,0,c.width,c.height); // x, y, innerWidth, innerHeight //clears canvas
    c.beginPath(); //begin
      
    //canvas arc circle == ball
    c.arc(ballX, ballY, ballRadius, 0, Math.PI*2, false); //c.arc(x,y,r,startAngle,endAngle, drawCounterClockwise)
    c.fill(); //fill inside
    c.stroke();//stroke edges
      
      
    //canvas paddle1 == player 1 paddle
    c.beginPath(); //begin
    c.fillRect(paddle1X,paddle1Y,paddle1WIDTH,paddle1HEIGHT); //x,y,width,height
    
    
    //canvas paddle2 == player 2 paddle
    c.beginPath(); //begin
    c.fillRect(paddle2X,paddle2Y,paddle2WIDTH,paddle2HEIGHT); //x,y,width,height
      
      
    //score text for player 1 and player 2
    c.fillText(score1, 100, 10); //score 1
    c.fillText(score2, c.width-100, 10); //score 2 
      
    //game colors + random choice of color
    var gameColors=['red', 'green', 'blue', 'black', 'brown', '#741a1a', '#121f1f'];
    var randomColor = gameColors[Math.floor(Math.random() * gameColors.length)]; //index random color
      
      
    //IF BALL TOUCHES RIGHT PADDLE THEN BOUNCE BACK
    function paddle2Bounce(){
    if (ballX+ballRadius > c.width){
              
      if (ballY >= paddle2Y && ballY <= paddle2Y + paddle2HEIGHT) {
          dx = -dx-0.2; //bounce/reverse ball back + make it faster 0.2
        //dy = dy-0.1;
        //AI = AI-0.3; //make AI faster
        c.fillStyle = randomColor;
        //c.fillStyle = "#"+Math.random().toString(16).slice(-6); //get random color
       }
       else{
         score1++;
          reset();
       }
    }
    }
    // END OF RIGHT PADDLE BOUNCE
    
      
    //IF BALL TOUCHES LEFT PADDLE THEN BOUNCE BACK
    function paddle1Bounce(){
    if (ballX-ballRadius < 0){
              
      if (ballY >= paddle1Y && ballY <= paddle1Y + paddle1HEIGHT) {
        dx = -dx+0.2; //bounce/reverse ball back + make it faster 0.2
        //dy = dy+0.1;
        c.fillStyle = randomColor;
        //c.fillStyle = "#"+Math.random().toString(16).slice(-6); //get random color
      }
      else{
        score2++;
        reset();
      }
    }
    }
    //END OF LEFT PADDLE BOUNCE
                  
      
    //BOUNCE BALL IF IT TOUCHES TOP OR BOTTOM OF THE SCREEN
    function topBottomBounce(){
    if(ballY+ballRadius > c.height || ballY-ballRadius < 0){
      dy = -dy; //bounce/reverse ball
      //c.fillStyle = randomColor;
      //c.fillStyle = "#"+Math.random().toString(16).slice(-6); //get random color
    }
    }
      
    //IF PADDLE IS ABOVE OR BELOW CANVAS - GET IT BACK TO CANVAS
    function stayInCanvas(){
      if(paddle1Y+paddle1HEIGHT > c.height){
        paddle1Y=c.height-paddle1HEIGHT;
      }
      if(paddle1Y < 0){
        paddle1Y=0;
      }
      if(paddle2Y+paddle2HEIGHT > c.height){
         paddle2Y=165;
         }
      if(paddle2Y < 0){
         paddle2Y=0;
         }
    }
    
      
    //AI player
    function AIPlayer(){
    if(paddle2Y+paddle2HEIGHT/2 < ballY){
      paddle2Y+=AI;
    }
    else{paddle2Y-=AI;}
    }
    
    
    //move my ball in x and y axis
    function moveBallXandYaxis(){
      ballX+=dx; //run ball in x axis
      ballY+=dy; //run ball in y axis
    }
    
    /*
    >>>>>>>>>>CALLING FUNCTIONS<<<<<<<<<<
    */
    moveBallXandYaxis(); //moving ball in x and y axis
    paddle1Bounce(); //bounce/reverse ball from paddle1
    paddle2Bounce(); //bounce/reverse ball from paddle2
    topBottomBounce(); //top and bottom bouncing/reversing ball
    stayInCanvas(); //paddle1 Y axis can be only in canvas.height
    AIPlayer(); //init AI player
    
    } //end of animate(); function
      
     animate(); //init animate(); function
    
    }; //end of onload function