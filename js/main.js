"use strict";
function sendMessage() {
  	   alert('The message for '+$('#currentLocation').val() + ' ' +$('#createdOn').val()+ ' has been sent!');
  		// Look at the bottom of the preview to see the second variant to display the created account
  		$('#demo').text('Hello Chatter '+$('#currentLocation').val() + ' ' +$('#createdOn').val()+ ' has been created!');
}
// This is the constructor function 
function Student (a,b,c,d) {
	this.firstName = a;
  	this.lastName = b;
  	this.idNumber = c;
  	this.program = d;
}

var student1 = new Student("Josh","Bryant","id001","Computer Science");
var student2 = new Student("Kelsie","Summer","id002","Management");

function show() {
 	document.getElementById("demo1").innerHTML = student1.firstName +" "+student1.lastName + " studies " + student1.program + ".";
  	document.getElementById("demo2").innerHTML = student2.firstName +" "+student2.lastName + " studies " + student2.program + ".";
}



