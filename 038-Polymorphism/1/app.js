class Worker {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getInfo = () => {
    return `name: ${this.name}, surname: ${this.surname}`;
  }
}

class Singer extends Worker {
  constructor(name, surname, years, birth, style) {
    super(name, surname);
    this.years = years;
    this.birth = birth;
    this.style = style;
  }

  getInfo = () => {
    return `name: ${this.name}, surname: ${this.surname}, years: ${this.years}, birth: ${this.birth}, style: ${this.style}`;
  }
}

const singer = new Singer('John', 'Smith', 24, '24.08.2002', 'pop');
console.log(singer.getInfo());
