// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   return str.split('').every((char,i)=>{
       if(i<str.length/2){
            debugger;
             return  char === str[str.length-i-1] ;
       }else{
           return true;
       }
   })
}

palindrome('pennep')

module.exports = palindrome;



// function palindrome(str) {
//     let newstr = str.split('').reverse().join('');
//     return str === newstr;
// }