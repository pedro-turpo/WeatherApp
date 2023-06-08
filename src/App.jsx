import { useEffect, useState } from "react"
import axios from "axios"
import Weather from "./components/Weather"
import Loader from "./components/Loader";

const API_KEY = 'd011dbe9c3845af051ad3f40cc7de136'

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null) 
  /* const [bgChange, setBgChange] = useState("") */
  const [bgChange, setBgChange] = useState("");

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(({ data }) => {
        setWeatherInfo(data);
        setBgChange(data.weather[0].icon);
      })
      .catch((error) => console.log(error))
  }

  const bgOfPage = {
    backgroundImage:`url("/bg-images/${bgChange}.jpg")`
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <main className="bg-no-repeat bg-top bg-center-x bg-cover min-h-screen text-white" style={bgOfPage}>
      {
        weatherInfo ? <Weather weatherInfo={weatherInfo} API_KEY={API_KEY} setWeatherInfo={setWeatherInfo} setBgChange={setBgChange} /> : <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]"><Loader /> <h2 className="text-[#3A8DEC] font-semibold">loading...</h2></div> 
      }
    </main>
  )
}

export default App
