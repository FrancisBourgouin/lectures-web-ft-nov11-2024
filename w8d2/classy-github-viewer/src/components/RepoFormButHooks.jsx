import { useState } from "react";

export default function RepoForm(props) {

  const initialData = { owner: "", repo: "" }
  const [formData, setFormData] = useState(initialData);


  const handleChange = (event) => {
    const { name, value } = event.target;

    const updatedState = { ...formData };
    updatedState[name] = value;

    setFormData(updatedState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);

    setFormData(initialData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="owner"
        placeholder="Enter the owner"
        value={formData.owner}
        onChange={handleChange}
      />
      <input
        type="text"
        name="repo"
        placeholder="Enter the repo"
        value={formData.repo}
        onChange={handleChange}
      />
      <button>Fetch commits</button>
    </form>
  );
}
