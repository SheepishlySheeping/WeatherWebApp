import './loader.css'
import loaderIcon from '../../assets/imgs/loader.png'
import { useLoadingStore } from '../../store/useStores'

export default function Loader() {

    const loading = useLoadingStore((state) => state.loading)

    return (
        <div className={`LoaderScreen Border ${loading ? 'active' : ''}`}>
            <img src={loaderIcon} /> 
        </div>
    )
}