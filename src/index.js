const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    if (typeof (expr) !== 'string') throw Error;
    let words;

    
    if(expr.includes("**********")) words = expr.split("**********")
    else words = expr
    let res = "";

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].replace(/00/g, "").replace(/10/g, ".").replace(/11/g, "-").replace(/\*\*\*\*\*\*\*\*\*\*/g, " ");
        for (res in MORSE_TABLE) {
          if (res == words[i]) {
            words[i] = MORSE_TABLE[res];
          }
        }
      }
      return words.join(""); // возвращаем из массива элементов строку
    }


module.exports = {
    decode
}
