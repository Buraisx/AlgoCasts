// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  /**
   * Sol 1
   * Hash
   */
  let seenChars = {};
  let highestNum = 0;
  let mostFreqChar = "";
  for(let i = 0; i < str.length; i++){
    if(!seenChars[str[i]]) {
      seenChars[str[i]] = 0;
    }
    seenChars[str[i]] += 1;

    if(seenChars[str[i]] > highestNum) {
      highestNum = seenChars[str[i]];
      mostFreqChar = str[i];
    }
  }

  return mostFreqChar;

}

module.exports = maxChar;
