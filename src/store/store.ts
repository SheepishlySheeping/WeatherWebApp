import { create } from 'zustand';

type ThemeState = {
    theme: 'light' | 'dark'
    switching: boolean
    setTheme: (theme: 'light' | 'dark' ) => void
    setSwtiching: (state: boolean) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
    theme: 'light',
    switching: false,
    setTheme: (theme) => set({ theme }),
    setSwtiching: (state) => set ({ switching: state })
}))