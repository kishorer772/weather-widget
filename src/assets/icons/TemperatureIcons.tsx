import {
  Air,
  CloudQueue,
  Thunderstorm,
  WaterDrop,
  WbSunny,
} from '@mui/icons-material';
import { ReactNode } from 'react';

export const Icons: { [key: string]: ReactNode } = {
  sunny: <WbSunny />,
  cloudy: <CloudQueue />,
  storm: <Thunderstorm />,
  'partly cloudy': <></>,
  rainy: <></>,
  windSpeed: <Air />,
  humidity: <WaterDrop />,
  feelsLike: <></>,
};
