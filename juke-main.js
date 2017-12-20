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
  var innerSong = this.play.push(addSong);
  return innerSong;
};

Jukebox.prototype.songExecute = function(addSong){
  return songFeeder(addSong);
};


var newSong = new Jukebox();

newSong.songFeeder("Billy Jean");



//SONG BANK

var novemberRain = document.querySelector("#novemberRain");
var greenChildren = document.querySelector("#greenChildren");
var augustana = document.querySelector("augustana");

var songList = [novemberRain, greenChildren, augustana];

var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var ffButton = document.getElementById("fast-forward");

playButton.addEventListener("click", function(){
  novemberRain.play();
  document.getElementById("song-name").innerHTML = "Guns N Roses - November Rain Solo" + "<br>" + "Playing";
});

pauseButton.addEventListener("click", function(){
  novemberRain.pause();
    document.getElementById("song-name").innerHTML = "Guns N Roses - November Rain Solo" + "<br>" + "Paused";
});

ffButton.addEventListener("click", function(){
  for(i = 0; i < songList.length; i++){
    return songList[i];
  }
})
