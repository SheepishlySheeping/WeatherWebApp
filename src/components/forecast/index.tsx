import './forecast.css';
import Loader from '../loader';
import dsa from '../../assets/imgs/wind.png'

const forecastStats = [
    { time: "next3", icon: dsa, temp: "11" },
    { time: "next6", icon: dsa, temp: "12" },
    { time: "next9", icon: dsa, temp: "13" },
    { time: "next12", icon: dsa, temp: "14" },
    { time: "next15", icon: dsa, temp: "15" }
]

export default function Forecast() {

    return (
        <div className='Forecast Border'>
            <Loader />
            <p>Forecast</p>
            <div className='ForecastTable'>
                {forecastStats.map((stat) => (
                    <div className='ForecastStat Border'>
                        <div>
                            <h1>{stat.temp}</h1>
                            <img src={stat.icon} />
                        </div>
                        <p>{stat.time}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
