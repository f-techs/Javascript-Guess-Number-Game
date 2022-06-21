  //declare variables
  let score = 20;
  const marksScore = document.getElementById("marks-score");
  const highScore=document.getElementById("high-score");
  const guessCaption=document.getElementById("guess-meter");
  const inputValue=document.getElementById("input-number");
  let randomNumber = Math.floor((Math.random() * 100) + 1);
  const btnCheck=document.getElementById("btnCheck");
  const labelCaption=document.querySelector("label");
  const body=document.querySelector('body');
  const circleIcon=document.querySelector('.circle-icon');
  const thinkImage=document.querySelector('.thinker-image');
  const showRandomNumber=document.getElementById('guessed-number');
  const btnTryAgain=document.querySelector('.retry-button');
  const bodyColors = ['brown', 'red', 'blue', 'black', 'peru', 'pink', 'purple', 'palegreen', 'gray']
  const obtainedMarks=[];

  //set score
  marksScore.textContent=score;
  guessCaption.textContent=`Start Guessing...🤔`
  console.log(randomNumber);
  //display random number to show when guess is right but do not display
//   if(randomNumber.toString().length === 1){
    
//   }else{
//     showRandomNumber.textContent=randomNumber;
//   }

  (randomNumber.toString().length === 1) ? showRandomNumber.textContent=`0${randomNumber}` : showRandomNumber.textContent=randomNumber;

  //hide correct random number and retry button
 showRandomNumber.style.display='none';
 btnTryAgain.style.display='none';


  //function to calculate highscore
  function displayText(element, text){
     return element.textContent=text;
}



  //function for game logic
  function guessNumber(){
    //check if a number is entered
    if(!inputValue.value){
        //message to display when number is not entered
        displayText(labelCaption, `The Input Can't be empty`);
        //change text color for user to notice fast
        labelCaption.style.color='red';
        //check if input is a number 
    }else if(!Number(inputValue.value)){
        //message to display if input is not a number
        displayText(labelCaption, `Enter only a number`);

        //change text color
        labelCaption.style.color='red';

        //check if input number is within range
    }else if(Number(inputValue.value) > 100 || Number(inputValue.value) < 0){
        //message to display if input number is not within range
         displayText(labelCaption, `You input is out of range`);

        //change text color for quick notice
        labelCaption.style.color='red';
    }else{

        //after checking if everything is alright reset caption back
        displayText(labelCaption, `Enter Number`);
        labelCaption.style.color='white';

        //check for correct guess of number
        if(randomNumber === Number(inputValue.value)){

            //message to display if guess is correct
            displayText(guessCaption, `Hurray! U guessed right 💃`)

            //change background color to draw user attention
            body.style.backgroundColor='green'

            
            //highScore.textContent=score;

            //remove thinking emoji
            thinkImage.style.display='none';

            //show the random number
            showRandomNumber.style.display='block';

            //show try again button
            btnTryAgain.style.display="inline-block";

            //get and check obtained marks
           obtainedMarks.push(score);
           displayText(highScore, Math.max(...obtainedMarks))
           console.log(obtainedMarks);

            //logic to show how close or far input number is from the random number
        }else{
            (randomNumber > Number(inputValue.value)) ?  displayText(guessCaption, `Your guess is low 📉`): displayText(guessCaption, `Your guess is high 📈`);
            score--;
            displayText(marksScore, score);
            body.style.backgroundColor=bodyColors[Math.trunc(Math.random() * bodyColors.length)];
            if(score < 1){

                //display message if chance is exhausted  
            displayText(guessCaption, `You loss the game 😪`);
                //reset score to 0
            score=0;
            displayText(marksScore, score)
                //show try again button
             btnTryAgain.style.display="block";
            }

        }
    }
  
  }



  function tryAgain(){
    //reset all necessary variables
   randomNumber = Math.floor((Math.random() * 100) + 1);
   showRandomNumber.style.display='none';
   thinkImage.style.display='block';
   score=20;
   marksScore.textContent=score;
   inputValue.value='';
   guessCaption.textContent='';
   console.log(randomNumber);
   btnTryAgain.style.display='none';
   body.style.backgroundColor='#0A3F8E';
   displayText(guessCaption, `Start Guessing...🤔`)
  }
 
  btnCheck.addEventListener('click', ()=>{
    guessNumber();
  })
  
 btnTryAgain.addEventListener('click', ()=>{
   tryAgain();
  })