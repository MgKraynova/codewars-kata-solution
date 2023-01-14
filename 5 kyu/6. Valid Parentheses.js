// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
    const CLOSED_PARENS = '()';
    let copyOfParens = parens;

    while (copyOfParens.includes(CLOSED_PARENS)) {
        copyOfParens = copyOfParens.replace(CLOSED_PARENS, '');
    }

    return copyOfParens.length <= 0;
}

validParentheses("(())((()())())");
validParentheses("())(()");
