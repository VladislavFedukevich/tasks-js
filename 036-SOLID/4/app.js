class ServerById {
  middleware = (json) => {
    if (typeof json !== "object") throw new Error("Not an object");
  };

  controller = (json) => {
    try {
      this.middleware(json);
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
    const data = [
      { id: 1, name: "Yesenia", age: 22 },
      { id: 2, name: "Hanna", age: 22 },
      { id: 3, name: "Stanislau", age: 25 },
      { id: 4, name: "German", age: 18 },
      { id: 5, name: "Maria", age: 27 },
    ];

    const filtered = data.filter((elem) => elem.id === json.id);
    return filtered;
  };
}

const json = JSON.parse(`{"id": 1}`);
const serverById = new ServerById();
const result = serverById.controller(json);
console.log(result);
