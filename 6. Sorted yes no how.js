// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

function isSortedAndHow(array) {

    let arrayIsSortedInAscendingOrder = true; // по возрастанию
    let arrayIsSortedInDescendingOrder = true; // по убыванию

    for (let i = 0; i < array.length - 1; i++) {

        if (!(array[i] <= array[i + 1])) {
            arrayIsSortedInAscendingOrder = false;
        }
        if (!(array[i] >= array[i + 1])) {
            arrayIsSortedInDescendingOrder = false;
        }
    }


    if (arrayIsSortedInDescendingOrder) {
        return 'yes, descending';
    } else if (arrayIsSortedInAscendingOrder) {
        return 'yes, ascending';
    } else {
        return 'no';
    }
}

isSortedAndHow([1, 2]);
isSortedAndHow([3, 4, 5]);
isSortedAndHow([5, 4, 3]);
isSortedAndHow([5, 10, 3]);
isSortedAndHow([0, 5, 5]);