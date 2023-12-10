console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// for (let num = 1; num <= 100; num++) {
//   if (num % 2 == 0) {
//     continue;
//   } else {
//     console.log(num);
//   }
// }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// for (let num = 1; num <= 100; num++) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log(`${num} FIZZBUZZ`);
//   } else {
//     if (num % 3 == 0) {
//       console.log(`${num} FIZZ`);
//     } else {
//       if (num % 5 == 0) {
//         console.log(`${num} BUZZ`);
//       }
//     }
//   }
// }

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// let num = 1;

// while (num <= 100) {
//   if (num % 2 == 0) {
//     num++;
//     continue;
//   } else {
//     console.log(num);
//   }
//   num++;
// }

// let num = 1;

// do {
//   if (num % 2 == 0) {
//     num++;
//     continue;
//   } else {
//     console.log(num);
//   }
//   num++;
// } while (num <= 100);

// let num = 1;

// while (num <= 100) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log(`${num} FIZZBUZZ`);
//   } else {
//     if (num % 3 == 0) {
//       console.log(`${num} FIZZ`);
//     } else {
//       if (num % 5 == 0) {
//         console.log(`${num} BUZZ`);
//       }
//     }
//   }
//   num++;
// }

// let num = 1;

// do {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log(`${num} FIZZBUZZ`);
//   } else {
//     if (num % 3 == 0) {
//       console.log(`${num} FIZZ`);
//     } else {
//       if (num % 5 == 0) {
//         console.log(`${num} BUZZ`);
//       }
//     }
//   }
//   num++;
// } while (num <= 100);

// Exercise 4 Section //
console.log("EXERCISE 4:\n==========\n");

// let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
// let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

// for (let num = 0; num <= n; num++) {
//   if (num == value) {
//     console.log("Found value!");
//     break;
//   }
//   if (num == n) {
//     console.log("Did not find value");
//   }
// }

// Exercise 5: Customized FIZZBUZZ //
console.log("EXERCISE 5:\n==========\n");

// let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let n = Math.round(Math.random() * (1000 - 1) + 1);
// let start = Math.round(Math.random() * (10 - 1) + 1);

// for (let i = start; i <= n; i++) {
//   if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
//     console.log(` ${i} FIZZBUZZ`);
//   } else {
//     if (i % fizzDivisor == 0) {
//       console.log(`${i} FIZZ`);
//     } else {
//       if (i % buzzDivisor == 0) {
//         console.log(`${i}  BUZZ`);
//       }
//     }
//   }
// }

// console.log(fizzDivisor, buzzDivisor);
