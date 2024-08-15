function first(){
    console.log("First");
}

function second(){
    console.log("Second");
}

/*
function second_async(){
   setTimeout(function(){
        console.log("Second");
    }, 1000);
} 
*/

//function second_async_higher_order(callback){
//    setTimeout(callback, 1000);
//}

function third(){
    console.log("Third");
}

first();
//second_async();
//second_async_higher_order(second);
third();
