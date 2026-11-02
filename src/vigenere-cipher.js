class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  convert(message, key, direction) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const upperKey = key.toUpperCase();
    let index = 0;
    const result = message.toUpperCase().replace(/[A-Z]/g, (letter) => {
      const shift = upperKey.charCodeAt(index % upperKey.length) - 65;
      index += 1;
      return String.fromCharCode((letter.charCodeAt(0) - 65 + direction * shift + 26) % 26 + 65);
    });
    return this.direct ? result : result.split('').reverse().join('');
  }
  encrypt(message, key) {
    return this.convert(message, key, 1);
  }
  decrypt(message, key) {
    return this.convert(message, key, -1);
  }
}

module.exports = { directMachine: new VigenereCipheringMachine(), reverseMachine: new VigenereCipheringMachine(false), VigenereCipheringMachine };
