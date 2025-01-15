import { useReducer, useState } from "react";

import Header from "./components/Header";
import QuestionForm from "./components/QuestionForm";
import NewQuestionForm from "./components/NewQuestionForm";
import Results from "./components/Results";

import { quizData as initialQuizData } from "./data/quizData";

import "./App.scss";
import useMode from "./hooks/useMode";
import useQuizData from "./hooks/useQuizData";
import quizReducer from "./reducers/quizReducer";

function App() {
  const [mode, toggleMode] = useMode("QUIZ");

  const [state, dispatch] = useReducer(quizReducer, initialQuizData);

  const currentQuestion = state.questions[state.currentQuestionIndex];
  const scoreInfo = {
    totalAnswers: state.totalAnswers,
    correctAnswers: state.correctAnswers,
  };

  const updateQuizAnswer = (formData) =>
    dispatch({
      type: "answer",
      payload: { currentQuestion, userAnswer: formData.answer },
    });

  const updateSkipQuestion = () => dispatch({ type: "skip" });

  return (
    <>
      <Header toggleMode={toggleMode} />
      {mode === "QUIZ" && (
        <>
          <QuestionForm
            prompt={currentQuestion.prompt}
            onSubmit={updateQuizAnswer}
            onSkip={updateSkipQuestion}
          />
          <Results scoreInfo={scoreInfo} />
        </>
      )}
      {mode === "ADD" && <NewQuestionForm onSubmit={updateNewQuestion} />}
    </>
  );
}

export default App;
