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
