import engine from '..';

const progression = () => {
  const gameDesciption = 'What number is missing in the progression?\n';
  const makeProgression = () => {
    const step = 3;
    const iter = (i, acc) => {
      if (i === 10) {
        return acc;
      }
      return iter(i + 1, `${acc} ${13 + step * i}`);
    };
    return iter(1, 13);
  };

  const getData = () => {
    const getProgression = makeProgression();
    const randomIndex = (min = 0, max = (getProgression.length - 1)) => Math.floor(Math.random()
    * (max - min)) + min;

    const numIndex = (i) => {
      if (getProgression[i] === ' ') {
        return i - 2;
      }
      if (getProgression[i] !== ' ' && getProgression[i + 1] === ' ') {
        return i - 1;
      }
      if (getProgression[i] !== ' ' && getProgression[i - 1] === ' ') {
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

    const index = randomIndex();

    const correctAnswer = getProgression.slice(numIndex(index), numIndex(index) + 2);

    const getQuestionProgression = (str) => {
      if (numIndex(index) !== 0) {
        return `${str.substring(0, numIndex(index))}..${str.substring(numIndex(index) + 2, str.length)}`;
      }
      return `..${str.substring(numIndex(index) + 2, str.length)}`;
    };
    console.log(`Question: ${getQuestionProgression(getProgression)}`);
    return String(correctAnswer);
  };
  engine(gameDesciption, getData);
};

export default progression;
