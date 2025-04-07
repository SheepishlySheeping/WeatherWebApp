import { useQuery } from "@tanstack/react-query";

type Weather = {
    id: number
    main: string
    description: string
    icon: string
}

type Main = {
    temp: number;
    feels_like: number
    pressure: number
    humidity: number
}

type Wind = {
    speed: number
    gust: number
}

type Clouds = {
    all: number
}


type WeatherData = {
    name: String
    lat: number
    lon: number
    country: String
}

const KEY = '06f0823b37fe46a2976c2dda90e298f8'

export default function getSuggestions(query: String) {
    return useQuery<LocationData[]>({
        queryKey: ['LocationSuggestion', query],
        queryFn: async () => {
            if (!query) return []

            const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${KEY}`)
            if (!res.ok) {
                throw new Error(`Failed to fetch locations: ${res.statusText}`)
            }

            return res.json()
        },
        enabled: !!query && query.length>=3,
        staleTime: 5 * 60 * 1000
    })
}