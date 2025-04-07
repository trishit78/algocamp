// type vs interface

type text = string;

// for defining custom types for arrays, type keyword is more easy
type stringArray = string[];

// using an interface we will define an object which will be always having keys
// of type number and value to be of the type of the array

interface numberArray{
    [index:number] : number
}

// lets say we want to define a pair or a triplet or a custom tuple (set of x values)
type pair =[number,number];
type triplet = [number, number, number];
interface pairInterface {
    first: number,
    second:number
}

//can type and interfaces represent functions ?

type logger = (msg:string, errorCode:number) => void;


interface loggerInterface{
    (msg:string,errorCode:number):void;
}


// unions in types
type unionOfStringAndNum = number | string ;

interface ComplexNumber{
    real:number,
    imaginary:number
}

interface ComplexNumber{
    add: (num: ComplexNumber) => ComplexNumber
}


// if there are 2 interfaces with the same name then TS will merge them together

/**
interface ComplexNumber{
    real:number,
    imaginary:number,
    add: (num: ComplexNumber) => ComplexNumber
}
 */
