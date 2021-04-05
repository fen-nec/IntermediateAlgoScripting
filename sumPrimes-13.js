/**
 * Find the some of the prime numbers smaller than num by iterating over 
 * the range 1 - sqrt(num) and testing the remainder of num over 
 * the current number in the range. Return > 1
 * @param {*} num
 */

function sumPrimes(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    const isPrime = (num) => {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };
    return arr.filter((v) => isPrime(v)).reduce((a, b) => a + b);
  }
  
  // console.log(sumPrimes(977));
  console.log(sumPrimes(10));
  