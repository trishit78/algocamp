function fun(fn){
    console.log("Welcome to fun");
    fn();
}

fun(function (){
    console.log("wow so much fun");
    console.trace();  // this traces the callstack of the functions called, cand how they are stored in the stack, this works as a log (git log/history) also.
})


// Welcome to fun    op1
// wow so much fun    op2
// Trace           tracing the stack
//     at c:\Users\bhowm\Downloads\algocamp\functions\trace.js:8:13   // anonymous function is called
//     at fun (c:\Users\bhowm\Downloads\algocamp\functions\trace.js:3:5)    //  here fun function is called