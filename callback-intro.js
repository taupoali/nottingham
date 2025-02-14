// Perform an action on every element in an array
// But the action could be different each time, maybe double, maybe triple or square

function mutateArray (arr, action){
    for (let i=0; i<arr.length; i++){
        // do action
        arr[i] = action(arr[i])
    }

}

const array = [1,3,4,7]
mutateArray(array, (x) => x*2)

console.log(array)