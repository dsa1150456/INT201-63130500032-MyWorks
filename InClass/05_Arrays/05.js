let arr1 = [];

console.log(typeof arr1);



arr1 = [5, 2, 10, 'student']; //untyped & unsized
console.log(arr1.length);
console.log(arr1[0]); //first element
console.log(arr1[arr1.length - 1]); //last element
console.log(arr1[arr1[1]]); // int expression

let arr2 = [
    { id: 1, name: "Adam" },
    { id: 2, name: "Joe" }
];
let arr3 = [
    [1, 3, 5, 7],
    [2, 4, 6, 8]
];
console.log(arr3[1][1]);
console.log(arr2[1].name);

let arr4 = [...arr3,0.5,100,...arr2];
console.log(arr4);