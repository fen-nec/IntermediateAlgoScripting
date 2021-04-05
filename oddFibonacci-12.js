function sumFibs(num) {
    let fibo = [1, 1];
    if (num === 1) {
      return num;
    }
    for (let i = 1; i <= num; i++) {
      fibo.push(fibo[i - 1] + fibo[i]);
    }
    //   return fibo;
    return fibo.filter((v) => v < num + 1 && v % 2 !== 0).reduce((a, b) => a + b);
  }
  
  // console.log(sumFibs(75025));
  // console.log(sumFibs(75024));
  // console.log(sumFibs(10));
  // console.log(sumFibs(11));
  