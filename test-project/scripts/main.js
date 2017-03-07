var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');

	if(mySrc === 'images/silverwing-gaming-logo.jpg') {
		myImage.setAttribute ('src','images/silverwing.jpg'); 
	} else {
		myImage.setAttribute ('src','images/silverwing-gaming-logo.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'SilverWing Gaming is awesome, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'SilverWing gaming is awesome, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}