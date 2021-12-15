const colors = require("colors");
const getPrimes = (start, max) => {
  // var sieve = [],
  //   i,
  //   j,
  //   primes = [];
  // for (i = start; i <= max; ++i) {
  //   if (!sieve[i]) {
  //     primes.push(i);
  //     for (j = i << 1; j <= max; j += i) {
  //       sieve[j] = true;
  //     }
  //   }
  // }
  // return primes;
  primes = [];

  for (let i = start; i <= max; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;

        break;
      }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
      primes.push(i);
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

let iterator = 1;

numbers.forEach((element) => {
  if (iterator === 1) {
    console.log(colors.green(element));
    iterator++;
    if (iterator > 3) iterator = 1;
  } else if (iterator === 2) {
    console.log(colors.yellow(element));
    iterator++;
    if (iterator > 3) iterator = 1;
  } else if (iterator === 3) {
    console.log(colors.red(element));
    iterator++;
    if (iterator > 3) iterator = 1;
  }
  //printColorNumber(element, i);
});
