let array = [1,23,45,3,555,63];

for (let index = 0; index < array.length; index++) {
   let enkucukID =index;
   for (let j = index+1; j < array.length; j++) {
       if(array[j]<array[enkucukID]){
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
console.log(array);