const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const ques1 = document.getElementById("ques");
const form1 = document.getElementById("form");
const input1 = document.getElementById("input");
const score1=document.getElementById("score");

const correctAns = num1 * num2;
let score =JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

score1.innerText=`score:${score}`

ques1.innerText = `What is ${num1} multiply by ${num2}?`;
form1.addEventListener("submit",() => {
   const  userAns = +input1.value;
   if(userAns==correctAns){
    score++;
    updateLocalStorage()

   }else{
    score--;
    updateLocalStorage();
   }
});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}

