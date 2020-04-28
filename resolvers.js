const db = require("./db");

const Query = {
    getFiles: () => db.files.list(),
};

module.exports = { Query };
