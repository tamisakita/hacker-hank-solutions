// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

// Example


// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Returns

// int: the frequency of a in the substring
// Input Format

// The first line contains a single string, .
// The second line contains an integer, .

function repeatedString(s, n) {
  // Write your code here
  let count = s.split('').filter(el => el === 'a').length;
  count *= Math.floor(n/s.length);

  if ((n % s.length) !== 0) {
      const subStr = s.slice(0, n % s.length );
      const patterStr = subStr.split('').filter(el => el === 'a');
      count += patterStr.length;
  }

  return count; 
}