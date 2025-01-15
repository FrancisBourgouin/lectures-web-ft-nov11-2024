import { addQuestion, answerQuestion, skipQuestion } from "../helpers/quizHelpers";

export default function quizReducer(state, action) {
  switch (action.type) {
    case "add":
      const { prompt, answer } = action.payload;
      return addQuestion(state, prompt, answer);
    case "answer":
      const { currentQuestion, userAnswer } = action.payload;
      return answerQuestion(state, currentQuestion, userAnswer);
    case "skip":
      return skipQuestion(state);
  }
}
