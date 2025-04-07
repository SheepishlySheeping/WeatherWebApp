import './loader.css'
import loaderIcon from '../../assets/imgs/loader.png'
import { useLoadingStore } from '../../store/store'

export default function Loader() {

    const loading = useLoadingStore((state) => state.loading)

    return (
        <div className='LoaderScreen Border' style={{opacity: (loading) ? '100%' : 0}}>
            <img src={loaderIcon} /> 
        </div>
    )
}