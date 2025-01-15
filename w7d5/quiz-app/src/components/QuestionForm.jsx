import { useState } from "react";
import useFormData from "../hooks/useFormData";

export default function QuestionForm(props) {
  const { prompt, onSubmit, onSkip } = props;

  const initialFormData = { answer: "" };

  const [formData, handleChange, handleSubmit] = useFormData(initialFormData, onSubmit)

  return (
    <form className="QuestionForm" onSubmit={handleSubmit}>
      <p>{prompt}</p>
      <input
        type="text"
        name="answer"
        placeholder="Enter your answer here!"
        onChange={handleChange}
        value={formData.answer}
      />
      <div>
        <button>Answer Question</button>
        <button type="button" onClick={onSkip}>Skip Question</button>
      </div>
    </form>
  );
}
