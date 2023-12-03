let user = document.querySelector(".user")
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")
let computer = document.querySelector(".computer")
let result = document.querySelector(".result")
let userName = document.querySelector(".username")
let uscore = document.querySelector(".uscore")
let cscore = document.querySelector(".cscore")
let tableName = document.querySelector(".uname");
let comp = ["rock", "paper", "scissor"];

let userScore = 0;
let computerScore = 0;
rock.addEventListener("click", function(){
    game("rock", userName.value);
    user.textContent = "rock";
    tableName.textContent = userName.value;
})
paper.addEventListener("click", function(){
    game("paper", userName.value);
    user.textContent = "paper";
    tableName.textContent = userName.value;
})
scissor.addEventListener("click", function(){
    game("scissor", userName.value);
    user.textContent = "scissor";
    tableName.textContent = userName.value;
})
function game(userInput, name)
{
    let random = Math.floor(Math.random() * comp.length);
    let computerInput = comp[random];
    computer.textContent = `${computerInput}`;
    if(userInput === "rock" && computerInput === "rock")
    {
        result.textContent = "Draw"
    }
    else if(userInput === "rock" && computerInput === "paper")
    {
        result.textContent = "Computer WINs";
        computerScore++;
    }
    else if(userInput === "rock" && computerInput === "scissor")
    {
        result.textContent = `${name} WINs`;
        userScore++;
    }
    else if(userInput === "scissor" && computerInput === "scissor")
    {
        result.textContent = "Draw"
    }
    else if(userInput === "scissor" && computerInput === "rock")
    {
        result.textContent = "Computer WINs"
        computerScore++;
    }
    else if(userInput === "scissor" && computerInput === "paper")
    {
        result.textContent = `${name} WINs`
        userScore++;
    }
    else if(userInput === "paper" && computerInput === "paper")
    {
        result.textContent = "Draw"
    }
    else if(userInput === "paper" && computerInput === "rock")
    {
        result.textContent = `${name} WINs`
        userScore++;
    }
    else if(userInput === "paper" && computerInput === "scissor")
    {
        result.textContent = "Computer WINs"
        computerScore++;
    }
    displayScore(userScore, computerScore)
}

function displayScore(userpoint, computerpoint)
{
    uscore.textContent = `${userpoint}`;
    cscore.textContent = `${computerpoint}`;
}