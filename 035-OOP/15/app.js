class ServerDelete {
  middleware = (json) => {
    const data = this.controller(json);

    if (typeof json !== 'object') throw new Error('Not valid');

    return data;
  };

  controller = (json) => {
    const data = this.service(json);
    return data;
  };

  service = (json) => {
    const data = this.repository(json);
    return data;
  };

  repository = (json) => {
    const data = [
      {
        id: "javascript",
        label: "JavaScript",
        category: "programmingLanguages",
        priority: 1,
      },
      {
        id: "typescript",
        label: "TypeScript",
        category: "programmingLanguages",
        priority: 1,
      },
      {
        id: "sql",
        label: "SQL",
        category: "programmingLanguages",
        priority: 2,
      },
      {
        id: "java",
        label: "Java",
        category: "programmingLanguages",
        priority: 3,
      },
      { id: "go", label: "GO", category: "programmingLanguages", priority: 3 },
    ];

    const index = data.find((elem) => elem.id === json.id);
    data.splice(index, 1);

    return data;
  };
}

const json = JSON.parse(`{ "id": "javascript" }`);

const data = new ServerDelete();
const result = data.middleware(json);
console.log(result);
