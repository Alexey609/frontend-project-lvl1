import readlineSync from 'readline-sync';

const engine = (gameDesciption, fun2) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDesciption);  
  
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const count = (n) => {
    if (n === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const rightAnswer = fun2();
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!\n');
    return n + count(n + 1);
  };
  count(0);
};

export default engine;
