// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript

function vertMirror(strng) {
    return strng.split('\\n').map((item) => {
        return [...item].reverse().join('');
    }).join('\\n');

}
function horMirror(strng) {
    return strng.split('\\n').reverse().join('\\n');
}
function oper(fct, s) {
    return fct(s);
}

oper(horMirror, 'abcd\\nefgh\\nijkl\\nmnop');

//console.log(vertMirror('abcd\\nefgh\\nijkl\\nmnop')); // dcba\nhgfe\nlkji\nponm

//console.log(vertMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu")); // "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"

console.log(horMirror('lVHt\\nJVhv\\nCSbg\\nyeCt')); //yeCt\nCSbg\nJVhv\nlVHt