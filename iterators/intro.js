function fetchNextElement(array){
    let idx = 0;
    function next(){
        if(idx == array.length){
            return undefined;
        }
        const nextElement = array[idx];
        idx++;
        return nextElement;
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