// Enums
// const small = 1;
// const medium = 2;
// const large = 3;


/*
   enum (Sıralı liste) özelliği, TypeScript'te sembolik adları 
   olan bir sabit değer kümesi oluşturmanızı sağlayan bir özelliktir. 
   Bu sembolik adlar, kodun daha okunaklı ve anlaşılır olmasını 
   sağlar.
*/

// PascalCase
enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize)