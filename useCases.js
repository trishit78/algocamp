function func(){
    let i;    // var i -> would be a better choice
    if(x%2==0){
        i=0;
    }
    else{
        i=1;
    }
}

// here var can be implemented
function gun(x){
    if(x%2==0){
        var i=0;
    }else{
        var i=1;
    }
    console.log(i);
}
gun(10);


// use case of let

function fun(){
    for(var i=0;i<10;i++){

    }
    console.log(i);  // here i is accessible outside of the scope also, so here let can be used
}


function process(x,y){
    if(x>y){
        var temp = x;  // here let can be used, because there is no usecase of var
        x=y;
        y=temp;
    }
    return y-x;
}


// var allows multiple declaration
var x=9;
var x=10;
// let does not allows multiple declaration
let x=0;
let x=9; // will throw error