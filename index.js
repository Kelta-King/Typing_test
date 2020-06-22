
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

let once = 0;

let stopIt = () => {

	if(once == 0){
		
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
		
		once += 1;
		let scorebar = document.getElementById("score");
		let temp = spd-10;
			
		x = setInterval(function(){
			
			scorebar.innerHTML = "<span style='font-size:24px;'>"+temp+"</span>/minute";
			temp++;
			if(temp > spd){
				
				clearInterval(x);
				
			}
		
		}, 30);
		
		scorebar.innerHTML = "<span style='font-size:24px;'>"+spd+"</span>/minute";
		
	}
	else{
		
		//do nothing
		
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
	
	let back = document.getElementById("back");
	let sbutton = document.getElementById("start");
	let given = document.getElementById("given");
	let write = document.getElementById("write");
	let sub = document.getElementById("submit");
	let circle = document.getElementById("scoreTable");
	
	if(color == "black"){
		
		back.className = "w3-content w3-white w3-margin w3-card w3-black";
		sbutton.className = "w3-button kel-hover w3-blue w3-hover-green";
		given.className = "w3-center w3-margin-top w3-dark-gray";
		write.className = "w3-border w3-dark-gray";
		sub.className = "w3-button w3-green kel-hover w3-margin-top";
		document.body.className = "w3-dark-gray";
		circle.className = "kel-circle w3-dark-gray";
		
		document.getElementById('tblack').className = "w3-badge w3-black kel-hover w3-rightbar w3-leftbar w3-topbar w3-bottombar w3-border-blue";
		document.getElementById('twhite').className = "w3-badge w3-white kel-hover w3-rightbar w3-leftbar w3-topbar w3-bottombar";
	
	}
	else if(color == "white"){
		
		back.className = "w3-content w3-white w3-margin w3-card";
		sbutton.className = "w3-button kel-hover w3-blue w3-hover-green";
		given.className = "w3-center w3-margin-top";
		write.className = "w3-border";
		sub.className = "w3-button w3-green kel-hover w3-margin-top";
		document.body.className = "w3-white";
		circle.className = "kel-circle w3-light-blue";
		
		document.getElementById('twhite').className = "w3-badge w3-white kel-hover w3-rightbar w3-leftbar w3-topbar w3-bottombar w3-border-blue";
		document.getElementById('tblack').className = "w3-badge w3-black kel-hover w3-rightbar w3-leftbar w3-topbar w3-bottombar";
		
	
	}
	else{
		alert("Something went wrong");
	}
	
	//location.reload();
	
}


