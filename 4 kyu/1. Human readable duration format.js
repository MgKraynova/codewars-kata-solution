// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
  if (seconds === 0) {
    return 'now';
  }

  const years = Math.floor(seconds / 31536000);
  const days = Math.floor((seconds % 31536000) / 86400);
  const hours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  const minutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  const seconds2 = Math.floor(((((seconds % 31536000) % 86400) % 3600) % 60) % 60);

  let resultArray = [];

  if (years === 1) {
    resultArray.push('1 year');
  } else if (years > 1) {
    resultArray.push(`${years} years`);
  }

  if (days === 1) {
    resultArray.push('1 day');
  } else if (days > 1) {
    resultArray.push(`${days} days`);
  }

  if (hours === 1) {
    resultArray.push('1 hour');
  } else if (hours > 1) {
    resultArray.push(`${hours} hours`);
  }

  if (minutes === 1) {
    resultArray.push('1 minute');
  } else if (minutes > 1) {
    resultArray.push(`${minutes} minutes`);
  }

  if (seconds2 === 1) {
    resultArray.push('1 second');
  } else if (seconds2 > 1) {
    resultArray.push(`${seconds2} seconds`);
  }

  return resultArray
    .map((item, index) => {
      if (index === resultArray.length - 2) {
        return item.concat(' and ');
      } else if (index === resultArray.length - 1) {
        return item;
      } else {
        return item.concat(', ');
      }
    })
    .join('');
}

formatDuration(3662);
