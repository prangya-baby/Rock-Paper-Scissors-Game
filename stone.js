let myScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScore = document.querySelector("#my-score");
const compScore = document.querySelector("#com-score");

const genComChoice= ()=>{
    let options=["rock","paper","scissors"];
    const ranIndx = Math.floor(Math.random()*3);
    return options[ranIndx];
}

const drawGame =()=>{
    console.log("Game was draw.");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31"
}

const showWinner =(userWin) =>{
    if(userWin){
        myScore++;
        userScore.innerText = myScore;
        console.log("Congrats!! You win");
        msg.innerText = "Congrats!! You Win";
        msg.style.backgroundColor = "green";
    }
    else{
        comScore++;
        compScore.innerText = comScore;
        console.log("oops!! computer win");
        msg.innerText = "oops!! Computer Win";
        msg.style.backgroundColor = "red";
    }
};

const playGame=(userChoice)=>{
    console.log("userChoice = ",userChoice);
    const comChoice = genComChoice();
    console.log("compChoice =", comChoice);

    
    if (userChoice === comChoice){
        // draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
            // scissors or paper
           userWin = comChoice ==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            // rock or scissors
           userWin = comChoice === "scissors" ? false : true;
        }  
        else{
            //rock or paper
            comChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
})