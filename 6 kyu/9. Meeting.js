// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

function meeting(s) {
  const arrayOfFriends = s.split(';');

  //console.log(arrayOfFriends);

  const arrayOfDividedFriendsFirstAndLastName = [];

  arrayOfFriends.forEach((friend) => {
    arrayOfDividedFriendsFirstAndLastName.push(friend.split(':'));
  });

  const arrayOfUpperCaseNames = arrayOfDividedFriendsFirstAndLastName.map((friend) => {
    return friend.map((name) => {
      return name.toUpperCase();
    });
  });

  //console.log(arrayOfUpperCaseNames);

  const arrayOfStringNames = arrayOfUpperCaseNames.map((friend) => {
    return '('.concat(friend.reverse().join(', ')).concat(')');
  });

  console.log(arrayOfStringNames.sort().join(''));
}

meeting('Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill');
