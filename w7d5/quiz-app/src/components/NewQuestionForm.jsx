import useFormData from "../hooks/useFormData";

export default function NewQuestionForm(props) {
  const { onSubmit } = props;
  const initialFormData = { prompt: "", answer: "" };

  const [formData, handleChange, handleSubmit] = useFormData(initialFormData, onSubmit);

  return (
    <form className="NewQuestionForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="prompt"
        placeholder="Enter your prompt here!"
        onChange={handleChange}
        value={formData.prompt}
      />
      <input
        type="text"
        name="answer"
        placeholder="Enter your answer here!"
        onChange={handleChange}
        value={formData.answer}
      />
      <button>Add Question</button>
    </form>
  );
}
