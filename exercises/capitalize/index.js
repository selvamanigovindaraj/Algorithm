// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
   let words=  str.split(" ");
   let capitalizedwords =[];
   for(let word of words){
    let captialize =  word[0].toUpperCase() + word.slice(1);
    capitalizedwords.push(captialize);
   }
   return capitalizedwords.join(" ");
}

module.exports = capitalize;
