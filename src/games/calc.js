import readlineSync from 'readline-sync';
import name from '..';

const calc = () => {
  console.log('What is the result of the expression?');
  console.log('');
  const count = (n) => {
    if (n === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const num1 = Math.round(100 * Math.random());
    const num2 = Math.round(100 * Math.random());
    const str = '+-*';
    const sign = str[Math.floor(Math.random() * 3)];
    console.log(`Question: ${num1} ${sign} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    if (sign === '+') {
      if ((num1 + num2) === parseInt(answer, 10)) {
        console.log('Correct!');
        return n + count(n + 1);
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${num1 + num2}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    if (sign === '-') {
      if ((num1 - num2) === parseInt(answer, 10)) {
        console.log('Correct!');
        return n + count(n + 1);
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${num1 - num2}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    if (sign === '*') {
      if ((num1 * num2) === parseInt(answer, 10)) {
        console.log('Correct!');
        return n + count(n + 1);
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${num1 * num2}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    return true;
  };
  count(0);
};

export default calc;