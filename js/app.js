'user strict';

let responce = prompt('Welcome to my website, what is your name?..');
alert('Hello and welcome to my website ' + responce);
let responceTwo = prompt('Do I have Brown hair? Answer Yes or No ');
if(responceTwo === null){
  alert('Please answer!!');
} else if (responceTwo === 'yes') {
  alert('Correct');
} else if (responceTwo === 'no') {
  alert('Incorrect');
}

let responceThree = prompt('Is today Monday? Answer yes or no');
if(responceThree === null){
  alert('Please answer!!');
} else if (responceThree === 'yes') {
  alert('Correct');
} else if (responceThree === 'no') {
  alert('Incorrect');
}

let responceFour = prompt('Is today Sunny? Answer yes or no');
if(responceFour === null){
  alert('Please answer!!');
} else if (responceFour === 'yes') {
  alert('Correct');
} else if (responceFour === 'no') {
  alert('Incorrect');
}

let responceFive = prompt('Am I tall or short? Answer yes or no');
if(responceFive === null){
  alert('Please answer!!');
} else if (responceFive === 'yes') {
  alert('Correct');
} else if (responceFive === 'no') {
  alert('Incorrect');
}

let responceSix = prompt('Do I like and enjoy climbing trees? Answer yes or no');
if(responceSix === null){
  alert('Please answer!!');
} else if (responceSix === 'yes') {
  alert('Correct');
} else if (responceSix === 'no') {
  alert('Incorrect');
}

alert("Thank you for visiting my site " + responce);



