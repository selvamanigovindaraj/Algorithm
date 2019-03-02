// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
   const chunked = [];
   let index  = 0;
   while(index<array.length){
     chunked.push(array.slice(index,index+size));
     index = index+size;
   }

   return chunked;
}

module.exports = chunk;



// function chunk(array, size) {
//   let chunkarr=[],arr= [],arrsize=0;
//   for(i=0;i<array.length;i++){
//     arr.push(array[i]);
//     arrsize++;
//     if(arrsize == size)  {
//         chunkarr.push(arr);
//         arr=[];
//         arrsize =0;
//     }else if((i == array.length-1) && !(arrsize == size)){
//       chunkarr.push(arr);
//     }

//   }
//   return chunkarr;
// }
