// https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

function wordsToMarks(string){
    let sum = 0;

    [...string].forEach((item) => {
        sum += item.charCodeAt(0) - 96;
    })

    console.log(sum);
    return sum;
}

wordsToMarks('love');