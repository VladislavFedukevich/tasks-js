class Singer {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getAutograph = () => `${this.name} ${this.surname} with the best regards!`;
}

const singer = new Singer('Vlad', 'Fedukevich');
console.log(singer.getAutograph());
