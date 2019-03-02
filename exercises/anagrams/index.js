// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
//  if(stringA.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('') == stringB.replace(/[^\w]/g,"").toLowerCase().split('').sort('').join('')){
//      return true}
//   return false;
  console.log(stringA.replace(/[^\w]/g,"").toLowerCase().split('').sort().join(''));  

  let strA = stringA.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
  let  strB = stringB.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
  if(strA === strB){
      return true;
  }
  return false;
}
// anagrams('abchihoaidSADD!!!o');
module.exports = anagrams;


// function anagrams(stringA, stringB) {
//     stringA= stringA.replace(/[^\w]/g,"").toLowerCase();
//     stringB =  stringB.replace(/[^\w]/g,"").toLowerCase();
//      let strA={},strB={};
 
//      for(let char of stringA){
//          if(strA[char]){
//              strA[char]+=1
//          }else{
//              strA[char] = 1
//          }
//      }
//      for(i=0;i<stringB.length;i++){
//          if(strB[stringB[i]]){
//              strB[stringB[i]]+=1
//          }else{
//              strB[stringB[i]] = 1
//          }
//      }
//      if(stringA.length==stringB.length){
//          for(let key in strA){
//              if(strA[key]!==strB[key]){
//                  return false;
//              }
//          }
//      }else{
//          return false;
//      }
    
//      return true
 
     
//  }