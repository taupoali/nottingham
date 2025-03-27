for (let i=0; i<3; i++){
    setTimeout( () => {
        console.log(i);
    },100);
}

/*

If you use let, a new block-scoped variable is created for each iteration

*/
