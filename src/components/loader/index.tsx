import './loader.css'
import loaderIcon from '../../assets/imgs/loader.png'

export default function Loader() {

    return (
        <div className="LoaderScreen Border">
            <img src={loaderIcon} /> 
        </div>
    )
}