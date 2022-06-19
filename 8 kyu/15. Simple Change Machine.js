// https://www.codewars.com/kata/57238766214e4b04b8000011/train/javascript

function changeMe(moneyIn){

    if (moneyIn === 'Money') {
        return moneyIn;
    } else if (!moneyIn.includes('£') && !moneyIn.includes('0p')) {
        return 'Not a specified coin or note';
    } else if (moneyIn === '20p') {
        return '10p 10p';
    } else if (moneyIn.includes('£') || moneyIn.includes('p')) {
        let amountOf20p;
        let amountOf10p;

        if (moneyIn.includes('£')) {
            amountOf20p = Math.floor(parseInt(moneyIn.slice(1)) * 100 / 20);
            amountOf10p = parseInt(moneyIn.slice(1)) * 100 % 20 / 10;
        } else {
            amountOf20p = Math.floor(parseInt(moneyIn.slice(0, -1)) / 20);
            amountOf10p = parseInt(moneyIn.slice(0, -1)) % 20 / 10;
        }

        return [...Array(amountOf20p).fill('20p'), ...Array(amountOf10p).fill('10p')].join(' ');
    }
}

changeMe('50p');
//changeMe('50p');
//changeMe('Not a specified coin or note');
