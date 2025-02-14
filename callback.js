function mutateArray(arr, action) {
    for (let i=0; i<arr.length; i++){
        // Do some action
        arr[i] = action(arr[i]);
    }
}


const array = [1,2,3,4,5];
mutateArray(array, x => x * 2);

console.log(array);