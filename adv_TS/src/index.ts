interface User{
    readonly name:string;    // once the obj is created or value is added then it cant be updated
    age:number;
    email:string
}

type updatedProp = Pick<User,'name'|'age'|'email'>   // let user pick these value, changing a type is made easy

type ExcludeProp = Exclude<User,'name'>        // exclude values

type UpdatePropsOptional = Partial<updatedProp>      // all the values becomes optional




function sumOfAge(obj1:User,obj2:User){
    return obj1.age+obj2.age;
}

const obj1: Readonly <User>={        // readonly obj
    name:"Trishit",
    age:25,
    email:"sfsdf"
}

const obj2: User={
    name:"Roy",
    age:45
}

const ans = sumOfAge(obj1,obj2);
console.log(ans)