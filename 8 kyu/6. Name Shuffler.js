// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

function nameShuffler(str){
    let names = str.split(' ');
    console.log(names);
    let final = names[names.length - 1].concat(' ').concat(names[0]);
    console.log(final);
}

nameShuffler('john McClane');