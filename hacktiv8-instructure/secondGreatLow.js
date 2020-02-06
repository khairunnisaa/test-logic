/**
 * @return {string}
 */
function SecondGreatLow(arr) {

  if (arr.length === 2) {
    arr.sort(function(a,b) {return a - b});
    return arr[0] + " " + arr[1];
  }

  const uniqueArray = arr.filter(function (item, pos) {
    return arr.indexOf(item) === pos;
  });

  if (uniqueArray.length > 2) {
    uniqueArray.sort(function(a, b){return a-b});
    return uniqueArray[1] + " " + uniqueArray[uniqueArray.length - 2];
  }
  else {
    return uniqueArray[1] + " " + uniqueArray[0];
  }

}

console.log(SecondGreatLow([7,7,12,98,106]));
console.log(SecondGreatLow([12,98]));
console.log(SecondGreatLow([12,98,7]));
