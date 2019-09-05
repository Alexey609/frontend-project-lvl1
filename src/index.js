import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');


export const name = readlineSync.question('May I have your name? ');

 export const count = (n) => {
    
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


export const sum = () => {
  console.log('What is the result of the expression?');
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


export const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const count = (n) => {
    if (n === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const num1 = Math.round(100 * Math.random());
    const num2 = Math.round(100 * Math.random());
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');

    const maxDivisor = (a, b) => {
      if (a === b) {
        return a;
      }
      while (a !== b) {
        if (a > b) {
          return maxDivisor(a - b, b);
        }
        return maxDivisor(a, b - a);
      }
      return true;
    };

    if (maxDivisor(num1, num2) === parseInt(answer, 10)) {
      console.log('Correct!');
      return n + count(n + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${maxDivisor(num1, num2)}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  };
  count(0);
};

export const progression = () => {

  console.log('What number is missing in the progression?');
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
};

export const prime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  const count = (n) => {
    if (n === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const num = Math.round(100 * Math.random());
    console.log(num);
    const preNum = (a) => {
      for (let i = 2; i < a; i += 1) {
        if (a % i === 0) {
          return false;
        }
      }
      return true;
    };
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((preNum(num) === true && answer === 'yes') || (preNum(num) === false && answer === 'no')) {
      console.log('Correct!');
      return n + count(n + 1);
    }
    if (preNum(num) === false && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    if (preNum(num) === true && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    return true;
  };
  count(0);
};






