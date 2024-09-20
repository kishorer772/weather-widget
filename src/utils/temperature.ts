import { TEMPERATURE_OPTIONS } from '../constants/constants';
import { LocationProps } from '../types/temperture';

export const getTemperature = (
  location: LocationProps,
  temperature: boolean
): number => {
  if (temperature) {
    if (location.degree === 'C') return +location.value;
    else return TEMPERATURE_OPTIONS.farenheitToCelsius * (+location.value - 32);
  } else {
    if (location.degree === 'C')
      return TEMPERATURE_OPTIONS.farenheitToCelsius * +location.value + 32;
    else return +location.value;
  }
};
