import { create } from 'zustand';

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
    setFocus: (state: boolean) => void
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
    setFocus: (state) => set ({ focus: state })
}))