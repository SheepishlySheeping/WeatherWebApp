import './table.css'
import Cloudy from '../moodles/cloudy'

export default function Table() {

    return (
        <div className='Table Border'>
            <div className='NameArea'>
                <h1>HaNoi, Vietnam</h1>
                <p>12:00</p>
            </div>
            <div className='TempArea'>
                <h1>+12°</h1>
                <div><Cloudy /></div>   
            </div>
            <p>Partly cloud, feels like +10° </p>
        </div>
    )
}