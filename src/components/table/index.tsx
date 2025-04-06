import './table.css'
import Loader from '../loader'
import windSpdIcon from '../../assets/imgs/wind.png'
import windGstIcon from '../../assets/imgs/windgusts.png'
import cloudyIcon from '../../assets/imgs/cloud.png'
import visibilityIcon from '../../assets/imgs/visibility.png'
import pressureIcon from '../../assets/imgs/pressure.png'
import humidityIcon from '../../assets/imgs/humidity.png'

const miscStats = [
    {name: "Pressure", icon: pressureIcon, value: "sdsaddddddddddddddddads"}, 
    {name: "Humidity", icon: humidityIcon, value: ""},
    {name: "Wind speed", icon: windSpdIcon, value: ""},
    {name: "Wind gust", icon: windGstIcon, value: ""},
    {name: "Cloudiness", icon: cloudyIcon, value: ""},
    {name: "Visibility", icon: visibilityIcon, value: ""}
]

export default function Table() {

    return (
        <div className='Table Border'>
            <Loader />
            <div className='NameArea'>
                <h1>HaNoi, Vietnam</h1>
                <p>12:00</p>
            </div>
            <div className='TempArea'>
                <h1>+12°</h1>
                <div></div>   
            </div>
            <p>Partly cloud, feels like +10° </p>
            <div className='InfoArea'>
                {miscStats.map((stat) => (
                    <div className='InfoBlock Border'>
                        <img src={stat.icon} />
                        <p>{stat.name}</p>   
                        <h1>{stat.value}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}