// var song = new song({
//   urls: ["greenChildren.mp3"]
// }).play();

// document.getElementById("play").addEventListener(click,)

// (function(exports){
//
//
//
//
//
// })(this);

//MAIN CONSTRUCTOR
// function Jukebox(pause, ff, rewind, stop){
//   this.play = [];
//   this.pause = pause;
//   this.ff = ff;
//   this.rewind = rewind;
//   this.stop = stop;
// };


//PLAY BUTTON
// Jukebox.prototype.songFeeder = function(addSong){
//   var song = new Audio(addSong);
//   this.play.push(song);
// };

//JUKE BUTTONS
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
// var ffButton = document.getElementById("fast-forward");
var rewind = document.getElementById("rewind");
var stop = document.getElementById("stop");

var shuffle = document.getElementById("shuffle");
var playlists = document.getElementById("playlists");


//SONG LIST /////////////////

//Rock
var novemberRain = document.querySelector("#novemberRain");
var onlyException = document.querySelector("#paramore");
var zombie = document.querySelector("#cranberries");

//Pop
var syml = document.querySelector("#syml");
var sheeran = document.querySelector("#perfect");
var augustana = document.querySelector("#augustana");

//Indie
var greenChildren = document.querySelector("#greenChildren");
var linkin = document.querySelector("#lp");
var disney = document.querySelector("#disney-love-med");
var riverFlows = document.querySelector("#riverFlows");

var songs = [greenChildren, augustana, novemberRain];

//Playlists
var rock = document.getElementById("rock");
var pop = document.getElementById("pop");
var indie = document.getElementById("indie");



playButton.addEventListener("click", function(){
  for(i = 0; i < songs.length; i++){
      songs[i].play();
  }
}); //I don't know how to make the iterations count as each song finishes.
//SONG BANK
// var newSong = new Jukebox();

// newSong.songFeeder(playButton);
//
// var lp = document.getElementById("lp");



//PRACTICE SECTION

// var sample1 = document.createElement("p");
// var sample2 = document.createTextNode("This is just a sample text")
// sample1.appendChild(sample2);
//
// var sample3 = document.getElementById("temp");
// sample3.appendChild(sample1);





















//
// playButton.addEventListener("click", function(){
//   novemberRain.play();
//   document.getElementById("song-name").innerHTML = "Guns N Roses - November Rain Solo" + "<br>" + "Playing";
// });
//
// pauseButton.addEventListener("click", function(){
//   novemberRain.pause();
//     document.getElementById("song-name").innerHTML = "Guns N Roses - November Rain Solo" + "<br>" + "Paused";
// });
//
// ffButton.addEventListener("click", function(){
//   for(i = 0; i < songList.length; i++){
//     return songList[i];
//   }
// })
