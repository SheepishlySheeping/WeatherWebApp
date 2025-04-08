import { useQuery } from "@tanstack/react-query";
import { LocationData } from "../types/locationdata";

const KEY = import.meta.env.VITE_API_KEY

export default function useFetchSuggestions(query: String) {
    const trimmedQuery = query.trim()
    
    return useQuery<LocationData[]>({
        queryKey: ['LocationSuggestion', trimmedQuery],
        queryFn: async () => {
            if (!trimmedQuery) return []

            const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${trimmedQuery}&limit=5&appid=${KEY}`)
            if (!res.ok) {
                throw new Error(`Failed to fetch locations: ${res.statusText}`)
            }

            return res.json()
        },
        enabled: query.length>=3,
        staleTime: 5 * 60 * 1000
    })
}