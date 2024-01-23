// class TypeScript {
//   name: string;
//   age: number;
//   //For Class Field
//   Sex: string = "Male";
//   //ReadOnly
//   readonly Job: string = "Full Stack Developer";
//   //Public Property
//   public Salary: number = 100000;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const TypeWay = new TypeScript("Type", 23);
// // console.log(TypeWay);

// class GunaSheelan {
//   public Name: string;
//   public Age: number;
//   constructor(Name: string, Age: number) {
//     this.Name = Name;
//     this.Age = Age;
//   }

//   getMethod() {
//     return `${this.Name}-${this.Age}`;
//   }
// }

// const Brave = new GunaSheelan("GunaSheelan", 23);
// console.log(Brave.getMethod());

// class Edge {
//   constructor(name) {
//    this
//   }
// }

interface PersonOne {
  Brand: string;
  Model: string;
}

interface PersonTwo {
  Locality: string;
  forSale: boolean;
}

interface PersonFinal extends PersonOne, PersonTwo {
  Price: number;
  Release: number;
}

//Object
let obj: PersonFinal = {
  Brand: "Bmw",
  Model: "S3",
  Price: 1000000,
  Release: 2021,
  Locality: "Chennai",
  forSale: true,
};

//class
class Inherit implements PersonFinal {
  constructor(
    public Brand: string,
    public Model: string,
    public Price: number,
    public Release: number,
    public Locality: string,
    public forSale: boolean
  ) {}
}

const NewBrandCar = new Inherit(
  "BMW",
  "Class S10",
  20000000,
  2024,
  "Chennai",
  true
);
console.log(NewBrandCar);
 