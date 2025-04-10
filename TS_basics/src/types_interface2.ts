let schoolName:"DPS"|"DAV" = "DPS";
let another:string = "KV";

//schoolName = another;  // not possible bcz schoolName can contain only 2 values DPS and DAV

another = schoolName; // possible bcz another string can contain any string value.

type Complex = {
    real:number,
    img: number,
    def:number,
    add:(C:Complex)=>Complex
}

interface IComplex{
    real:number,
    img: number,
    def:0|-1|1,
    add:(c:IComplex,i?:number) => IComplex
}

let c1 : Complex = {
    real:10,
    img:10,
    def:100,
    add:(C:Complex)=>{return C}
}

let c2 : IComplex = {
    real:10,
    img:10,
    def:0,
    add:(C:IComplex)=>{return C}           // this doesnt match with c1
}

console.log(c1);

//c1=c2;  // ts will consider Complex and IComplex same because the members are same. although the names are diff, still it doesnt matter.

console.log(c2);
