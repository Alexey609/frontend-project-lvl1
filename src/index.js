import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');
};
export const name = () => {
  const greeting = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${greeting}!`);
  console.log('');
};
