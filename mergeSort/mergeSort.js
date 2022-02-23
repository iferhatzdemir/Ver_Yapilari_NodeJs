function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
            console.log("Left :"+left);
        } else {
            arr.push(right.shift()) 
            console.log("Right"+right)
        }
        console.log("Array :"+arr);
    }
    
    
    return [ ...arr, ...left, ...right ]
}






function mergeSort(array) {
    const half = array.length / 2
    
   
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }

  let array=[16,21,11,8,12,22];
  console.log(mergeSort(array));