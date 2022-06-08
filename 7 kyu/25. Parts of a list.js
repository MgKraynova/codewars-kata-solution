// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

function partlist(arr) {

    const result = [];

    for (let i = 1; i < arr.length; i++) {

        const firstPartOfString = arr.slice(0, i).join(' ');
        const secondPartofString = arr.slice(i).join(' ');

        result.push([firstPartOfString, secondPartofString]);
    }

    return result;
}

//partlist( ["az", "toto", "picaro", "zone", "kiwi"]);
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

partlist(["I", "wish", "I", "hadn't", "come"]);