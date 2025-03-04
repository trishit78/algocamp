const f = function fun(){
    console.log("How much fun ??");
}

f();  // the function fun can only be called by const f
// taking about the scope of fun it is only bounded by f
// without f we can not access fun

fun();// it will give error, because the fun is not found in the scopes