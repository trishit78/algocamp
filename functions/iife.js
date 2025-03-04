(function x(y){
    console.log("hi",y);  // iife
})("sanket");

(function x(y){
    console.log("hi",y);  // this is not an iife, because we are not invoking the function
})




//////////////////////////////////////////////

function x(){
    console.log("wow");
}

(function x(y){
    console.log("hi",y);
})("sanket");


x();         // here both functions are called with the same name, because the second function is an iife.   if both were normal functions with the same name then  the first function will give output and the second will be undefined.