/*let array = [1,23,45,3,555,63];

for (let index = 0; index < array.length; index++) {
   let enkucukID =index;
   for (let j = index+1; j < array.length; j++) { 
       if(array[j]<array[enkucukID]){ // eğer buradaki büyüktür küçüktür işaretini değiştirerek arrayi büyükten küçüğe veye küçükten büyüyüğe sıralayabiliriz.
        enkucukID=j;
       }
       
   }
   if (enkucukID != index) {
    // Swapping the elements
    let tmp = array[index]; 
    array[index] = array[enkucukID];
    array[enkucukID] = tmp;      
}
}
console.log(array);*/
function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
                console.log(inputArr)
            }
            inputArr[j+1] = current;
        }
    return inputArr;
};
let inputArr = [5,21,35,28,15,12,22];
insertionSort(inputArr);
console.log(inputArr);
