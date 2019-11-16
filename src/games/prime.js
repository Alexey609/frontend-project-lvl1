import engine from '..';
import randomNumber from './randomnumber';

const prime = () => {
  const gameDesciption = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
  };

  const question = (a) => {
    for (let i = 2; i < a; i += 1) {
      if (a % i === 0) {
        return false;
      }
    }
    return true;
  };

  const getData = () => {
    const num = randomNumber();
    if (question(num) === true && num > 1) {
      console.log(`Question: ${num}`);
      return 'yes';
    }
    console.log(`Question: ${num}`);
    return 'no';
  };
  engine(gameDesciption, getData);
};

export default prime;
