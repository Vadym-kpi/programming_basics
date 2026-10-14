function ip(ip) {
    const parts = ip.split(".").map(Number);

    return parts.reduce((acc, byte, index) => {
        return acc + (byte << (24 - index * 8));
    }, 0);
}

console.log(ip("127.0.0.1"));