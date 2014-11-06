function preamble(name){
  return "Your name is " + name + "!";
}

// Second Refactor:
function cheerFor(name){
  return name.split('').map(function(letter){
    return "Give me a... " + letter + "!"
  }).join("\n");

  // This is equivalent to:
  // var nameArray = name.split(''); // ['A', 'L']
  // var cheersArray = nameArray.map(function(letter){
    // return "Give me a... " + letter + "!"
  // });
  // return cheersArray.join("\n");
}

// First Refactor:
// function cheerFor(name){
//   var cheer = [];
//   for(var i=0; i < name.length; i++){
//     cheer.push("Give me a... " + name[i] + "!");
//   }
//   return cheer.join("\n");
// }

// Original, developed test-first:
// function cheerFor(name){
//   var cheer = "";
//   for(var i=0; i < name.length; i++){
//     cheer += "Give me a... " + name[i] + "!"
//     if( i < name.length - 1){
//       cheer += "\n"
//     }
//   }
//   return cheer;
// }
