/**
 * @return {number}
 */
function  MeanMode(arr) {
  let mean = getMean(arr);
  let mode = getMode(arr);
  if(mean===mode){
    return 1;
  } else {
    return 0;
  }
}

  function getMean(arr) {
    let sum = 0;
    arr.forEach(num => {
      sum += num;
    });
    return sum / arr.length;
  }

  function getMode(arr) {
    const frequency = {};
    let maxFreq = 0;
    let mode = 0;
    for (let i=0; i<arr.length;i++) {
      frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
      if (frequency[arr[i]] > maxFreq) {
        maxFreq = frequency[arr[i]];
        mode = arr[i];
      }
    }
    return mode;
}
console.log(MeanMode([5,3,3,3,1]));
console.log(MeanMode([1,2,3,4,5]));
