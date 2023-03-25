// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const seconds2 = Math.floor((seconds % 3600) % 60);

  return `${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}:${
    seconds2 >= 10 ? seconds2 : '0' + seconds2
  }`;
}

console.log(humanReadable(109810));
