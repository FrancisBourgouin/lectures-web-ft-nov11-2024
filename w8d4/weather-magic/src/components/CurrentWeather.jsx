export default function CurrentWeather(props) {
  const { currentCity, weatherData } = props;

  const temp = Math.round(weatherData.main.temp - 273.15)
  const conditions = weatherData.weather[0].description

  return (
    <section className="CurrentWeather">
      <h1>Weather for {currentCity}</h1>
      <h2>Currently {temp}°c</h2>
      <p>{conditions}</p>
    </section>
  );
}
