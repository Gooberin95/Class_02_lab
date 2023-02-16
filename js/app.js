'user strict';
function myfunction(response) {
  let input  = prompt(response).toLowerCase();
  alert('Hello and welcome to my website ' + input);
}

myfunction('What is your name?');
function yesIsCorrect(response2) {
  let input = prompt(response2).toLowerCase();
  if (input === null) {
    alert('Please answer!!');
  } else if (input === 'yes' || input === 'y') {
    alert('Correct');
  } else if (input === 'no' || input === 'n') {
    alert('Incorrect');
  }
}

yesIsCorrect('Do I have Brown hair?');
yesIsCorrect('Is today Monday?');
yesIsCorrect('Is today Sunday?');
yesIsCorrect('Am I tall or short?');
yesIsCorrect('Do I like and enjoy climbing trees? Answer yes or no');
function guessingGame(ImThinkingOfANumber){
  let r = 6;
  let exit = 4;
  while (exit) {
    let numericalInput = prompt(ImThinkingOfANumber);
    parseInt(numericalInput);
    if (numericalInput === null) {
      alert('Please answer!!');
    } else if (numericalInput === r) {
      alert('Correct');
      break;
    } else if (numericalInput < r) {
      alert('Incorrect to low');
      exit--;
    } else if (numericalInput > r) {
      alert('Incorrect to high');
      exit--;
    }
  }
}

let input = 'I\'m thinking of a number between 1 and 10 what is it?';

guessingGame(input);

// let box = 1;
// let h = true;
// while (h) {
//   let responceEight = prompt('How many colors from this list are on a tiger? Answer numericaly   ');
//   if (responceEight > box) {
//     alert('Please answer!!');
//     h === false;

//   } else if (responceEight === null); {
//     alert('Try again');

//   }
// }


// alert('You were incorrect ' + x + ' Out of 4' + ' The correct answer is 6');
