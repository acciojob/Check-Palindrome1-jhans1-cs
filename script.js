// complete the given function

function palindrome(str){
 // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  // Create reversed version of the cleaned string
  const reversedStr = cleanedStr.split("").reverse().join("");
  
  // Compare the cleaned string with its reversed version
  return cleanedStr === reversedStr;
}
module.exports = palindrome
