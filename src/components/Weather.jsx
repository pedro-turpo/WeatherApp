import { useState } from "react"
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temp"

const Weather = ({ weatherInfo }) => {

    console.log(weatherInfo)
    const [isCelsius, setIsCelsius] = useState(true)

    const handleChange = () => {
        setIsCelsius(!isCelsius)
    }

    const handleChangeText = () => {
        if (isCelsius) {
            return 'Change to °F'
        } else {
            return 'Change to °C'
        }
    }

    return (
        <section className="min-h-screen grid grid-rows-[1fr_5fr_1fr] h-[0] md:text-[18px] bg-black/40">
            {/* Seccion de Busqueda */}

            <div className=" flex justify-center items-end pb-[10px] md:mb-[-50px]">
                <form>
                    <input className="h-[35px] w-[250px] rounded-[10px_0_0_10px] text-black px-3 md:h-[40px] md:w-[280px]" type="text" placeholder="Working in this..."/>
                    <button className="bg-[#3A8DEC] h-[35px] w-[30px] rounded-[0_10px_10px_0] md:h-[40px] md:w-[35px]"><i className='bx bx-search-alt' ></i></button>
                </form>
            </div>

            {/* Seccion de cuerpo */}

            <article className="grid grid-rows-[6fr_4fr] md:grid-cols-2 md:grid-rows-1">
                {/* Descripcion, temperatura & imagen */}
                <div className="flex flex-col items-center h-[100%] md:justify-center md:items-end md:pr-8">
                    <div className="flex flex-col items-center">
                        <span className="font-fRoboto font-bold pt-[20px] text-xl">{weatherInfo?.name}, {weatherInfo?.sys.country}</span>
                        <h2 className="text-[80px] mt-[-20px]">{isCelsius ? `${kelvinToCelsius(weatherInfo?.main.temp)}` : `${kelvinToFahrenheit(weatherInfo?.main.temp)}`}</h2>
                        <div className="mt-[-25px] h-[150px] w-[150px] flex justify-center items-center md:w-[250px] md:h-[180px]">
                            <img className="w-[60%] " src={`/icons/${weatherInfo?.weather[0].icon}.png`} alt="icon of day" />
                        </div>
                        <h2 className="font-fRoboto font-bold pb-2 mt-[-20px] md:mt-[auto]">{weatherInfo?.weather[0].description}</h2>
                    </div>

                    

                </div>

                {/* viento, humedad presion */}
                <div className="flex justify-center items-center h-[100%] md:justify-start md:pl-8">

                    <div className="h-[80%] w-[80%] max-w-[300px] rounded-md bg-white bg-opacity-20 flex flex-col gap-5 justify-center backdrop-blur-sm md:h-[45%] md:gap-10">

                        <div className="grid grid-cols-[2.5fr_2fr_1fr] font-fRoboto font-bold">
                            <h3 className="pl-5">speed</h3>
                            <h3>{weatherInfo?.wind.speed}m/s</h3>
                            <img src="/images/vector1.svg" alt="iconSpeed" />
                        </div>

                        <div className="grid grid-cols-[2.5fr_2fr_1fr] font-fRoboto font-bold">
                            <h3 className="pl-5">humidity</h3>
                            <h3>{weatherInfo?.main.humidity}%</h3>
                            <img src="/images/vector2.svg" alt="iconHumidity" />
                        </div>

                        <div className="grid grid-cols-[2.5fr_2fr_1fr] font-fRoboto font-bold">
                            <h3 className="pl-5">pressure
                            </h3>
                            <h3>{weatherInfo?.main.pressure}hPa</h3>
                            <img src="/images/vector3.svg" alt="iconPressure" />
                        </div>

                    </div>

                </div>
            </article>

            {/* Seccion del boton */}
            <div className="flex justify-center items-start">
                <button className="border p-2 rounded-md backdrop-blur-sm hover:bg-[#3A8DEC] hover:translate-y-[-5px] hover:border-[#3A8DEC] hover:(transition-opacity duration-300 ease-in-out) font-fRoboto font-bold md:mt-[-50px]" onClick={handleChange}>{handleChangeText()}</button>
            </div>

        </section>
    )
}
export default Weather