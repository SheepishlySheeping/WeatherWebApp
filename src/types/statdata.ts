export type Stat = {
    name: string;
    icon: string;
    value: number | undefined;
    unit: string;
};

export type ForecastStat = {
    time: number | undefined;
    value: number | undefined;
}