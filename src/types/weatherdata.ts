type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
};

type Main = {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
};
type Wind = {
    speed: number;
    gust: number;
};

type Clouds = {
    all: number;
};

export type WeatherData = {
    weather: Weather[];
    main: Main;
    wind: Wind;
    clouds: Clouds;
    visibility: number;
    timezone: number;
};