import { useState } from "react";

import Header from "./components/Header";
import QuestionForm from "./components/QuestionForm";
import NewQuestionForm from "./components/NewQuestionForm";
import Results from "./components/Results";

import { quizData as initialQuizData } from "./data/quizData";

import "./App.scss";
import useMode from "./hooks/useMode";
import useQuizData from "./hooks/useQuizData";

function App() {
  const [mode, toggleMode] = useMode("QUIZ");
  const {
    currentQuestion,
    scoreInfo,
    updateQuizAnswer,
    updateSkipQuestion,
    updateNewQuestion,
  } = useQuizData(initialQuizData);

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
