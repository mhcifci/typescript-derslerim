// Değişmeyen typelar. Spesific olarak sadece kullanabilecek
// built-in ile gelmeyen bizim set ettiğimiz typelar.

// Kesin veya özel değer! 1
// let quantity: 50 = 50;

// Kesin veya özel değer! 2
// let quantity: 50 | 100 = 100;

// Type alias ile kullanım
type Quantity = 50 | 100;
type Metric = 'cm' |'inch';

let quantity: Quantity | 100 = 100;
let metric: Metric = 'cm';