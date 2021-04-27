// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example


// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs

function sockMerchant(n, ar) {
  // Write your code here
  let obj = {};
      
  ar.forEach(item => {
      obj[item] = obj[item] ? obj[item] + 1 : 1;
  });
  
  return Object.values(obj).reduce((acc, curr) => {
      acc += Math.floor(curr/ 2)
      return acc;
  }, 0)
}

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]));
