// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// Example
//  = "attack at dawn"  = "Attack at dawn"

// The magazine has all the right words, but there is a case mismatch. The answer is .

// Function Description

// Complete the checkMagazine function in the editor below. It must print  if the note can be formed using the magazine, or .

// checkMagazine has the following parameters:

// string magazine[m]: the words in the magazine
// string note[n]: the words in the ransom note
// Prints

// string: either  or , no return value is expected
// Input Format

// The first line contains two space-separated integers,  and , the numbers of words in the  and the , respectively.
// The second line contains  space-separated strings, each .
// The third line contains  space-separated strings, each .

function checkMagazine(magazine, note) {
  for(let i = 0; i < note.length; i++) {
      const indexFound = magazine.indexOf(note[i]);
      if(indexFound === -1) {
          return console.log('No');
      } else {
          magazine.splice(indexFound, 1);
      }
  }
  return console.log('Yes');
}
