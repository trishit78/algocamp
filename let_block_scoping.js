var teacher = "Sanket";  // global 
function fun(){  //global
    console.log(teacher);  //no error -> function scopes
    console.log(content);  // error  -> defined later as a let -> blocking scope is there -> this zone above the initialization is known as temporal dead zone.
    var teacher = "Pulkit";  //scope of fun
    let content = "JS";  //content will be access only post declaration
    if(content== "JS"){
        let hours = "120+";
        console.log(content,hours);
    }
    console.log(teacher,content);
}

fun();
console.log(teacher);