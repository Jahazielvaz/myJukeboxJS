var playlistDisplay = document.getElementById("current-playlist");


var allLists = [pop, indie, rock];



var practiceRound = document.querySelector("#playlists-container");

if(practiceRound == []){
  playlistDisplay.throw = console.log("NO more songs");
}




playlists.addEventListener("click", function(){
  playlistDisplay.style.display = "inline-block";
  jukeWrapper.style.float = "left";
  jukeWrapper.style.margin = "0";
  playlistDisplay.appendChild(allLists[0])
  allLists.shift();
  var songClass = document.querySelector(".song");
  var playlistDisplayContent = document.querySelector("#current-playlist");

  playlistDisplayContent.addEventListener("click", function(){
    jukeDisplay.innerHTML = "HELLO KITTY";
    // songClass.event.stopPropagation();
  })




});




/*
BRAINSTORMING

PROBLEM: I want to make the playlists disappear from underneath the jukebox.
Brainstorm:
-Create an if else statement that targets the empty element.
SOLVED: I just used display none on the section that originally had all the playlists.


PROBLEM: I want to get my playlists button to turn into a reset button when all the playlists have been loaded unto the desired section.
I don't know how to target an empty element. I don't know how to tell the computer to change the button, after all the iterations have happened.


PROBLEM: I want the clicked playlist(Inside the playlist display) to load onto my jukebox, and the jukebox to be able to display the current song,and playlist name.
Brainstorm:
-

PLOBLEM: When someone clicks a song in one of the playlists, I want that playlist to load onto the jukebox, and for the selected song to start playing.

PROBLEM: I want people to be able to use the audio controls within the parameters of the current playlist.

*/





//UNUSED CODE TO CHECK LATER

// ffButton.addEventListener("click", function(){
//   for(var i = 0; i < playlistDisplay.length; i++){
//     document.getElementById("display").playlistDisplay[i].play();
//   }
// });

// lists();


//PRACTICE SECTION ITERATORS
/*
ITERABLES VS NON: Some objects are iterables, and some are non iterable.
  EXAMPLE OF ITERABLE:
    var yolo = [car, show, now]; This is iterable

  EXAMPLE OF NON ITERABLE:
    let anObject = {
    name: "bob",
    age: 20,
    friends: ["john", "kim", "peter"],
    getName: function(){
    return this.name;             This is non iterable. Apparently one of the reasons why it's not iterable, it's because it has key value pairs.
    }
  }

HOW TO KNOW WHAT'S ITERABLE AND WHAT'S NOT:
  EXAMPLE:
    let numArray = [2, 4, 7, 8, 9];

    console.dir(numArray);

    HOW DO FIND IT ON THE CONSOLE:
      look for proto, and then symbol.iterator. If the item is iterable, it'll show up, otherwise, it's going to be absent.

NEW DATASTRUCTURES:
  Sets: They're like objects, but they only accep unique values.
    SYNTAX:
      let mySet = new Set([1,2,3,4,5]);
      console.dir(sySet);

  Weak Sets
  Maps
  Weak Maps

  // function listIterations(){
  //   for(var i = 0; i < allLists.length; i++){
  //     playlistDisplay.appendChild(allLists[i]);
  //     // allLists.shift();
  //   }
  //
  // }
  //
  // playlists.addEventListener("click", listIterations);


  // playlistDisplay.appendChild(rock);
  // // playlistDisplay.appendChild(pop);
  // playlistDisplay.appendChild(indie);







*/
