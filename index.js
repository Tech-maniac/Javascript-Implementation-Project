//Storing references :
let timerRef = document.getElementById("timer");
let inputBoxRef = document.getElementById("myInput");
let submitRef = document.getElementById("submitButton");
let gameLostRef = document.getElementById("gameLost");
let correctAnswerRef = document.getElementById("correctAnswer");
let attemptsLeftRef = document.getElementById("attemptsLeft");

//window.addEventListener("DOMContentLoaded",showTimer)

let num= Math.ceil(Math.random()*10);
console.log(num);

let attemptsLeft = 3;

var inputValue;
console.log(inputValue);

submitRef.addEventListener('click',function(){
    
    inputValue = inputBoxRef.value;

    console.log("input value : "+inputValue);
    if(num == inputValue)
    {
        console.log("Working");
        //gameLostRef.innerHTML="";
        correctAnswerRef.innerHTML=`You have guessed the correct number, the number is : ${num}`
    }
    else if(num!=inputValue)
    {
        attemptsLeft=attemptsLeft-1;
        attemptsLeftRef.innerHTML=`You have ${attemptsLeft} attempts left..!`
        gameLostRef.innerHTML = `Wrong number! Try Again.`;
        document.body.style.backgroundColor="red";

        if(attemptsLeft==0){
            submitRef.disabled = true;
            gameLostRef.innerHTML = `Wrong number!, the number is : ${num}`;
        }
    }
});

//Creating timer : 
let seconds = 60;

const showTimer=()=>{

    intervalRef=setInterval(()=>{

        seconds = seconds - 1;
        timerRef.innerHTML="0 : "+ (seconds < 10 ? "0" : "") + String(seconds);

        //Stopping the timer :
        if(attemptsLeft == 0 || num == inputValue || seconds==0)
        {
            //Always pass the reference :
            clearInterval(intervalRef);
        }
    },1000)
}

showTimer();





