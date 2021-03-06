document.addEventListener('DOMContentLoaded', init);
// variables
var countright = 0;
var countWrong = 0;
var totalquestions = 0;

function init(){
  creatingNumbers();
  // result();
  var resultButton = document.getElementById('answer')
  resultButton.addEventListener('click',getAnswer)

// getting values of each button and appending it to users result
  var numButtons =   document.querySelectorAll('#numButtons button')
  for(var i=0; i<numButtons.length;i++){
  numButtons[i].addEventListener('click',numButtonsClicked)
}
}

//crating Random Numbers
function creatingNumbers(){
  // var operator = ['-','+']
  // randomOperator = Math.floor(Math.random()*2)
  randNum1 = Math.floor(Math.random()*9+1)
  randNum2 = Math.floor(Math.random()*9+1)
  document.getElementById('random1').textContent=randNum1;
  document.getElementById('random2').textContent=randNum2;
  randomSum = randNum1 + randNum2
  console.log(randomSum);
}


// appending users selected numbers to user result div
function numButtonsClicked(){
   var number = this.textContent;
   userAnswer = document.getElementById('userNumbers');
  userAnswer.textContent +=number;
}

// getting answer function
function getAnswer(){
  var displayText=document.getElementById('resultDisplay')
  var text1 = userAnswer.textContent;
  userSum = eval(text1);
  // comparing random and user sum
  if(userSum===randomSum){
    displayText.textContent = 'right';
    countright +=1;
    // displaying correct answer in score board
    document.getElementById('rightcount').textContent= 'Correct Answers = ' + countright;
  }else{
    displayText.textContent = 'Nice try, correct answer is ' +  randomSum + '. Try again';
    countWrong +=1;
      // displaying wrong answer in score board
    document.getElementById('wrongcount').textContent= 'Wrong Answers = ' + countWrong;
}
  // clearing the random and user numbers after 2 second.
  var timeoutID = window.setTimeout(function() {
    // alert("Hello World!");
    creatingNumbers()
    userAnswer.textContent ='';
    totalquestions += 1;
    document.getElementById('totalquestions').textContent= 'Total Number of Questions = ' + totalquestions;

}, 2000)
}

// score board
