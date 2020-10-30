/* 
MEMOIZATION:
- What: technique giúp tăng performance bằng cách tái sử dụng kết quả trước đó
- When: tính toán, xử lý phức tạp, tốn thời gian, sử dụng nhiều
- Why: optimize performance
- How: combine closure function & Higher order functions
*/

const memoizedSum = () => {
  const cache = {};

  return (n) => {
    //valid n
    if (n <= 0) return -1;

    //check cache and return if any
    if (cache[n]) {
      console.log("Use result from cache", cache[n]);
      return cache[n];
    }

    //calculate and save to cache
    const result = (n * (n + 1)) / 2;
    cache[n] = result;
    console.log("Calculation result ", result);
    return result;
  };
};
const magicSum = memoizedSum();

magicSum(9);
magicSum(10);
magicSum(23);
magicSum(10);
magicSum(8);

const magicSum2 = memoizedSum();

magicSum2(9);
magicSum2(10);
magicSum2(10);
