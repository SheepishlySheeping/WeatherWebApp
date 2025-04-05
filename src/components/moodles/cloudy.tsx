import sun from '../../assets/imgs/sun.png'
import cloud from '../../assets/imgs/cloud.png'
import './moodles.css'

export default function Cloudy() {

    return (
        <>
            <img className='sun' src={sun} style={{top: "15%", right: "15%"}} />
            <img className='cloud' src={cloud} style={{top: "30%", right: "27%", scale: "1.1"}} />
        </>
    )
}