var playlistDisplay = document.getElementById("current-playlist");

// playlistDisplay.appendChild(rock);
// // playlistDisplay.appendChild(pop);
// playlistDisplay.appendChild(indie);

var allLists = [pop, indie, rock];

// function listIterations(){
//   // for(i = 0; i < allLists.length; i++){
//   //   playlistDisplay.appendChild(allLists[0]);
//   // }
//
// }



playlists.addEventListener("click", function(){
  playlistDisplay.appendChild(allLists[0])
  allLists.shift();
});























var ffButton = document.getElementById("fast-forward");


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










*/
