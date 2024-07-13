let boxes  = document.querySelectorAll(".box")
let rstBtn =  document.querySelector("#rstBtn");
let newGamebtn =  document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO  = true;  //playerX,playerX
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

//reset game:
const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
};




boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turnO === true){
            box.innerText = "O";
            turnO = false;//now turn is of player_X:
        }
        else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })

})





// disableBoxes
const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
};



// enableBoxes
const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText ="";
       }
};



//showing the winner box: 
const showWinner = (winner) =>{
     msg.innerText = `Congratulations! winner is ${winner}`;
     msg.style.color="black";
     msgcontainer.classList.remove("hide");
     disableBoxes();
}




const checkWinner = () =>{
    for(let pattern of winPatterns){
    let pos1Val =  boxes[pattern[0]].innerText;
    let pos2Val =  boxes[pattern[1]].innerText;
    let pos3Val =  boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){//value empty nhi honi chaiye:
        if(pos1Val === pos2Val && pos2Val === pos3Val){//now we will check all three values are same or not:
        //    console.log("winner",pos1Val);
           showWinner(pos1Val);
        }

    }
    }

};

const draw = (count) =>{
    if(count === 9){
        console.log("match is draw")
    }
}
newGamebtn.addEventListener("click",resetGame);
rstBtn.addEventListener("click",resetGame);

   

