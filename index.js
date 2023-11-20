//1. destructuring assignment
let first_number=15;
let second_number=17;

[first_number, second_number]=[second_number,first_number]

console.log(first_number)
console.log(second_number)



//2 the second way that you can do it is using temporary variable

let first_number=15;
let second_number=17;
let temp;

temp=first_number;
first_number=second_number;
second_number=temp

console.log(first_number)
console.log(second_number)


//3 Addition and difference

let first_number=15;
let second_number=17;

first_number=first_number+second_number;
second_number=first_number-second_number;
first_number=first_number-second_number;

console.log(first_number);
console.log(second_number);