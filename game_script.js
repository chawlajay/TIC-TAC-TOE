let count=0;  // to decide the player to play , if even then PLAYER 1, else PLAYER 2

const matrix=document.querySelector(".matrix");

let squares=Array.from(document.querySelectorAll('.cell'));

const message=document.getElementById("message");

message.innerHTML="Player 1's Move";

const GLOWTEXT="glow";

function display_message(mes){
    message.innerHTML=mes;
}

function add_symbol(element){
    if(count%2)
    {
        //player 2 - X
        element.innerHTML="X";
        display_message("Player 1's Move");
    }
    else
    {
        //player 1 - O
        element.innerHTML="O";
        display_message("Player 2's Move");
    }
    element.classList.toggle(GLOWTEXT);
    count++;
}

matrix.addEventListener('click',(event)=>{
let clicked_cell_element = event.target;

if(clicked_cell_element.classList.contains('cell'))
{
    if(clicked_cell_element.innerHTML=="")
    {
        add_symbol(clicked_cell_element);
    }
}
});