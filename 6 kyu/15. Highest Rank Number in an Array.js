// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

function highestRank(arr){

    let object = {};

    arr.forEach((number) => {
        if (number in object) {
            object[number]++;
        } else {
            object[number] = 1;
        }
    });
    console.log(object);
    let theMostFrequentNumber = Object.keys(object)[0];

    for (number in object) {

        if (object[number] === object[theMostFrequentNumber]) {
            if (number > theMostFrequentNumber) {
                theMostFrequentNumber = number;
            }
        } else if (object[number] > object[theMostFrequentNumber]) {
            theMostFrequentNumber = number;
        }
    }

    console.log(theMostFrequentNumber);
    return parseInt(theMostFrequentNumber);
}

// highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]); // 12
// highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]); // 3
highestRank([12,10,8,12,7,6,4,10,12,10]); // 12