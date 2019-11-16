import engine from '..';
import randomNumber from './randomnumber';

const even = () => {
  const gameDesciption = () => {
    console.log('Answer "yes" if number even otherwise answer "no".\n');
  };

  const getData = () => {
    const num = randomNumber();
    if (num % 2 === 0) {
      console.log(`Question: ${num}`);
      return 'yes';
    }
    console.log(`Question: ${num}`);
    return 'no';
  };

  const check = () => {
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      return true;
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
  engine(gameDesciption, getData, check);
};

export default even;
