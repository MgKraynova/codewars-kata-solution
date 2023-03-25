// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function zero(f) {
  if (f) {
    return f(0);
  }
  return 0;
}

function one(f) {
  if (f) {
    return f(1);
  }
  return 1;
}

function two(f) {
  if (f) {
    return f(2);
  }
  return 2;
}

function three(f) {
  if (f) {
    return f(3);
  }
  return 3;
}

function four(f) {
  if (f) {
    return f(4);
  }
  return 4;
}

function five(f) {
  if (f) {
    return f(5);
  }
  return 5;
}

function six(f) {
  if (f) {
    return f(6);
  }
  return 6;
}

function seven(f) {
  if (f) {
    return f(7);
  }
  return 7;
}

function eight(f) {
  if (f) {
    return f(8);
  }
  return 8;
}

function nine(f) {
  if (f) {
    return f(9);
  }

  return 9;
}

function plus(a, b) {
  return function (b) {
    return a + b;
  };
}

function minus(a, b) {
  return function (b) {
    return b - a;
  };
}

function times(a, b) {
  return function (b) {
    return a * b;
  };
}

function dividedBy(a, b) {
  return function (b) {
    return Math.floor(b / a);
  };
}

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
