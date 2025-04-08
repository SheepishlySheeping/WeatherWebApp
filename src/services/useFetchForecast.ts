import { useMutation } from "@tanstack/react-query"
import { ForecastList } from "../types/weatherdata"
import { useForecastStore, useUnitStore } from "../store/useStores"

const KEY = import.meta.env.VITE_API_KEY

export default function useFetchForecastData() {
    const { setForecastList } = useForecastStore()
    const { useFahrenheit } = useUnitStore()
    const unit = (useFahrenheit) ? 'imperial' : 'metric'

    return useMutation<ForecastList, Error, { lat: number; lon: number }>({
        mutationFn: async ({lat, lon} : {lat: number; lon: number}) : Promise<ForecastList> => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${KEY}&units=${unit}`)
            if (!res.ok) {
                throw new Error(`Failed to fetch weather: ${res.statusText}`)
            }
            return res.json()
        },
        onSuccess: async (data) => {
            const slicedList = data.list.slice(0, 5)
            const newForecastList = {
                ...data,
                list: slicedList
            }
            setForecastList(newForecastList)
        }
    })
}