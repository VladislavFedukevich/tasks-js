class ServerGetAll {
  controller = (json) => {
    try {
      const data = this.service(json);
      return data;
    } catch (error) {
      return error.message;
    }
  };

  service = (json) => {
    const data = this.repository(json);
    return data;
  };

  repository = (json) => {
    const data = json;
    return data;
  };
}

const json = [
  { id: 1, name: "Yesenia", age: 22 },
  { id: 2, name: "Hanna", age: 22 },
  { id: 3, name: "Stanislau", age: 25 },
  { id: 4, name: "German", age: 18 },
  { id: 5, name: "Maria", age: 27 },
];

const serverGetAll = new ServerGetAll();
console.log(serverGetAll.controller(json));
