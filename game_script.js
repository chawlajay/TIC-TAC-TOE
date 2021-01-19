let count=0;  // to decide the player to play , if even then PLAYER 1, else PLAYER 2

const matrix=document.querySelector(".matrix");

let squares=Array.from(document.querySelectorAll('.cell'));

const message=document.getElementById("message");

function add_symbol(element){
    if(count%2)
    {
        //player 2 - X
        element.innerHTML="X";
        count++;
    }
    else
    {
        //player 1 - O
        element.innerHTML="O";
        count++;
    }
}
