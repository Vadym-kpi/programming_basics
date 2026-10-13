const massive = [true, 'hello', 5, 12, -200, false, false, 'word', "hi", "bye", "computer", 5, 7];

const count_types = {};

function count(massive) {
    for (const item of massive) {
        const type = typeof item;
  
        if (!count_types[type]) {
            count_types[type] = 0;
        }
  
        count_types[type]++;
    }
}

count(massive)
console.dir(count_types)