import { useState } from "react";

export default function useCityData(){
  const [currentCity, setCurrentCity] = useState("")
  const [cityList, setCityList] = useState([])

  const addCity = (cityName) => {
    setCurrentCity(cityName)
    if(cityList.indexOf(cityName) === -1){
      setCityList([...cityList, cityName])
    }
  }

  return [currentCity, cityList, addCity]
}