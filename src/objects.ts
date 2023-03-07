// Javascript literatüründe objeler her zaman dinamiktir
// dolayısıyla burada type belirlerken dikkat etmemiz gereken
// noktalar var.
// @Hata: 
// let employee = {id : 1};
// employee.name = "Mahmut";

// 1. Çözüm
// let employee: {
//    id: number,
//    name?: string // Optional bırakabiliriz
// } = {id : 1};
// employee.name = "Mahmut";

// 2. Çözüm
// let employee: {
//    id: number,
//    name: string 
// } = {id : 1, name: "Mahmut"}; // Default value geçebiliriz.
// employee.name = "Mahmut";

// Bazen objelerde sonrasında değiştirilmeyecek veriler olabilir.
// Annotation'da `readonly` atamamız yeterlidir.

// let employee: {
//    readonly id: number,
//    name: string 
// } = {id : 1, name: "Mahmut"}; 
// employee.id = 0; // Yapamayız, id readonly annotations aldı.