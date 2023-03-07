// Type annotation
// let age: number = 20;
// if (age < 50)
//     age +=10;
// console.log(age);

/* 
    Type annotation yaparken veriyi set edebilirsin ve
    bu veri türü ne ise annotation'ını veri türüne göre
    yapar.
*/
let sales: number = 123_456_789; // Number
let course = 'TypeScript'; // String
let is_published: boolean = true; // boolean
let level; // any
//level = 1;
//level = 'a';

function render(document: any) {
    console.log(document)
}
