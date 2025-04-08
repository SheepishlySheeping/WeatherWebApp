import { useLoadingStore, useUnitStore } from "../store/useStores"

export default async function switchUnit() {
    
    const { setLoading } = useLoadingStore.getState();
    const { useFahrenheit, setUseFahrenheit } = useUnitStore.getState();

    setLoading(true);
    setUseFahrenheit((useFahrenheit) ? false : true);
    await new Promise((r) => setTimeout(r, 3000))
    setLoading(false);
}