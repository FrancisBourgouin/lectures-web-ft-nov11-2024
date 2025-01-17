import { useState } from "react";

export default function useFormData(initialFormData, onSubmit) {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = Object.values(formData).filter(field => field === "").length === 0
    
    if(isValid){
      onSubmit(formData);
    } else {
      console.log("Invalid field!")
    }

    setFormData(initialFormData);
  };

  return [formData, handleChange, handleSubmit]
}