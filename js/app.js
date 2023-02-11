'user strict';

let responce = prompt('Welcome to my website, what is your name?..');
alert('Hello and welcome to my website ' + responce);
let responceTwo = prompt('Do I have Brown hair? Answer Yes or No ');
let userData = responceTwo.toLowerCase();
if(userData === null){
  alert('Please answer!!');
} else if (userData === 'yes' || userData === 'y') {
  alert('Correct');
} else if (userData === 'no' || userData === 'n') {
  alert('Incorrect');
}

let responceThree = prompt('Is today Monday? Answer yes or no');
let userDatatwo = responceThree.toLowerCase();
if(userDatatwo === null){
  alert('Please answer!!');
} else if (userDatatwo === 'yes' || userDatatwo === 'y');{
  alert('Correct');
} else if (userDatatwo === 'no' || userDatatwo == 'n'{
  alert('Incorrect');
}

let responceFour = prompt('Is today Sunny? Answer yes or no');
let userDatathree = responceFour.toLowerCase();
if(userDatathree === null){
  alert('Please answer!!');
} else if (userDatathree === 'yes' || userDatathree === 'y') {
  alert('Correct');
} else if (userDatathree === 'no' || userDatathree == 'n') {
  alert('Incorrect');
}

let responceFive = prompt('Am I tall or short? Answer yes or no');
let userDatafour = responceFive.toLowerCase();
if(userDatafour === null){
  alert('Please answer!!');
} else if (userDatafour === 'yes' || userDatafour === 'y') {
  alert('Correct');
} else if (userDatafour === 'no' || userDatafour === 'n') {
  alert('Incorrect');
}

let responceSix = prompt('Do I like and enjoy climbing trees? Answer yes or no');
let userDatafive = responceSix.toLowerCase();
if(userDatafive === null){
  alert('Please answer!!');
} else if (userDatafive === 'yes' || userDatafive === 'y') {
  alert('Correct');
} else if (userDatafive === 'no' || userDatafive === 'n') {
  alert('Incorrect');
}

alert("Thank you for visiting my site " + responce);



