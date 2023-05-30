import { useEffect, useState } from "react"
import axios from "axios"
import Weather from "./components/Weather"

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null) 
  /* const [bgChange, setBgChange] = useState("") */
  const [bgChange, setBgChange] = useState("");

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = 'd011dbe9c3845af051ad3f40cc7de136'

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(({ data }) => {
        setWeatherInfo(data);
        setBgChange(data.weather[0].icon);
      })
      .catch((error) => console.log(error))
    
  }

  const bgOfPage = {
    backgroundImage:`url("/public/bg-images/01n.jpg")`
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <main className={`bg-[url("/public/bg-images/01n.jpg")] bg-no-repeat bg-top bg-center-x bg-cover min-h-screen text-white`}>
      <Weather weatherInfo={weatherInfo}/>
    </main>
  )
}

export default App
