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
  engine(gameDesciption, getData);
};

export default even;
