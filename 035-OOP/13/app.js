class ServerPost {
  middleware = () => {
    const data = this.controller();
    return data;
  };

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
    const data = [
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

    const filter = data.filter(elem => elem.label == json.label);

    if(filter.length) {
      throw new Error('Error');
    }

    data.push({...json, id:json.label.toLowerCase()});
    return data;
  };
}

const json = JSON.parse(`{
  "label": "JavaScript",
  "category": "programmingLanguages",
  "priority": 1
}`);
const data = new ServerPost();
const result = data.controller(json);
console.log(result);
