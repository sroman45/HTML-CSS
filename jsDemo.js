// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var age = prompt("how old are you?");

// var years;

// if(age > 1) {
// 	years = "years";
// }
// else {
// 	years = "year";
// }

// console.log("Your full name is " + firstName + " " + lastName);
// console.log("You are " + age +  " " + years + " old");

// // CONDITIONALS

var newAge = prompt("How old are you?");

if(newAge < 0) {
	console.log("Your age is not a real number!");
}

if(newAge == 21) {
	console.log("Happy 21st birthday!!!");
}

if((newAge % 2) == 1) {
	console.log("Your age is odd!");
}

if(newAge % Math.sqrt(newAge) === 0) {
	console.log("Your age is a perfect square!");
}

//SIMPLE GUESSING GAME

alert("Starting the guessing game!");

var secretNum = Math.floor(Math.random() * 10);
alert(secretNum);

var guess = Number(prompt("Try and guess the number that im thinking that is between 1 - 100"));

while(guess !== secretNum)
{
	if(guess < secretNum)
	{
		guess = Number(prompt("Too low! Try again!"));
	}
	
	if(guess > secretNum)
	{
		guess = Number(prompt("Too high! Try again!"));
	}
}

alert("You got it!");

