import { createContext, useState } from 'react';

import WidgetApp from './pages/Widget';
import { LocationProps } from './types/temperture';
import { locations } from './data/locations';

export const WeatherProvider = createContext<{
  temperature: boolean;
  handleTemperature: () => void;
}>({ temperature: false, handleTemperature: () => {} });
export const CityListProvider = createContext<{
  list: LocationProps[];
  handleAddCity: (value: string) => void;
  handleRemoveCity: (value: string | []) => void;
}>({
  list: [],
  handleAddCity: () => {},
  handleRemoveCity: () => {},
});
function App() {
  const [temperature, setTemperature] = useState<boolean>(true);
  const [cityList, setCityList] = useState<LocationProps[]>(() =>
    JSON.parse(localStorage.getItem('locations') || '[]')
  );
  const handleTemperature = () => {
    setTemperature(!temperature);
  };
  const handleAddCity = (value: string) => {
    const index = locations.findIndex((location) => location.name === value);
    setCityList((prev) => [...prev, locations[index]]);
  };
  const handleRemoveCity = (value: string | []) => {
    if (typeof value === 'object') {
      localStorage.locations = JSON.stringify([]);
      setCityList([]);
    } else {
      setCityList((prev) => {
        const result = prev.filter((location) => location.name !== value);
        localStorage.locations = JSON.stringify(result);
        return result;
      });
    }
  };
  return (
    <>
      <WeatherProvider.Provider value={{ temperature, handleTemperature }}>
        <CityListProvider.Provider
          value={{ list: cityList, handleAddCity, handleRemoveCity }}
        >
          <WidgetApp />
        </CityListProvider.Provider>
      </WeatherProvider.Provider>
    </>
  );
}

export default App;
