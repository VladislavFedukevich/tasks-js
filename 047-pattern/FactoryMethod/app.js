// class CarFactory {
//     createCar(type) {
//         switch (type) {
//             case 'седан':
//                 return new Sedan();
//             case 'хэтчбек':
//                 return new Hatchback();
//             case 'кроссовер':
//                 return new Crossover();
//             default:
//                 throw new Error(`Тип автомобиля ${type} не поддерживается`);
//         }
//     }
// }

// class Car {
//     constructor(model, engine) {
//         this.model = model;
//         this.engine = engine;
//     }
// }

// class Sedan extends Car {
//     constructor(model, engine) {
//         super(model, engine);
//         this.type = 'седан';
//     }
// }

// class Hatchback extends Car {
//     constructor(model, engine) {
//         super(model, engine);
//         this.type = 'хэтчбек';
//     }
// }

// class Crossover extends Car {
//     constructor(model, engine) {
//         super(model, engine);
//         this.type = 'кроссовер';
//     }
// }

// const carFactory = new CarFactory();

// const sedan = carFactory.createCar('седан');
// console.log(sedan);

// const crossover = carFactory.createCar('кроссовер');
// console.log(crossover);
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ProductFactory {
    createProduct(name, price) {
        return new Product(name, price);
    }
}

const factory = new ProductFactory();
const product = factory.createProduct("Phone", 500);
console.log(product); 
