console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)
console.log('05)', '3' < 2)
console.log('06)', '3' > 2)
console.log('07)', '3' <= 2)
console.log('08)', '3' >= 2)

const data1 = new Date(0)
const data2 = new Date(0)

// Essas situações vão ser falsas, ele compara as referências de memória
console.log('09)', data1 === data2)
console.log('10)', data1 == data2)

console.log('11)', data1.getTime() == data2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)