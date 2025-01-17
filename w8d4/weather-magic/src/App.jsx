import { useState } from "react";

import Header from "./components/Header";
import CityForm from "./components/CityForm";
import SearchHistory from "./components/SearchHistory";
import CurrentWeather from "./components/CurrentWeather";

import "./App.css";
import useCityData from "./hooks/useCityData";
import axios from "axios";

function App() {
  const [currentCity, cityList, addCity] = useCityData();
  const [weatherData, setWeatherData] = useState(null);

  const searchAndAddCity = (formData) => {
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${formData.cityName}&appid=${APIKEY}`;

    axios
      .get(url)
      .then((res) => res.data)
      .then(setWeatherData)
      .then(() => addCity(formData.cityName))
      .catch((err) => setWeatherData(null));
  };
  return (
    <>
      <Header />
      <main>
        <CityForm onSubmit={searchAndAddCity} />
        <SearchHistory cityList={cityList} />
        {weatherData && <CurrentWeather weatherData={weatherData} currentCity={currentCity}/>}
      </main>
    </>
  );
}

export default App;
