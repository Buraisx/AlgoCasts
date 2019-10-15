// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /*
    Sol 1 
    time complexity: O(N)
    space complexity: O(N)
   */
  debugger;
  let reversedStr = [];
  for (let i = str.length - 1; i >= 0  ; i--){
    reversedStr.push(str[i]);
  }
  return reversedStr.join("");

  /*
    Sol 1.5 es6 syntax
    time complexity: O(N)
    space complexity: O(N)

    let reversedStr = '';
    for(let char of str) {
      reversed = reversed + char;
    }  
    return reversedStr; 
  */

  /*
    sol 2
    using built in array helper

    time complexity: 
    Space complexity: O(1) ? 
    return str.split("").reverse().join("");
  */

  /*
    sol 3
    array helpers
    initial string of '' 
    1st value is our reversed string
    2nd argument is our current element

    time complexity: O(N)

    return str.split("").reduce((reversed, character) => 
        character + reversed
    , '')
   */
}
module.exports = reverse;
