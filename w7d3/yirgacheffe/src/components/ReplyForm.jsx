// ReplyForm

import { useState } from "react";

// Props: Users{}, addReply()
// State: formData

export default function ReplyForm(props) {
  // const [reply, setReply] = useState("")
  // const [authorId, setAuthorId] = useState("")
  const { addReply, users } = props;
  const initialFormData = { reply: "", authorId: "" };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { value, name } = event.target;

    const updatedFormData = { ...formData };
    updatedFormData[name] = value;

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addReply(formData);
    setFormData(initialFormData);
  };

  const authorOptions = Object.values(users).map((user) => (
    <option key={user.id} value={user.id}>
      {user.username}
    </option>
  ));

  return (
    <form className="ReplyForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="reply"
        placeholder="Enter your reply"
        value={formData.reply}
        onChange={handleChange}
      />
      {/* <input
        type="text"
        name="authorId"
        placeholder="Enter your authorId"
        value={formData.authorId}
        onChange={handleChange}
      /> */}
      <select name="authorId" value={formData.authorId} onChange={handleChange}>
        {authorOptions}
      </select>
      <button>Add reply</button>
    </form>
  );
}
