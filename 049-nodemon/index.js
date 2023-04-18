const express = require("express");
const bodyParser = require("body-parser");
const { getAll, getId, createData, deleteData } = require("./service/service");

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/", (req, res) => {
    const result = getAll();
    const resCode = 200;
    res.status(resCode).send(result);
});

app.get("/:id", (req, res) => {
    const { id } = req.params;

    const data = getId(id);
    const statusCode = 200;
    res.status(statusCode).send(data);
});

// app.post("/", (req, res) => {
//     res.send("Post method /");
// });

app.post("/", (req, res) => {
    const { name, salary } = req.body;
    const data = createData(name, salary);
    res.send(data);
});

app.delete("/:id", (req, res) => {
    const { id } = req.params;
    const data = deleteData(id);
    res.send(data);
});

app.put("/:id", (req, res) => {
    const { id } = req.params;
    
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
