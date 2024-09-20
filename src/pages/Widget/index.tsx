import { ReactNode, useContext, useState } from 'react';
import { CityListProvider, WeatherProvider } from '../../App';
import { Box, Button, Switch, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Add } from '@mui/icons-material';

import { WeatherInfo } from './components/WeatherInfo';
import { Layout } from '../../Layout';
import { LocationList } from './components/LocationList';

export default function WidgetApp() {
  const [showWeather, setWeather] = useState(false);
  const handleShowWeather = () => {
    setWeather(!showWeather);
  };
  const weatherContext = useContext(WeatherProvider);

  if (!weatherContext) {
    throw new Error('WeatherProvider is missing');
  }
  const { temperature, handleTemperature } = weatherContext;
  const { list } = useContext(CityListProvider);
  return (
    <Layout>
      <Helmet>
        <title>Weather App</title>
      </Helmet>
      {showWeather ? (
        <WeatherInfo clickHandler={handleShowWeather} />
      ) : (
        <WeatherContainer>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                top: 0,
                right: 50,
                width: '10rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Switch onChange={handleTemperature} value={temperature} />
              {<Typography>{temperature ? 'Celsius' : 'Farenheit'}</Typography>}
            </Box>
            <Button
              sx={{ textTransform: 'none', justifySelf: 'end' }}
              endIcon={<Add />}
              onClick={handleShowWeather}
            >
              Add Weather
            </Button>
          </Box>
          <LocationList list={list} />
        </WeatherContainer>
      )}
    </Layout>
  );
}

const WeatherContainer = ({ children }: { children: ReactNode }) => {
  return <Box sx={{ py: 3 }}>{children}</Box>;
};
