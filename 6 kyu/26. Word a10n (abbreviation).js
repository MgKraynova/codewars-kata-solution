// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

function abbreviate(string) {
  const regexForSymbols = /\W/;

  if (string.includes(' ')) {
    return string
      .split(' ')
      .map((item) => {
        if (item.length >= 4) {
          if (item.includes('-')) {
            return item
              .split('-')
              .map((symbol) => {
                return symbol[0] + (symbol.length - 2).toString() + symbol[symbol.length - 1];
              })
              .join('-');
          } else {
            const lastSymbolInAbbriviateWord = regexForSymbols.test(item[item.length - 1])
              ? item[item.length - 2] + item[item.length - 1]
              : item[item.length - 1];

            const numberInAbbriviateWord =
              item[item.length - 1] === ',' ? (item.length - 3).toString() : (item.length - 2).toString();

            return item[0] + numberInAbbriviateWord + lastSymbolInAbbriviateWord;
          }
        } else {
          return item;
        }
      })
      .join(' ');
  } else {
    if (string.length >= 4) {
      if (string.includes('-')) {
        return string
          .split('-')
          .map((symbol) => {
            return symbol[0] + (symbol.length - 2).toString() + symbol[symbol.length - 1];
          })
          .join('-');
      } else {
        return string[0] + (string.length - 2).toString() + string[string.length - 1];
      }
    } else {
      return string;
    }
  }
}

//abbreviate('elephant-ride');
//abbreviate('You need, need not want, to complete this code-wars mission');
//console.log(abbreviate('You need, need not want, to complete this code-wars mission'));
// You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n
console.log(abbreviate('double-barreled'));
