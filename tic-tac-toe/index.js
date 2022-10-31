window.onload = event => {
    tileLayout();
}
  
function tileLayout() {

    let board = document.getElementById("board");
    let tiles = board.getElementsByTagName("div");
    let announcer= document.getElementById("status");
    let arr = new Array(9);
    let lastPlayer = "O";
    let index = 0;

    const btn= document.querySelector("button"); //New-game button

    let gameEnded= false;

    for (let shape of tiles) {
        shape.classList.add("square"); // Adds squares to board
        shape.id = index++; // Allow players to alternate

        shape.onclick = (event) => {

            //Prevents cheating
            if (shape.innerHTML!="" || gameEnded) return;

            if (lastPlayer === "X") {
                event.target.innerText = "O";
                event.target.classList.add("O");
                arr[event.target.id] = "O";
                lastPlayer = "O";
            }
            else if (lastPlayer === "O") {
                event.target.innerText = "X";
                event.target.classList.add("X");
                arr[event.target.id] = "X";
                lastPlayer = "X";
            }

            //Determining Winner
            if (
                (arr[0]!=null && (arr[0]===arr[1]&&arr[1]===arr[2])) ||
                (arr[3]!=null && (arr[3]===arr[4]&&arr[4]===arr[5])) ||
                (arr[6]!=null && (arr[6]===arr[7]&&arr[7]===arr[8])) ||
                (arr[0]!=null && (arr[0]===arr[3]&&arr[3]===arr[6])) ||
                (arr[1]!=null && (arr[1]===arr[4]&&arr[4]===arr[7])) ||
                (arr[2]!=null && (arr[2]===arr[5]&&arr[5]===arr[8])) ||
                (arr[0]!=null && (arr[0]===arr[4]&&arr[4]===arr[8])) ||
                (arr[2]!=null && (arr[2]===arr[4]&&arr[4]===arr[6]))
                ){
                  announcer.classList.add("you-won");
                  announcer.innerHTML= `Congratulations! ${lastPlayer} is the winner!`;
                  gameEnded=true;
                }
        };

        shape.onmouseover = event =>{
            if(!gameEnded){
                event.target.classList.toggle("hover");
            } 
        }; // Change tile color to coral when hovered

        shape.onmouseleave = event =>{
            event.target.classList.remove("hover");
        }; // Tile color goes back to normal when its not hovered

    }

    //New-Game Button
    btn.addEventListener("click", function(){
        arr= new Array(9);
        gameEnded= false;
    
        announcer.classList.remove("you-won");
        announcer.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        lastPlayer= "O";
        
        for(shape of tiles){
          shape.classList.remove("X");
          shape.classList.remove("O");
          shape.innerText = "";
          
        }
      })


}
  
  