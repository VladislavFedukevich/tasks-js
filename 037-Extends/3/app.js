class Worker {
  name;
  surname;

  getFullName = () => {
    return `${this.name} ${this.surname}`;
  };

  setName = (name) => {
    this.name = name;
  };

  setSurname = (surname) => {
    this.surname = surname;
  };
}

class Singer extends Worker {
  years;
  birth;
  style;

  getMoreInfo = (name, surname, years, birth, style) => {
    return `name: ${(this.name = name)}, surname: ${(this.surname =
      surname)}, years: ${(this.years = years)}, birth: ${(this.birth =
      birth)}, style: ${(this.style = style)}`;
  };
}

const singer = new Singer();
const info = singer.getMoreInfo("John", "Osborne", 40, "24.12.1976", "Pop");
console.log(info);
