/*function insertionSort(inputArr){
let n= inputArr.length;
console.log(n);
for(let i=1;i<n;i++){
let current = inputArr[i];
let j = i-1;

while((j>i-1) && (current<inputArr[i])){
    inputArr[j+1]=inputArr[j];
    j--;

}
inputArr[j+1]=current;


}
return inputArr;
}

let inputArr = [5, 2, 4, 6, 1, 3];
insertionSort(inputArr);*/

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
            }
            inputArr[j+1] = current;
            console.log(inputArr);
        }
    return inputArr;
}
let inputArr = [22,27,16,2,18,6];
insertionSort(inputArr);
console.log(inputArr);