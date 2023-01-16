const isEmail = (email) => {
  if (email.includes("@") || email.includes(".com") || email.includes(".ru")) {
    return {
      email,
      active: true,
    };
  } else {
    return {
      email,
      active: false,
    };
  }
};

console.log(isEmail("@mail.ru"));
