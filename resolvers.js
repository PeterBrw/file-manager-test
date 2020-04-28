// const db = require("./db");
const { data } = require("./data/data");
const { path } = require("./data/path");
const { returnChildren, returnName } = require("./logic");

const Query = {
    getFiles: () => data,
    getChildren: (parent, { id }) => returnChildren(data, id),
    getPath: () => path[path.length - 1].id,
    getName: (parent, { id }) => returnName(data, id),
};

const Mutation = {
    addPath: (parent, { id }) => {
        path.push({ id });
        return path[path.length - 1].id;
    },
};

module.exports = { Query, Mutation };
