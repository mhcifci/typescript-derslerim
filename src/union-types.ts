// Union typelar ile ile bir değişkene veya bir 
// fonksiyon parametresine birden fazla type verebiliriz


// Buradaki weight parametresi string'de gelebilir, number'da
// bu durumda tam olarak union types kullanıyoruz
// function kgToLbs(weight: number | string) {}
// kgToLbs(10);
// kgToLbs("10kg")

function kgToLbs(weight: number | string) : number {
   // Narrowing (Daralma)
   // Burada veri hem number hem string formatta olabileceği
   // gibi iki senerayoyuda ele almamız gerekiyor aksi halde
   // hata almamız kaçınılmaz

   // Numbersa?
   if ( typeof weight === "number") {
      return weight * 2.2;
   } else {
      // String ise?
      return parseInt(weight) * 2.2;
   } 

}
kgToLbs(10);
kgToLbs("10kg")