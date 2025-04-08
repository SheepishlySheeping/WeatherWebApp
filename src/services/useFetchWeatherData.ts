import { useMutation } from "@tanstack/react-query"
import { WeatherData } from "../types/weatherdata"
import { useWeatherStore, useLoadingStore } from "../store/useStores"

const KEY = import.meta.env.VITE_API_KEY

export default function useFetchWeatherData() {
    const setWeatherData = useWeatherStore((state) => state.setWeatherData)
    const setLoading = useLoadingStore((state) => state.setLoading)

    return useMutation<WeatherData, Error, { lat: number; lon: number }>({
        mutationFn: async ({lat, lon} : {lat: number; lon: number}) : Promise<WeatherData> => {
            setLoading(true)
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`)
            if (!res.ok) {
                throw new Error(`Failed to fetch weather: ${res.statusText}`)
            }
            return res.json()
        },
        onSuccess: async (data) => {
            await new Promise((r) => setTimeout(r, 1500))
            setWeatherData(data)
            setLoading(false)
        }
    })
}