/**
 * @return {number}
 */
function MultiplicativePersistence(num){
  let counter = 0;
  let arr = num.toString().split('');

  function add(){
    let sum = 1;

    for(let i = 0; i < arr.length; i++){
      sum = sum * arr[i]
    }
    counter += 1;
    arr = sum.toString().split('');
    if( sum > 9) {
      return add()
    }
    else {
      return counter
    }
  }
  return add()
}

console.log(MultiplicativePersistence(39));
