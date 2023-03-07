// void, herhangi bir veri döndürmeyeceğini belirtir.

// eğer burada () void olarak belirtmiş olsaydık 
// herhangi bir veri dönmeyeceğini set ederdik
// ki default olarak bu geliyor, ancak içeride void yazmadan
// herhangi bir veri return ediyorsak bu void'i default olarak
// kaldıracak

function calculateTax(income: number) : number
/*: void Type 'number' is not assignable to type 'void'.ts(2322) */
{
   // : void default olarak kaldırıldı. Veri return ediliyor.
   return 0;
}


// taxYear kısmına taxYear?: number olarak set ettiğimizde bunu opsiyonel bırakabiliyoruz
// default olarak geçmesi gereken parametreye ihtiyaç olmadığını belirtebiliriz.
function calculateTX(income: number, taxYear = 2022) : number  {
   // @Hata: Hata vermesini bekliyoruz çünkü bu verinin gerçekten gelip gelmeyeceği hakkında kesin bir sonuç yok.
   // if (taxYear < 2022)
   //    return income * 1.2;
   // return income * 1.3;

   // @Çözüm: Default olarak ya parametre içinde set edeceğiz
   // ya da if bloğunun içinde belirteceğiz
   // Buradaki "best practice" her zaman için opsiyonel bırakmayıp
   // Veriyi default parameters value olarak geçmek olacak
   // function calculateTX(income: number, taxYear = 2022) : number 
   if (taxYear < 2022)
      return income * 1.2;
   return income * 1.3;
}

calculateTX(10_000, 2023);