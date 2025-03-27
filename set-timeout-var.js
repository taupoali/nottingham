for (var i=0; i<3; i++){
    setTimeout( () => {
        console.log(i);
    },100);
}

/*

var has function scope
* The loop variable i is declared with var, which means it is not block-scoped but rather function-scoped.
* Unlike let, which creates a new binding in each loop iteration, var creates a single shared variable for all iterations.

Closures in setTimeout

* The function inside setTimeout forms a closure around i, but it does not capture the value of i at that moment. 
* Instead, it keeps a reference to the same i in memory.

Loop Execution and Asynchronous Timing
* The for loop runs synchronously, so i increments from 0 → 1 → 2 → 3, exiting when i = 3.
* The setTimeout functions are asynchronous, so they execute after 100ms, by which time the loop has already completed, and i is 3.

*/
