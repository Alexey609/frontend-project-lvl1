import engine from '..';
import randomNumber from './randomnumber';

const gcd = () => {
  const gameDesciption = 'Find the greatest common divisor of given numbers.\n';
  const getData = () => {
    const getMaxDivisor = (a, b) => {
      if (a === b && a !== 0 && b !== 0) {
        return a;
      }
      while (a !== b && a !== 0 && b !== 0) {
        if (a > b) {
          return getMaxDivisor(a - b, b);
        }
        return getMaxDivisor(a, b - a);
      }
      return a === 0 ? b : getMaxDivisor(b, a);
    };
    const num1 = randomNumber();
    const num2 = randomNumber();
    console.log(`Question: ${num1} ${num2}`);
    return String(getMaxDivisor(num1, num2));
  };
  engine(gameDesciption, getData);
};

export default gcd;
