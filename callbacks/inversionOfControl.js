function doTask(fn,x){
    


    fn(x*x);
}            // team A



// team B
doTask(function exec(num){  // due to callbacks,I am passing control of how exec function should be called to doTask

    // this is innversion of control
    console.log("woah num is",num);
},9)