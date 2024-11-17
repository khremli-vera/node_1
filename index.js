const calc = require('node_1_pack_vk');
const data = [
    '15 9 + 10 - 14 - 7 * 5 14 * 14 - *',
    '8 2 15 * + 8 - 13 * 15 - 6 6 13 + + -',
    '4 9 + 1 - 2 6 13 8 0 6 9 * - - + + - *',
    '6 1 - 14 * 11 + 3 - 2 12 5 - * +',
    '2 11 6 * - 6 * 7 - 7 + 14 + 8 10 * +',
    '13 3 14 * 10 + * 12 4 + + 8 *',
    '10 3 11 - + 7 + 2 - 10 - 10 -',
    '4 9 - 1 14 - - 12 + 2 1 - - 8 -',
    '2 11 0 * * 13 15 - + 0 - 4 * 1 *',
    '4 8 6 10 * * * 0 11 * -'
]
const resArray = [];
const checkData = [0, 350, -948, 92, -290, 5536, -13, 11, -8, 1920];
const isVadidAnswers = true;

for (let i = 0; i < data.length; i++) {
    resArray.push(calc.getPolishReverseRes(data[i]))
}

for (let i = 0; i < data.length; i++) {
    if (checkData[i] !== resArray[i]) {
        isVadidAnswers = false;
        break
    }
}

console.log(isVadidAnswers)

