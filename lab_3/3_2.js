const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(8, characters);

function generateKey(length, characters) {
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    result += characters[randomNumber];
  }
  return result;
}
console.log(key);