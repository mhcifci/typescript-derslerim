// Mosh abimiz DRY kelimesinden bahsetti
// Demek istediği notation'u bir defa tanımla her defasında
// kullan. Dont Repeat Yourself

// @NEDEN? Problemin ana kaynağı
// Her defasında bir employee objesi için type tanımlamak.

// let employee: {
//    readonly id: number,
//    name: string ,
//    retire: (date: Date) => void;
// } = {
//    id : 1, 
//    name: "Mahmut",
//    retire: (date: Date) => {
//       console.log(date);
//    }
// }; 

// BAL GİBİ ÇÖZÜM! Alias tanımla geç
type Employee = {
   readonly id: number,
   name: string ,
   retire: (date: Date) => void;
}

let employee: Employee = {
    id : 1, 
    name: "Mahmut",
    retire: (date: Date) => {
       console.log(date);
    }
 }; 
 