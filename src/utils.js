const generateRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const getQuestion = (data) => data.question;
const getAnswer = (data) => data.answer;
const makeData = (data) => {
 const question = getQuestion(data);
 const answer = getAnswer(data);

 return consData(question, answer);
};

export {
  generateRandomNumber,
  getQuestion,
  getAnswer,
};
