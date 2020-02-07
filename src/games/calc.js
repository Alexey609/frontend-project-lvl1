import engine from '..';
import randomNumber from './randomnumber';

const calc = () => {
  const gameDesciption = 'What is the result of the expression?\n';
  const getData = () => {
    const num1 = randomNumber();
    const num2 = randomNumber();
    const listOfOperations = '+-*';
    const operation = listOfOperations[Math.floor(Math.random() * listOfOperations.length)];
    switch (operation) {
      case '+':
        console.log(`Question: ${num1} ${operation} ${num2}`);
        return String(num1 + num2);

      case '-':
        console.log(`Question: ${num1} ${operation} ${num2}`);
        return String(num1 - num2);

      default:
        console.log(`Question: ${num1} ${operation} ${num2}`);
        return String(num1 * num2);
    }
  };
  engine(gameDesciption, getData);
};

export default calc;
