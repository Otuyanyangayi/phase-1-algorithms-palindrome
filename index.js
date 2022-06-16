function isPalindrome(word) {
  // Write your algorithm here
  /* takes one argument which is a string 
  if the string is a palindrome return true 
  otherwise return false*/
  const len = word.length
  for (let i = 0; i < len/2; i++){
  if (word[i] !== word[len - 1 - i]){
    return false 
  }
}
return true 

}


/* 
  Add your pseudocode here
  if string = palindrome 
  return true 
  otherwise 
  return false 
*/

/*
  Add written explanation of your solution here
  I have created a variable that stores the lengh of the string passed.
  I have then created a for loop through half of the string then used the if statement 
  yo check if the first half is the same as the last half 
  if they are same it will return true otherwise it will return false 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
