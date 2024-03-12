// Concept: Reduce a multi dimension array into a single dimension array recursively

const deepFlatten = (arr)=>{
    //reduce the array, if value is an array, reduce it further recusively, else add it to the accumulator array
    return arr.reduce((accumulator, value)=>{ 
        return Array.isArray(value) ? accumulator.concat( deepFlatten(value) ) : accumulator.concat(value);
    }, [])
}

// usage 

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8, [9, 10]]];
const flattenedArray = deepFlatten(nestedArray);

console.log(flattenedArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
