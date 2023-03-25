// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url) {
  const deletedHttpAndSlashes = url.replace(/https?:\/\//gi, '');

  const deletedWWW = deletedHttpAndSlashes.replace(/^w{3}\.?/gi, '');

  const deletedAllAfterPoint = deletedWWW.replace(/\..*/, '');

  return deletedAllAfterPoint;
}

// console.log(domainName('https://www.o2b2kn.fr/default.html'))
// console.log(domainName('http://google'));
console.log(domainName('http://www.okv3l.tv/index.php'));
