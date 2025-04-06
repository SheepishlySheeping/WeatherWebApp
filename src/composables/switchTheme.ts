import { useThemeStore } from "../store/store"
const theme = useThemeStore((state) => state.theme)
const switching = useThemeStore((state) => state.switching)
const setTheme = useThemeStore((state) => state.setTheme)
const setSwitching = useThemeStore((state) => state.setSwtiching)

export default async function switchTheme() {
    setTheme((theme === 'light') ? 'dark' : 'light')
    setSwitching(true)
    await new Promise((r) => setTimeout(r, 500))
    setSwitching(false)
}