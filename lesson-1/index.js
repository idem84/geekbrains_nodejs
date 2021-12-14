const colors = require("colors");
const getPrimes = (start, max) => {
  var sieve = [],
    i,
    j,
    primes = [];
  for (i = start; i <= max; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
};

const printColorNumber = (number, index) => {
  switch (index) {
    case 0:
      console.log(colors.green(number));

      break;
    case 1:
      console.log(colors.yellow(number));

      break;
    case 2:
      console.log(colors.red(number));

      break;

    default:
      console.log(colors.blue(number));

      break;
  }
};

let args = process.argv;
let range = args.slice(-2);
let start = parseInt(range[0]);
let end = parseInt(range[1]);

if (isNaN(start) || isNaN(end)) {
  console.log("Error, please enter two integers");

  return false;
}

if (start < 2) {
  console.log("Error, start number must be more then 1");

  return false;
}

const numbers = getPrimes(start, end);

if (numbers.length < 1) {
  console.log("Error, there are no primes in the specified range");

  return false;
}

numbers.forEach((element, i) => {
  printColorNumber(element, i);
});
