const { DataStore } = require("notarealdb");

const store = new DataStore("./data");

module.exports = {
    files: store.collection("files"),
};
