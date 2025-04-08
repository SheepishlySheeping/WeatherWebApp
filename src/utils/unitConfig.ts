import { useLoadingStore, useUnitStore, useWeatherStore, useForecastStore } from "../store/useStores"
import { ForecastData, ForecastList } from "../types/weatherdata"

function toC(f: number ) { 
    const temp = (f - 32) * 5 / 9 
    return parseFloat(temp.toFixed(2))
}

function toF(c: number) { 
    const temp = (c * 9 / 5) + 32
    return parseFloat(temp.toFixed(2))
}

export default async function switchUnit() {
    
    const { setLoading } = useLoadingStore.getState();
    const { useFahrenheit, setUseFahrenheit } = useUnitStore.getState()
    const { weatherData, setWeatherData } = useWeatherStore.getState()
    const { forecastList, setForecastList } = useForecastStore.getState()

    setLoading(true);
    if (weatherData) {
        const convert = useFahrenheit ? toC : toF;

        const newWeatherData = {
            ...weatherData,
            main: {
                ...weatherData.main,
                temp: convert(weatherData.main.temp),
                feels_like: convert(weatherData.main.feels_like),
            }
        }

        const newForecastTemp : ForecastData[] = []
        for ( const entry of forecastList?.list ?? []) {
            const newEntryTemp = {
                ...entry,
                main: {
                    ...entry.main,
                    temp: convert(entry.main.temp)
                }
            }
            newForecastTemp.push(newEntryTemp)
        }
        const newForecastData : ForecastList = {
            list: newForecastTemp   
        }

        setUseFahrenheit(!useFahrenheit);
        await new Promise((r) => setTimeout(r, 1000))
        setWeatherData(newWeatherData)
        setForecastList(newForecastData)
    }
    setLoading(false);
}