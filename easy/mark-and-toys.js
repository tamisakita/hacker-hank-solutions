// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

// Note Each toy can be purchased only once.

// Example


// The budget is  units of currency. He can buy items that cost  for , or  for  units. The maximum is  items.

// Function Description

// Complete the function maximumToys in the editor below.

// maximumToys has the following parameter(s):

// int prices[n]: the toy prices
// int k: Mark's budget
// Returns

// int: the maximum number of toys
// Input Format

// The first line contains two integers,  and , the number of priced toys and the amount Mark has to spend.
// The next line contains  space-separated integers 

function maximumToys(prices, k) {
  let toysCount = 0;
  let sortedPrices = prices.sort((a,b) => a - b);
  
  sortedPrices.forEach((price) => {
      if (price <= k) {
          k -= price;
          toysCount++;
      }
  });
  return toysCount;
}