import readlineSync from 'readline-sync';
import name from '..';

const even = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
  const count = (n) => {
    if (n === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const num = Math.round(100 * Math.random());
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      return n + count(n + 1);
    }
    if (num % 2 === 0 && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    if (num % 2 !== 0 && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    return true;
  };
  count(0);
};

export default even;