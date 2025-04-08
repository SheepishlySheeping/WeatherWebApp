import { create } from 'zustand'
import { WeatherData } from '../types/weatherdata'
import { LocationData } from '../types/locationdata'

type ThemeState = {
    theme: 'light' | 'dark'
    switching: boolean
    setTheme: (theme: 'light' | 'dark' ) => void
    setSwitching: (state: boolean) => void
}

type LoadingState = {
    loading: boolean
    setLoading: (state: boolean) => void
}

type UnitState = {
    useFahrenheit: boolean
    setUseFahrenheit: (state: boolean) => void
}

type SearchState = {
    focus: boolean
    selected: LocationData
    prev: LocationData
    setFocus: (state: boolean) => void
    setSelected: (state: LocationData) => void
    setPrev: (state: LocationData) => void
}

type WeatherStore = {
    weatherData: WeatherData | null
    setWeatherData: (data: WeatherData) => void
    clearWeatherData: () => void
}

type TimeStore = {
    curTime: Date
    predictTime: Date[]
    setCurTime: (state: Date) => void
    setPredictTime: (state: Date[]) => void
}


export const useThemeStore = create<ThemeState>((set) => ({
    theme: 'light',
    switching: false,
    setTheme: (theme) => set({ theme }),
    setSwitching: (state) => set ({ switching: state })
}))

export const useLoadingStore = create<LoadingState>((set) => ({
    loading: false,
    setLoading: (state) => set ({ loading: state })
}))

export const useUnitStore = create<UnitState>((set) => ({
    useFahrenheit: false,
    setUseFahrenheit: (state) => set ({ useFahrenheit: state })
}))

export const useSearchStore = create<SearchState>((set) => ({
    focus: false,
    selected: {
        name: 'Hanoi',
        lat: 21.0294498,
        lon: 105.8544441,
        country: 'VN'
    },
    prev: {
        name: 'Hanoi',
        lat: 21.0294498,
        lon: 105.8544441,
        country: 'VN'
    },
    setFocus: (state) => set ({ focus: state }),
    setSelected: (state) => set ({ selected: state }),
    setPrev: (state) => set ({ prev: state})
}))

export const useWeatherStore = create<WeatherStore>((set) => ({
    weatherData: null,
    setWeatherData: (data) => set({ weatherData: data }),
    clearWeatherData: () => set({ weatherData: null })
}))

export const useTimeStore = create<TimeStore>((set) => ({
    curTime: new Date(),
    predictTime: [],
    setCurTime: (state) => set ({ curTime: state }),
    setPredictTime: (state) => set ({ predictTime: state }),
}))