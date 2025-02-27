var teacher = "Sanket"; // teacher -> global -> sanket
function ask(question){  // ask -> global, question -> why
    console.log(teacher,question);
}

function fun(){  // fun -> global 
    var teacher = 'Pulkit';  // teacher -> fun ->
    ask('why');
}

fun();