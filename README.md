# JS Video Player

## [LIVE](https://mathcodes.github.io/Javascript-Video-Player/)

![screenshot of video](https://raw.githubusercontent.com/mathcodes/Javascript-Video-Player/main/assets/JSVideoPlayer.png)

## 

## Document Properties and Methods Used:
 - `Document.querySelector()` returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, this method returns `null`.

 - `EventTarget.addEventListener()` sets up a function that will be called whenever the specified event ("click") is delivered to the target.

 - `Element.innerHTML` sets or returns the HTML content (inner HTML) of an element.

 - `HTMLMediaElement.play()` event is fired when the paused property is changed from true to false, as a result of the play method, or the autoplay attribute.

 - `HTMLMediaElement.volume` property sets the volume at which the media will be played.

 - `HTMLMediaElement.playbackRate` property sets the rate at which the media is being played back. This is used to implement user controls for fast forward, slow motion, and so forth. The normal playback rate is multiplied by this value to obtain the current rate, so a value of 1.0 indicates normal speed.

 - `HTMLMediaElement.currentTime` property specifies the current playback time in seconds. Changing the value of currentTime seeks the media to the new time.
   - ```video.currentTime += 15;``` fast-forwards 15 seconds
   - ```video.currentTime -= 15;``` rewinds 15 seconds
   - ```video.currentTime = 0;``` rewinds to the beginning of the video


 - `HTMLMediaElement.muted` indicates whether the media element muted. (BOOLEAN)

## HTML
All the buttons are created with the `<button>` tag and have the corresponding id tag to be used in the event listeners above.

Here is an example of the PLAY button:

```html
<button id="play" class="button is-large imgBox">
  <i class="fa-solid fa-play"></i>
</button>
```
This corresponds to the following JS:
```js
document.querySelector("#play").addEventListener("click", function() { 
	console.log("play");
	video.play(); 
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"; 
});
```

## `<input> elements`
The last main element to take note of in this application is the input with type="range":
`<input> elements` of type range let the user specify a numeric value which must be no less than a given value, and no more than another given value.
