/*
    Burada interface olarak aracın alabileceği 
    Değerleri önceden set ediyorum. Bu değerler dışında veri girişi olmaması için
*/
interface CarModel {
    brand: string;
    model: number;
    plate: string;
    used: boolean;
}
// Interface ile set ettiğim Interface'i class içinde kullanıyorum
class Car implements CarModel {
    // brand! non-null assertion 
    /*
     "!" işaretini kullanarak, brand, model, plate ve used özelliklerinin null veya undefined olamayacağını belirttik. 
        Bu sayede hata vermesini önlemek için özelliklere bir değer atandığından emin olduğumuz durumlarda faydalı olabilir.
     */
    brand!: string;
    model!: number;
    plate!: string;
    used!: boolean;
    cars: CarModel[] = [];
    // yapıcı metod
    constructor(cars: CarModel[] = []) {
        this.cars = cars;
    }
    // Yeni bir araba ekliyorum.
    new(brand: string, model: number, plate: string, used: boolean) {
        /*
            CarModel arayüzü, bir aracın özelliklerinin neler olabileceğini tanımlayan bir şablon gibi düşünebilirsiniz. 
            Bu özellikler arasında brand, model, plate ve used yer almaktadır.
        */
        const car: CarModel = {
            brand: brand,
            model: model,
            plate: plate,
            used: used
        };
        this.cars.push(car);
        console.log("Yeni bir araba eklendi.");
    }
    /*
        keyof ts'te kullanılan bir anahtar kelime olup, bir nesnenin özellik adlarını, yani nesnenin özelliklerinin keylerini temsil eder.
        propertyValue parametresi ise özelliğin değerini belirtir. 
        Bu değer herhangi bir şey olabilir, 
        bu nedenle propertyValue parametresinin tipi any olarak belirtilmiştir.
    */
    // Özelliğine göre arabamı getiriyorum.
    getCar(propertyName: keyof CarModel, propertyValue: any): CarModel[] {
        return this.cars.filter(car => car[propertyName] === propertyValue);
    }
}

// Sınıfımı çağır
const carClass = new Car();
// Yeni bir araç ekle
carClass.new('Audi', 2018, '07JKL321', false);
// Plakası '07JKL321' olan aracımı getir.
const carByPlate = carClass.getCar('plate', '07JKL321');
console.log(carByPlate);