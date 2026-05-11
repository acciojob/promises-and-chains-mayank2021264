//your JS code here. If required.
let submit = document.getElementById('btn');
let form = document.getElementById('myForm');

function PromiseChaining(event){
	event.preventDefault();
	let Uage = parseInt(document.getElementById('age').value);
	let Uname = document.getElementById('name').value;
	if(isNaN(Uage) || !Uname){
		alert("Please enter valid details");
		return ;
	}
	let myPromise = new Promise((resolve, reject) => {
		if(Uage >=18){
			setTimeout(() => {
				resolve("Welcome, You can vote.");
			},4000);
		}
		else{
			setTimeout(() => {
				resolve("Oh sorry . You aren't old enough.");
			},4000);
		}
	});

	myPromise.then((message) => {
		alert(message);
		console.log("promise resolved");
	}).catch((err) => {
		console.log("error", err);
	});
}

form.addEventListener('submit', PromiseChaining);