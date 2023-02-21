class ServerPut {
  middleware = (json) => {
    const data = this.controller(json);

    if (typeof json !== "object") throw new Error("Not valid json");

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

    // data.forEach((elem) => {
    //   if (elem.id === json.id) {
    //     const index = data.indexOf(elem);
    //     data.splice(index, 1);
    //   }
    // });

    // data.push({ ...json });

    const filtered = data.filter(elem => elem.id !== json.id);

    filtered.push(json);
    return filtered;
  };
}

const json = JSON.parse(
  `{"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1}`
);

const data = new ServerPut();
const result = data.middleware(json);
console.log(result);
