class Validator {
  getEmail = () => {
    return this.mail;
  };

  setEmail = (mail) => {
    this.mail = mail;
  };

  isEmail = () => {
    return /^[a-zA-Z0-9]+.[\w]+.+[\w]+.$/g.test(this.mail);
  };
}

const validator = new Validator();

validator.setEmail('asd.gmail.com');
console.log(validator.getEmail());
console.log(validator.isEmail());
