// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap={},max=0,maxchar='';
    for (let char of str){
        if(charMap[char]){
          charMap[char] = charMap[char]++;
        }else{
            charMap[char] = 1;
        }
    }

    for(let ch in charMap){
        if(charMap[ch]>max){
            max = charMap[ch];
            maxchar = ch;
        }
    }

    return maxchar;
}

maxChar('ab1c1d1e1f1g1')

module.exports = maxChar;
