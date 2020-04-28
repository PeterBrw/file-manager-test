const returnChildren = (data, id) => {
    if (id === "root" || id === null) {
        return data;
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i].children;
        }

        if (data[i].children.length > 0) {
            let found = returnChildren(data[i].children, id);
            if (found) {
                return found;
            }
        }
    }

    return null;
};

const returnName = (data, id) => {
    if (id === "root" || id === null) {
        return "root";
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i].name;
        }

        if (data[i].children.length > 0) {
            let found = returnName(data[i].children, id);
            if (found) {
                return found;
            }
        }
    }

    return null;
};

const addItem = (data, id, word) => {
    if (id === "root" || id === null) {
        data.push({
            id: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
            name: word,
            type: "folder",
            children: [],
        });
    } else {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i].children.push({
                    id: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
                    name: word,
                    type: "folder",
                    children: [],
                });
            } else if (data[i].children.length > 0) {
                addItem(data[i].children, id, word);
            }
        }
    }

    return data;
};

module.exports = { returnChildren, returnName, addItem };
