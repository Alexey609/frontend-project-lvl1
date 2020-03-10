import { generateRandomNumber } from '../utils';
import playGame from '..';

const rule = 'What number is missing in the progression?';

const getQuestion = (start, step, length, hiddenValueIndex) => {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result = i === hiddenValueIndex ? `${result} ..` : `${result} ${start + step * i}`;
  }

  return result.trim();
};

const progressLength = 10;
const lastIndex = progressLength - 1;

const generateRound = () => {
  const hiddenValueIndex = generateRandomNumber(0, lastIndex);
  const start = generateRandomNumber(1, 100);
  const step = generateRandomNumber(1, 30);
  const question = getQuestion(start, step, progressLength, hiddenValueIndex);
  const answer = (start + step * hiddenValueIndex).toString();

  return { question, answer };
};

export default () => playGame(rule, generateRound);
