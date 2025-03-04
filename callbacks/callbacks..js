/**
 * 
 * fun -> HOF  -> it rtakes fn(which is a function) as argument
 * 
 * x ->number
 * fn -> function
 */


function fun(x,fn){
    for(let i=0;i<x;i++){
        console.log(i);
    }

    fn();
}

fun(10, function exec(){   // callback    -> exec is a callback function
    console.log("I am executed also");
})

// fun is a higher order function