type pairOfNumbers = [number,number];
type pairOfStrings = [number,string];

function linearSearch<T,R>(array:T[],x:T,y:R):[number,T]{
for(let i=0;i<array.length;i++){
    if(array[i]==x) return [i,array[i]];
}
    console.log(y)
    return [-1,x];
}

const arr:number[] = [1,2,4,3,9,8,7];
const stringArr:string[] = ['1','3','5','9','7','9'];
console.log(linearSearch<number,string>(arr,12,"def"));


console.log(linearSearch<string,number>(stringArr,"2",9));


class Stack<T>{
    private array:T[];
    constructor(){
        this.array = [];
    }
    push(x:T):void{
        this.array.push(x);
    }
    pop():void{
        this.array.pop();
    }
    top():T{
        return this.array[this.array.length - 1];
    }
    display():void{
        console.log(this.array);
    }
}

const st = new Stack<number|string>();
st.push(1);
st.push(2);
st.push(4);
st.push(6);
st.display();
