/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
*/

function list(names){
  if (names.length == 1) { return names[0].name}

  let str = '';
  
  for (let x=0; x<names.length; x++){
    if (x==names.length-1){
      str += ' & '+names[x].name;
    } else if (x==names.length-2) {
      str += names[x].name;
    } else {
      str += names[x].name+', ';
    }

  } return str;
}


list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'
