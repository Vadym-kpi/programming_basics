const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}


function idk (iface){
    const arr = [];

    for (i of Object.keys(iface)) {
        if (typeof iface[i] === 'function') {
        arr.push([i, iface[i].length]);
        }
    }
return arr;
}

console.log(idk(iface));