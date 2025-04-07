import { useQuery } from "@tanstack/react-query";

type LocationData = {
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