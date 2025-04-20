import './table.css'
import Loader from '../loader'
import windSpdIcon from '../../assets/imgs/wind.png'
import windGstIcon from '../../assets/imgs/windgusts.png'
import cloudyIcon from '../../assets/imgs/cloud.png'
import visibilityIcon from '../../assets/imgs/visibility.png'
import pressureIcon from '../../assets/imgs/pressure.png'
import humidityIcon from '../../assets/imgs/humidity.png'
import { Stat } from '../../types/statdata'
import { useSearchStore, useWeatherStore, useTimeStore } from '../../store/useStores'
import { getTimeString, convertTime } from '../../utils/timeConfig'



export default function Table() {

    const { weatherData } = useWeatherStore()
    const { prev } = useSearchStore()
    const { curTime } = useTimeStore()
    const stats : Stat[] = [
    {name: "Pressure", icon: pressureIcon, value: weatherData?.main.pressure, unit: "hPa"}, 
    {name: "Humidity", icon: humidityIcon, value: weatherData?.main.humidity, unit: "%"},
    {name: "Wind speed", icon: windSpdIcon, value: weatherData?.wind.speed, unit: "m/s"},
    {name: "Wind gust", icon: windGstIcon, value: weatherData?.wind.gust, unit: "m/s"},
    {name: "Cloudiness", icon: cloudyIcon, value: weatherData?.clouds.all, unit: "%"},
    {name: "Visibility", icon: visibilityIcon, value: weatherData?.visibility, unit: "m"}
]


    return (
        <div className='Table Border'>
            <Loader />
            <div className='NameArea'>
                <h1>{prev.name}, {prev.country}</h1>
                <p>{getTimeString(convertTime(curTime, weatherData?.timezone))}</p>
            </div>
            <div className='TempArea'>
                <h1>{weatherData?.main.temp}°</h1>
                <div style={{backgroundImage: `url(https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png)`}} />  
            </div>
            <p>{weatherData?.weather[0].description}, feels like {weatherData?.main.feels_like}°</p>
            <div className='InfoArea'>
                {stats.map((stat, index) => (
                    <div className='InfoBlock Border' key={index}>
                        <img src={stat.icon} />
                        <p>{stat.name}</p>   
                        <h1>{stat.value} {stat.unit}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}