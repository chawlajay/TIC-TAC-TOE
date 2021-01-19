let count=0;  // to decide the player to play , if even then PLAYER 1, else PLAYER 2

const matrix=document.querySelector(".matrix");

let squares=Array.from(document.querySelectorAll('.cell'));

const message=document.getElementById("message");

message.innerHTML="Player 1's Move";

const GLOWTEXT="glow";

function display_message(mes){
    message.innerHTML=mes;
}

function disable_clicks(){
    matrix.style.pointerEvents='none';
}

function check_winner(){
    let win=0;
    //check horizontal cells
    for(let i=0;i<9;i+=3)
    {
        if(squares[i].innerHTML==squares[i+1].innerHTML && squares[i+1].innerHTML==squares[i+2].innerHTML)
        {
            if(squares[i].innerHTML=='O')
            {
                win=1;
            }
            else if(squares[i].innerHTML=='X')
            {
                win=2;
            }
        }
    }

    //check vertical cells
    for(let i=0;i<3;i++)
    {
        if(squares[i].innerHTML==squares[i+3].innerHTML && squares[i+3].innerHTML==squares[i+6].innerHTML)
        {
            if(squares[i].innerHTML=='O')
            {
                win=1;
            }
            else if(squares[i].innerHTML=='X')
            {
                win=2;
            }
        }
    }

    //check Primary Diagonal
    if(squares[0].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[8].innerHTML)
    {
        if(squares[0].innerHTML=='O')
            {
                win=1;
            }
            else if(squares[0].innerHTML=='X')
            {
                win=2;
            }
    }

    //check Secondary Diagonal
    if(squares[2].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[6].innerHTML)
    {
        if(squares[2].innerHTML=='O')
            {
                win=1;
            }
            else if(squares[2].innerHTML=='X')
            {
                win=2;
            }
    }

    if(win==1)
    {
        display_message("Player 1 WON the game ! *Congratulations*");
        disable_clicks();
    }
    else if(win==2)
    {
        display_message("Player 2 WON the game ! *Congratulations*");
        disable_clicks();
    }
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
    check_winner();
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