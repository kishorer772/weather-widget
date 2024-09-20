export type ThemeTemperature = {
  temperature: boolean;
  handleTemperature: () => void;
};

export type LocationProps = {
  name: string;
  degree: 'F' | 'C';
  value: string;
  temperatureType: 'sunny' | 'cloudy' | 'partly cloudy' | 'rainy' | 'storm';
  windSpeed?: number;
  humidity?: number;
  feelsLike?: number;
};
