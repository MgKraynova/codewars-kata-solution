// https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

function encrypt(text, n) {

    if ((text === null) || (text === '')) {
        return text;
    }

    if (n <= 0) {
        return text;
    }

    for (let i = 1; i <= n; i++) {
        // 1. Превращаем строку в массив символов
        let arrayOfCharacters = text.split('');

        // 2. Отбираем четные и нечетные числа
        let arrayOfOddIndexedCharacters = [];
        let arrayOfEvenIndexedCharacters = [];

        for (let j = 0; j < arrayOfCharacters.length; j++) {
            if (j % 2 === 0) {
                arrayOfOddIndexedCharacters.push(arrayOfCharacters[j]);
            } else {
                arrayOfEvenIndexedCharacters.push(arrayOfCharacters[j]);
            }
        }

        // 3. Преобразуем массивы четных и нечетных чисел в строки и соединяем их
        text = arrayOfEvenIndexedCharacters.join('').concat(arrayOfOddIndexedCharacters.join(''));
    }
    return text;
}

function decrypt(encryptedText, n) {

    if ((encryptedText === null) || (encryptedText === '')) {
        return encryptedText;
    }

    if (n <= 0) {
        return encryptedText;
    }

    for (let i = 1; i <= n; i++) {
        // 1. Превращаем строку в массив символов
        let arrayOfCharacters = encryptedText.split('');

        // 2. Делим массив пополам, чтобы отобрать четные и нечетные числа из первоначальной строки
        let arrayOfExOddIndexedCharacters = [];
        let arrayOfExEvenIndexedCharacters = [];

        for (let j = 0; j < arrayOfCharacters.length; j++) {
            if (j < Math.floor(arrayOfCharacters.length / 2)) {
                    arrayOfExEvenIndexedCharacters.push(arrayOfCharacters[j]);
            } else {
                    arrayOfExOddIndexedCharacters.push(arrayOfCharacters[j]);
            }
        }

        // 3. Преобразуем массивы четных и нечетных чисел  первоначальную строку
        encryptedText = '';
        for (let j = 0; j < arrayOfCharacters.length / 2; j++ ) {
            encryptedText = encryptedText.concat(arrayOfExOddIndexedCharacters[j]);

            if (!(arrayOfExEvenIndexedCharacters[j] === undefined)) {
                encryptedText = encryptedText.concat(arrayOfExEvenIndexedCharacters[j]);
            }
        }
    }
    return encryptedText;
}

encrypt("This is a test!", 0);
encrypt('012345', 3);
decrypt("hsi  etTi sats!", 1); // This is a test!
decrypt("s eT ashi tist!", 2); // This is a test!
decrypt(" Tah itse sits!", 3); // This is a test!

decrypt('012345', 3);