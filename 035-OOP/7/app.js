class ServerById {
  middleware = (id) => {
    try {
      const data = this.controller(id);

      if (typeof data !== 'object' || !data.length) throw new Error('Not json data || No data');
      return data;
    } catch (error) {
      return error.message;
    }
  };

  controller = (id) => {
    const data = this.service(id);
    return data;
  };

  service = (id) => {
    const data = this.repository(id);
    return data;
  };

  repository = (id) => {
    const data = [
      { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
      { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
      { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
      { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
      { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
    ]
    return data.filter((elem) => elem.id === id);
  };
}

const server = new ServerById();
const data = server.middleware("typescript");
console.log(data);
