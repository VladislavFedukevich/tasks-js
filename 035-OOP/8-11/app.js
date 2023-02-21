// const regex = /^[a-z]+@[a-z]+\.[a-z]{1,5}$/gm;
// const regex =/^[http | https]+\:\/\/[a-zA-Zа-яА-Я0-9]+\.[а-яА-ЯA-Za-z]+\/$/gm;
// const regex = /^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$/gm;
// const regex = /^\+375\d{9}$/;

class Validator {
  constructor(string) {
    this.string = string;
  }

  isEmail = () => {
    try {
      const regex = /^[a-z]+@[a-z]+\.[a-z]{1,5}$/gm;
      if (!regex.test(this.string)) throw new Error("Not valid");

      return true;
    } catch (error) {
      return error.message;
    }
  };

  isUrl = () => {
    try {
      const regex =
        /^[http | https]+\:\/\/[a-zA-Zа-яА-Я0-9]+\.[а-яА-ЯA-Za-z]+\/$/gm;

      if (!regex.test(this.string)) throw new Error("Not valid");

      return true;
    } catch (error) {
      return error.message;
    }
  };

  isDate = () => {
    try {
      const regex = /^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$/gm;

      if(!regex.test(this.string)) throw new Error('Not valid');

      return true;
    } catch (error) {
      return error.message;
    }
  }

  isPhone = () => {
    try {
      const regex = /^\+375\d{9}$/gm;

      if(!regex.test(this.string)) throw new Error('Not valid');

      return true;
    } catch (error) {
      return error.message;
    }
  };
}

const check = new Validator('+375121111111');
const result = check.isPhone();
console.log(result);
