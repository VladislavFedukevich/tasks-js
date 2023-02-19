class Validator {
  constructor(string) {
    this.string = string;
  }

  isEmail = () => {
    const regex = /^[a-z]+@[a-z]+\.[a-z]{1,5}$/gm;

    return regex.test(this.string);
  };

  isUrl = () => {
    const regex =
      /^[http | https]+\:\/\/[a-zA-Zа-яА-Я0-9]+\.[а-яА-ЯA-Za-z]+\/$/gm;

    return regex.test(this.string);
  };

  isDate = () => {
    const regex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/gm;

    return regex.test(this.string);
  };

  isPhone = () => {
    const regex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/gm;

    return regex.test(this.string);
  };
}

const check = new Validator("fed@gmail.com");
const result = check.isEmail();
console.log(result);
