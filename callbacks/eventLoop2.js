function timeConsumingByLoop(){
    console.log("loop starts");
    for(let i=0;i<1000000000;i++){
        //some tasks
    }
    console.log("loop ends");
}

function timeConsumingByRuntimeFeature0(){
    console.log("starting timer");
    setTimeout(function exec(){
        console.log("completed the timer0");
        for(let i=0;i<10000000000;i++){
            //some tasks
        }
    },5000);   // 5 sec
}

function timeConsumingByRuntimeFeature1(){
    console.log("starting timer");
    setTimeout(function exec(){
        console.log("completed the timer1");
      
    },0);   // 0 sec
}

function timeConsumingByRuntimeFeature2(){
    console.log("starting timer");
    setTimeout(function exec(){
        console.log("completed the timer2");
      
    },200);   // 200 milisec
}

console.log("hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();

console.log("bye")