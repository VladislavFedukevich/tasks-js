// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arr = [
    { id: 1, name: "Vlad", salary: 2500 },
    { id: 2, name: "Sasha", salary: 1500 },
    { id: 3, name: "Ilya", salary: 800 },
    { id: 4, name: "Maksim", salary: 1200 },
    { id: 5, name: "Matvey", salary: 2000 },
];

const getAll = () => {
    return arr;
};

const getId = (id) => {
    const filtered = arr.filter((elem) => elem.id == id);
    return filtered;
};

const createData = (name, salary) => {
    arr.push({ id: arr.length + 1, name: name, salary: salary });
    return arr;
};

const deleteData = (id) => {
    const filtered = arr.filter(elem => elem.id != id);
    return filtered;
}

const putData = (id) => {
    
}

module.exports = { getAll, getId, createData, deleteData };
