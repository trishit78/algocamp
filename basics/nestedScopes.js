function fun(){  // fun ->global
    var x= 10;  // x -> fun -> 10
    function gun(){  // gun -> fun
        var y = 20;  // y -> gun
        console.log(x); // 10
        console.log(y);  //20
    } 
    console.log(x);  // 10
    console.log(y);//  in the fun scope there is no y (error)
}
fun();