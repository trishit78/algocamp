function fetchNextElement(array){
    let idx = 0;
    function next(){
        if(idx == array.length){
            return {value:undefined, done:true};
        }
        const nextElement = array[idx];
        idx++;
        return {value:nextElement, done:false};
    }
    return {next};
}

const automaticFetcher = fetchNextElement([99,1,23,45,67,45,68]);
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());