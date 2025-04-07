import { useThemeStore } from "../store/store"

export default async function switchTheme() {

    const { theme, setTheme, setSwitching } = useThemeStore.getState();

    setTheme((theme === 'light') ? 'dark' : 'light')
    setSwitching(true)
    await new Promise((r) => setTimeout(r, 3000))
    setSwitching(false)
}