import readlineSync from 'readline-sync';
import name from '..';

const prime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log('');
  const count = (n) => {
    if (n === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const num = Math.round(100 * Math.random());
    console.log(num);
    const preNum = (a) => {
      for (let i = 2; i < a; i += 1) {
        if (a % i === 0) {
          return false;
        }
      }
      return true;
    };
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((preNum(num) === true && answer === 'yes') || (preNum(num) === false && answer === 'no')) {
      console.log('Correct!');
      return n + count(n + 1);
    }
    if (preNum(num) === false && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    if (preNum(num) === true && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    return true;
  };
  count(0);
};

export default prime;