export const addQuestion = (quizData, prompt, answer) => {
  const newQuestion = {
    prompt,
    answer,
    id: String(quizData.questions.length + 1),
  };

  const updatedQuizData = { ...quizData };
  const updatedQuestions = [...quizData.questions, newQuestion];

  updatedQuizData.questions = updatedQuestions;

  return updatedQuizData;
};
//
export const answerQuestion = (quizData, currentQuestion, userAnswer) => {
  const isRightAnswer = currentQuestion.answer === userAnswer;

  const updatedQuizData = { ...quizData };

  // Increment correct Answer
  isRightAnswer && updatedQuizData.correctAnswers++;

  // Increment total Answer
  updatedQuizData.totalAnswers++;

  // Increment and check bound for index in array
  updatedQuizData.currentQuestionIndex =
    (updatedQuizData.currentQuestionIndex + 1) % updatedQuizData.questions.length;

  return updatedQuizData;
};

export const skipQuestion = (quizData) => {
  const updatedQuizData = { ...quizData };

  updatedQuizData.currentQuestionIndex =
  (updatedQuizData.currentQuestionIndex + 1) % updatedQuizData.questions.length;

  
  return updatedQuizData;
};
