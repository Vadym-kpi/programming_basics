
function random(min, max) {
    if(!max) {
        max = min;
        min = 0;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(42, 100));
console.log(random(67));
console.log(random(42))