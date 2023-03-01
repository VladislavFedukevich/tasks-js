class Person {
  name;
  address;
  phoneNumber;

  getName = () => {
    return this.name;
  }

  getAdress = () => {
    return this.address;
  }

  getPhoneNumber = () => {
    return this.phoneNumber;
  }

  setName = (name) => {
    this.name = name;
  }

  setAddress = (addr) => {
    this.address = addr;
  }

  setPhoneNumber = (number) => {
    this.phoneNumber = number;
  }
}

class Customer extends Person {
  customerId;
  bool;

  getCustomerId = () => {
    return this.customerId;
  }

  getBool = () => {
    return this.bool;
  }

  setCustomerId = (id) => {
    this.customerId = id;
  }

  setBool = (bool) => {
    this.bool = bool;
  }
}


const customer = new Customer();

customer.setName('John');
customer.setAddress('Minsk');
customer.setPhoneNumber(123456789);
customer.setCustomerId(3);
customer.setBool(true);

const name = customer.getName();
const address = customer.getAdress();
const phoneNumber = customer.getPhoneNumber();
const id = customer.getCustomerId();
const bool = customer.getBool();
console.log(name, address, phoneNumber, id, bool);
