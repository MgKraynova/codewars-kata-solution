// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
    const collection = new Map();

    arr.forEach((element) => {
        const timesInArray = collection.has(element) ? collection.get(element) + 1 : 1;
        collection.set(element, timesInArray);
    })

    for (const [value, timesInArray] of collection) {
        if (timesInArray === 1) {
            return value;
        }
    }
}