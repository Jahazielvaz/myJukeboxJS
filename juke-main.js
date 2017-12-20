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
function Jukebox(pause, ff, rewind, stop){
  this.play = [];
  this.pause = pause;
  this.ff = ff;
  this.rewind = rewind;
  this.stop = stop;
};


//PLAY BUTTON
Jukebox.prototype.songFeeder = function(addSong){
  var song = new Audio(addSong);
  this.play.push(song);
};


var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var ffButton = document.getElementById("fast-forward");

var novemberRain = document.querySelector("#novemberRain");
var greenChildren = document.querySelector("#greenChildren");
var augustana = document.querySelector("#augustana");

playButton.addEventListener("click", function(){
  var songs = [greenChildren, augustana, novemberRain];
  for(i = 0; i < songs.length; i++){
      songs[i].play();
  }
}); //I don't know how to make the iterations count as each song finishes.
//SONG BANK
var newSong = new Jukebox();

newSong.songFeeder(playButton);


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
