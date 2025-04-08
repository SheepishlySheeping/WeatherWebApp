import './forecast.css';
import Loader from '../loader';
import { useForecastStore } from '../../store/useStores'
import { getTimeString } from '../../utils/timeConfig'

function timeShow (dt : number | undefined) {
    if (dt === undefined) return
    return getTimeString(new Date(dt * 1000))
}

export default function Forecast() {

    const { forecastList } = useForecastStore()

    const forecastStats = [
        { time: forecastList?.list[0].dt, value: forecastList?.list[0].main.temp },
        { time: forecastList?.list[1].dt, value: forecastList?.list[1].main.temp },
        { time: forecastList?.list[2].dt, value: forecastList?.list[2].main.temp },
        { time: forecastList?.list[3].dt, value: forecastList?.list[3].main.temp },
        { time: forecastList?.list[4].dt, value: forecastList?.list[4].main.temp }
    ]

    return (
        <div className='Forecast Border'>
            <Loader />
            <p>Forecast</p>
            <div className='ForecastTable'>
                {forecastStats.map((stat, index) => (
                    <div className='ForecastStat Border' key={index}>
                        <h1>{stat.value}°</h1>
                        <img src={`https://openweathermap.org/img/wn/${forecastList?.list[index].weather[0].icon}@2x.png`} />
                        <p>{timeShow(stat.time)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
