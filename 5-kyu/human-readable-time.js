/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)
*/

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 60 / 60);
  let minutes = Math.floor((seconds / 60) % 60);
  let secondsConv = Math.floor(seconds % 60);
  
  if(hours < 10) hours = `0${hours}`;
  if(minutes < 10) minutes = `0${minutes}`;
  if(secondsConv < 10) secondsConv = `0${secondsConv}`;
  
  return `${hours}:${minutes}:${secondsConv}`;
}

humanReadable(35599);
// Returns: '09:53:19'
