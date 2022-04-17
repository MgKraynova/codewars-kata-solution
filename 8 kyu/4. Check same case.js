// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

function sameCase(a, b){
    const regex = /[a-zA-Z]{1}/i;

    const regexUpperCase = /[A-Z]{1}/;
    const regexLowerCase = /[a-z]{1}/;

    console.log(regex.test(a));
    console.log(regex.test(b));

    if (!regex.test(a) || !regex.test(b)) {
        console.log(-1);
        return -1;
    } else if ((regexUpperCase.test(a) && regexUpperCase.test(b)) || (regexLowerCase.test(a) && regexLowerCase.test(b))) {
        console.log(1);
        return 1;
    } else {
        console.log(0);
        return 0;
    }
}

//sameCase('C', 'B');
//sameCase('\t', 'B');
sameCase('t', 'b');