import readlineSync from 'readline-sync';
import name from '..';

const progression = () => {
  console.log('What number is missing in the progression?');
  console.log('');
  const count = (n) => {
    if (n === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const genProgress = () => {
      const step = 3;
      const iter = (i, acc) => {
        if (i === 10) {
          return acc;
        }
        return iter(i + 1, `${acc} ${13 + step * i}`);
      };
      return iter(1, 13);
    };

    const progress = genProgress();

    console.log(progress);

    const randomIndex = (min = 0, max = (progress.length - 1)) => Math.floor(Math.random()
    * (max - min)) + min;

    const index = randomIndex();

    const indexOfNum = (i) => {
      if (progress[i] === ' ') {
        return index - 2;
      }
      if (progress[i] !== ' ' && progress[i + 1] === ' ') {
        return i - 1;
      }
      if (progress[i] !== ' ' && progress[i - 1] === ' ') {
        return i;
      }
      if (i === 0) {
        return i;
      }
      if (i === 28) {
        return 27;
      }
      return true;
    };

    const questNum = progress.slice(indexOfNum(index), indexOfNum(index) + 2);

    const questProgress = (str) => {
      if (indexOfNum(index) !== 0) {
        return `${str.substring(0, indexOfNum(index))}..${str.substring(indexOfNum(index) + 2, str.lebngth)}`;
      }
      return `..${str.substring(indexOfNum(index) + 2, str.length)}`;
    };
    console.log(`Question: ${questProgress(progress)}`);
    const answer = readlineSync.question('Your answer: ');

    if (questNum === answer) {
      console.log('Correct!');
      return n + count(n + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questNum}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  };
  count(0);
  console.log('');
};

export default progression;