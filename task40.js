// Give you an number array arr, and a number n(n>=0), In accordance with the rules of kata, returns the array after n times changes .

// Rules: In every time of change, when the element of array is an odd number, it changed by x*3+1(element is x), and merge with next element arr[i]+arr[i+1](i is index of element, if it's the last element of array, do not merge with other element);when the element is a even number, changed by x=x/2,and split to two element.

// Example:

//     arr=[3,4,5]
//     n=0: [3,4,5]
//     n=1: [14,16] 
//     element1=>3*3+1==10, then merge element2, 10+4=14; 
//     element2 merged by element1, so element2 disappeared;
//     element3=>5*3+1==16, no element merge
//     n=2: [7,7,8,8]
//     element1 split into 7,7; element1 split into 8,8;
//     n=3: [29,4,4,4,4]
//     n=4: [92,2,2,2,2,2,2]
//     n=5: [46,46,1,1,1,1,1,1,1,1,1,1,1,1]
//     n=6: [23,23,23,23,5,5,5,5,5,5]
//     n=... [...]


function sc(arr, n) {
  for (let step = 0; step < n; step++) {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] % 2) {
        arr[index] = arr[index] * 3 + 1 + (arr[index + 1] ? arr[index + 1] : 0)
        arr.splice(index + 1, 1)
      } else {
        arr[index] /= 2;
        arr.splice(index, 0, arr[index]);
        index++
      }
    }
  }
  return arr;
}
