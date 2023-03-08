class Person {
  name;
  surname;

  getName = () => {
    return this.name;
  }

  setName = (name) => {
    this.name = name;
  }

  getSurname = () => {
    return this.surname;
  }

  setSurname = (surname) => {
    this.surname = surname;
  }
}

class Customer extends Person {
  phone;

  getPhoneNumber = () => {
    return this.phone;
  }

  setPhoneNumber = (number) => {
    this.phone = number;
  }
}

const customer = new Customer();
customer.setName('Vlad');
customer.setSurname('Fedukevich');
customer.setPhoneNumber(123);
console.log(`${customer.getName()}, ${customer.getSurname()}, ${customer.getPhoneNumber()}`);
