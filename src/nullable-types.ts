 // typescript null veya undefined verilerde çok sıkıymış.
/*
    * Problem? 
    - Typescript'in bu konuda sıkı olmasının nedeni açık
    Eğer null bir değer geliyorsa ve fonksiyon içerisinde
    gerçekleştirmesi gereken bir işlevi gerçekleştiremiyorsa
    hata fırlatması olası. Çünkü olmayan bir veri için bir 
    işlem gerçekleştiremeye çalışıyor. Aşağıdaki örnek gibi
    greet() adında bir fonksiyon yazdık lakin veri null geldiği
    için bunu .toUpperCase fonksiyonu ile gerçekleştiremiyor.
*/
//  function greet(name: string) {
//     console.log(name.toUpperCase);
//  }

//  greet(null);

// @Çözüm:
// burada gelen veriyi kontrol etmeliyiz
// çünkü bir sonuç döneceğimiz için bir veri çıkarmamız gerek
// union type kullanarak fonksiyon içine null | undefined
// olarak geçmemiz yeterli.
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log("Selam Mahmut!")
    }   

greet(undefined);