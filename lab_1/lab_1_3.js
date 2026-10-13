const massive = [true, 'hello', 5, 12, -200, false, false, 'word', "hi", "bye", "computer", 5, 7];

const types = { 
    number: 0, 
    string: 0, 
    boolean: 0 
};

function count_types(list) {
    for (const item of list) {
        const type = typeof item;
        if (type in types) {
            types[type]++;
        }
    }
}

count_types(massive)
console.dir(types)