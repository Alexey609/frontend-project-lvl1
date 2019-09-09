import readlineSync from 'readline-sync';
import name from '..';

const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  console.log('');
  const count = (n) => {
    if (n === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const num1 = Math.round(100 * Math.random());
    const num2 = Math.round(100 * Math.random());
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');

    const maxDivisor = (a, b) => {
      if (a === b) {
        return a;
      }
      while (a !== b) {
        if (a > b) {
          return maxDivisor(a - b, b);
        }
        return maxDivisor(a, b - a);
      }
      return true;
    };

    if (maxDivisor(num1, num2) === parseInt(answer, 10)) {
      console.log('Correct!');
      return n + count(n + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${maxDivisor(num1, num2)}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  };
  count(0);
};

export default gcd;