var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *=.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /=.95;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipped Ahead");
	
	if (video.currentTime < video.duration - 15){
		console.log("Current Time " + video.currentTime)
		video.currentTime += 15;
	}
	else {
		console.log("Restart Video")
		video.currentTime = 0;
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Muted");	
	
    if (video.muted == false) {    
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
 	}

 	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}

});



document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value);
	var slider = this.value;
	video.volume = slider / 100;
	volume.innerHTML = video.volume * 100 + "%";
});




document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool")
});