// https://www.codewars.com/kata/619f200fd0ff91000eaf4a08/train/javascript

function oddOrEven(n) {

    if (n === 1) {
        return EITHER;
    }

    let numberOfOddNumbers = Math.ceil(n / 2);
    let numberOfEvenNumbers = Math.floor(n / 2);


    if (numberOfEvenNumbers != numberOfOddNumbers) {
        return EITHER;
    } else if (numberOfOddNumbers % 2 === 0) {
        return EVEN;
    } else {
        return ODD;
    }
}

oddOrEven(3); //For input 3: expected 'Even' to equal 'Either'

oddOrEven(9); // For input 9: expected 'Odd' to equal 'Either'
