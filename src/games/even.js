import { generateRandomNumber, makeData } from '../utils';
import playGame from '..';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => value % 2 === 0;

const generateRound = () => {
  const question = generateRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return makeData (question, answer);
};

export default () => playGame(rule, generateRound);
