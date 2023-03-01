class Employee {
  name;
  id;

  getName = () => {
    return this.name;
  }

  getId = () => {
    return this.id;
  }

  setName = (name) => {
    this.name = name;
  }

  setId = (id) => {
    this.id = id;
  }
}

class ProductionWorker extends Employee {
  number;
  perHour;

  getNumber = () => {
    return this.number;
  }

  getPerHour = () => {
    return this.perHour;
  }

  setNumber = (number) => {
    this.number = number;
  }

  setPerHour = (perHour) => {
    this.perHour = perHour;
  }
}

const PW = new ProductionWorker();
PW.setName('Vlad');
PW.setId(20);
PW.setNumber(3);
PW.setPerHour(1000);

const name = PW.getName();
const id = PW.getId();
const number = PW.getNumber();
const perHour = PW.getPerHour();

const obj = {
  name,
  id,
  perHour,
  number
}
console.log(obj);
