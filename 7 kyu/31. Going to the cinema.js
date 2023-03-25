// https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/javascript

function movie(card, ticket, perc) {
  let counter = 0;
  let totalCountA = 0;
  let totalCountB = card;

  while (totalCountA <= Math.ceil(totalCountB)) {
    counter += 1;
    totalCountB = (ticket * perc * (Math.pow(perc, counter) - 1)) / (perc - 1) + card;
    totalCountA = ticket * counter;
  }

  return counter;
}
movie(500, 15, 0.9); // 43
movie(100, 10, 0.95); // 24
movie(0, 10, 0.95); // 2
movie(491388, 41, 0.13); // expected 11991 to equal 11986

//movie(7930, 4, 0.12); //1983
//     testing(Movie.movie(835076, 13, 0.97), 64270);
