// Imagine two arrays/lists where elements are linked by their positions in the array. For example:
//
//     HowMany = [ 1   ,   6  ,  5  ,   0  ];
// Type = ['house', 'car','pen','jeans'];
// Means I have 1 house, 6 cars,5 pens and 0 jeans.
//
//     Now if we sort one array we lose the connectivity. The goal is to create a sorting function that keeps the position link linkedSort(arrayToSort,linkedArray,compareFunction). So for every element that moves in arrayToSort(HowMany in the example), the corresponding element in linkedArray(Type in the example) needs to move similarly.
//
//     For example in Javascript:
//
// //INPUT
// HowMany = [ 1   ,   6  ,  5  ,   0  ];
// Type = ['house', 'car','pen','jeans'];
//
// //SORT
// res = linkedSort(HowMany,Type,function(a,b){return a-b;})
//
// //OUTPUT
// HowMany === res === [ 0   ,   1   ,  5  ,  6  ];
// Type       ===     ['jeans','house','pen','car'];
// linkedSort(...) return the "arrayToSort" sorted only.
//
//     If no compare function is provided you should handle like an alphabetical sorting would do, e.g:
//
// [-71,-6,35,0].sort() ===  [-6,-71,0,35] != [-71,-6,0,35]
// Note: it is assumed that array are same length.

function linkedSort(aToSort,aLinked,compare) {
   let copySorted = [...aToSort]
    let copyLinked = [...aLinked]
    aToSort.sort(compare)
    for (let i = 0; i < aToSort.length; i++) {
        let index = aToSort.indexOf(copySorted[i])
        aLinked[index] = copyLinked[i]
    }
    return aToSort
}

//from array to object:
const array = ['foo', 'boo', 'zoo']
const obj = Object.assign({}, array)  //{0: 'foo', 1: 'boo', 2: 'zoo'}

//another way:
const  arr = ['foo', 'boo', 'zoo']
arr.reduce(function (target, key, index) {
    target[index] = key
    return target
}, {})  //initial empty object
//{0: 'foo', 1: 'boo', 2: 'zoo'}