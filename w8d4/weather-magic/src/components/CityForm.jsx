import useFormData from "../hooks/useFormData";

export default function CityForm(props) {
  const initialFormData = { cityName: "" };

  const [formData, handleChange, handleSubmit] = useFormData(
    initialFormData,
    props.onSubmit
  );

  return (
    <form className="CityForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="cityName"
        onChange={handleChange}
        value={formData.cityName}
      />
      <button>Fetch weather!</button>
    </form>
  );
}
