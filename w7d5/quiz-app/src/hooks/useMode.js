import { useState } from "react";

export default function useMode(initialMode) {
  const QUIZ = "QUIZ";
  const ADD = "ADD";

  const [mode, setMode] = useState(QUIZ); // QUIZ | ADD

  const toggleMode = () => setMode(mode === QUIZ ? ADD : QUIZ);

  return [mode, toggleMode]
}
