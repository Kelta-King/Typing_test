
let msg = new Array("Practicing with your typing can greatly help your overall computer skills.",
		"A new computer is sold in the US every hour!",
		"When do birds migrate from North to South?",
		"Perplexing phrases, like this one, are tougher to type."
	);

let word = 10;

let m = () => {

	msg = new Array("Practicing with your typing can greatly help your overall computer skills.",
		"A new computer is sold in the US every hour!",
		"When do birds migrate from North to South?",
		"Perplexing phrases, like this one, are tough to type."
	);
	word = 10;
	
}

let e = () => {

	msg = new Array("If you can correctly, and quickly, type this perplexing sentence, you are one superb typist!",
		"You are one superb typist if you can correctly, and quickly, type this long phrase.",
		"I believe you're a good typist, so I believe you will correctly copy this statement!",
		"Because this is not a fairly simple phrase, could you swiftly, and precisely, copy it?"
	);
	word = 15;
	
}

let s = () => {

	msg = new Array("Computers are the medium of the future.",
		"Can you type this phrase rather quickly?",
		"Who is the President of the US?",
		"I believe that you can type well!"
	);
	word = 7;
	
}
let beginIt = () => {

	randNum = Math.floor((Math.random()*10))%4;
	msgType = msg[randNum];
	day = new Date();
	startType = day.getTime();
	document.theForm.given.value = msgType;
	document.theForm.typed.focus();
	document.theForm.typed.select();
	
}

let cheat = () => {

	alert("You can not Copy-Past that!");
	document.theForm.typed.focus();

}

let stopIt = () => {

	dayTwo = new Date();
	endType = dayTwo.getTime();
	totalTime = ((endType - startType)/1000);
	spd = Math.round((word/totalTime)*60);
	
	if (document.theForm.typed.value == document.theForm.given.value) {
		alert("\nYou typed a " + word + " word sentence in "+ totalTime + " seconds, a speed of about " + spd + " words per minute!");
	}
	else {
		alert("You made an error, but typed at a speed of " + spd + " words per minute.");
	}
	
}

let theme = (color) => {
	
	if(color == ""){
		alert("Something went wrong");
		return;
	}
	
	if(!confirm('Are you changing theme during test?')){
		return;
	}
	
	let table = document.getElementById("table");
	let r1 = document.getElementById("row1");
	let r2 = document.getElementById("row2");
	let r3 = document.getElementById("row3");
	
	if(color == "black"){
		
		table.className = "w3-white";
		r1.className = "w3-black";
		r2.className = "w3-black";
		r3.className = "w3-black";
		
		document.getElementById('tblack').className = "w3-badge w3-black kel-hover w3-rightbar w3-leftbar w3-topbar w3-bottombar w3-border-blue";
		document.getElementById('twhite').className = "w3-badge w3-white kel-hover w3-rightbar w3-leftbar w3-topbar w3-bottombar";
	
	}
	else if(color == "white"){
		
		table.className = "w3-blue";
		r1.className = "w3-white";
		r2.className = "w3-white";
		r3.className = "w3-white";
		document.getElementById('twhite').className = "w3-badge w3-white kel-hover w3-rightbar w3-leftbar w3-topbar w3-bottombar w3-border-blue";
		document.getElementById('tblack').className = "w3-badge w3-black kel-hover w3-rightbar w3-leftbar w3-topbar w3-bottombar";
		
	
	}
	else{
		alert("Something went wrong");
	}
	
	//location.reload();
	
}

