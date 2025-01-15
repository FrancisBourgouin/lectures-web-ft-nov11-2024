import { useState } from "react";
import { addQuestion, answerQuestion, skipQuestion } from "../helpers/quizHelpers";
import useWow from "./useWow";

export default function useQuizData(initialQuizData) {
  const [quizData, setQuizData] = useState(initialQuizData);
  const { sayWow } = useWow();

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const updateQuizAnswer = (formData) => {
    const updatedQuizData = answerQuestion(quizData, currentQuestion, formData.answer);

    if (currentQuestion.answer === formData.answer) {
      sayWow();
    }

    setQuizData(updatedQuizData);
  };

  const updateSkipQuestion = () => {
    const updatedQuizData = skipQuestion(quizData);

    setQuizData(updatedQuizData);
  };
  const updateNewQuestion = (formData) => {
    const updatedQuizData = addQuestion(quizData, formData.prompt, formData.answer);

    setQuizData(updatedQuizData);
  };

  const scoreInfo = {
    correctAnswers: quizData.correctAnswers,
    totalAnswers: quizData.totalAnswers,
  };

  return {
    currentQuestion,
    scoreInfo,
    updateQuizAnswer,
    updateSkipQuestion,
    updateNewQuestion,
  };
}
