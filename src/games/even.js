import engine from '..';
import randomNumber from './randomnumber';
import checkNum from './checknum';

const even = () => {
  const gameDesciption = 'Answer "yes" if number even otherwise answer "no".\n';
  

  const getData = () => {
    const num = randomNumber();
    if ((checkNum(num)) === true ) {
      console.log(`Question: ${num}`);
      return 'yes';
    }
    console.log(`Question: ${num}`);
    return 'no';
  };
  engine(gameDesciption, getData);
};

export default even;
