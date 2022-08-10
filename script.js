var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("window loaded")

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("play");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slower");
	video.playbackRate *=.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("faster");
	video.playbackRate /=.95;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip");
	
	if (video.currentTime < video.duration - 15){
		console.log("Current Time " + video.currentTime)
		video.currentTime += 15;
	}
	else {
		console.log("Restart Video")
		video.currentTime = 0;
	}
});

document.querySelector("#back").addEventListener("click", function() {
	console.log("back");
	
	if (video.currentTime){
		console.log("Current Time " + video.currentTime)
		video.currentTime -= 15;
	}
	else {
		console.log("Restart Video")
		video.currentTime = 0;
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute");	
	
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

document.querySelector("#slider2").addEventListener("change", function() {
	console.log(this.value);
	var slider2 = this.value;
	video.speed = slider2 / 100;
	volume.innerHTML = video.currentTime * 100 + "%";
});




document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool")
});


// Haptic event listeners

document.querySelectorAll('.vintage')
  .forEach(btn => 
    btn.addEventListener('click', () => document.body.style.width = "50%")
  );
