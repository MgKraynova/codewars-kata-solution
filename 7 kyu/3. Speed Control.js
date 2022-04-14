// https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript

function gps(s, x) {
    if (x <= 1) {
        return 0;
    } else {

        let arrayOfDeltaDistance = [];

        x.forEach(function (current, currentIndex) {
            if (currentIndex < x.length - 1) {
                arrayOfDeltaDistance.push(x[currentIndex + 1] - current);
            }
        })

        let arrayOfAverageSpeed = [];

        arrayOfDeltaDistance.forEach((distance) => {
            let speed = (3600 * distance) / s;
            arrayOfAverageSpeed.push(speed);
        })

        console.log(Math.floor(Math.max(...arrayOfAverageSpeed)));

        return Math.floor(Math.max(...arrayOfAverageSpeed));
    }
}

gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]);