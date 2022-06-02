// https://www.codewars.com/kata/56f6919a6b88de18ff000b36/train/javascript


function howManyDalmatians(number) {
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];

    var respond;

    switch (true) {
        case (number <= 10):
            respond = dogs[0];
            break;
        case number <= 50:
            respond = dogs[1];
            break;
        case (number < 101):
            respond = dogs[2];
            break;
        case (number === 101):
            respond = dogs[3];
            break;
        default:
            respond = dogs[2];
    }

    return respond;
}

howManyDalmatians(101);