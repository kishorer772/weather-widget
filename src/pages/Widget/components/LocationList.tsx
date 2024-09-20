import { useContext, useMemo } from 'react';
import { useMobile } from '../../../hooks/useMobile';
import { LocationProps } from '../../../types/temperture';
import { CityListProvider, WeatherProvider } from '../../../App';
import { Box, Grid2, IconButton, Typography } from '@mui/material';
import { WeatherCard } from './WeatherCard';
import { Icons } from '../../../assets/icons/TemperatureIcons';
import { Delete } from '@mui/icons-material';
import { getTemperature } from '../../../utils/temperature';

export const LocationList = ({ list }: { list: LocationProps[] }) => {
  const cityList = useMemo(() => list, [list]);
  const { isMobile, isTablet } = useMobile();
  const { temperature } = useContext(WeatherProvider);
  const { handleRemoveCity } = useContext(CityListProvider);
  const getCardSize = () => {
    if (isMobile) return 12;
    else if (isTablet) return 6;
    else return 4;
  };

  return (
    <div
      style={{
        overflow: 'auto',
        maxHeight: 'calc(90vh - 250px',
        paddingBlock: '1rem',
      }}
    >
      {cityList.length !== 0 ? (
        <Grid2 container spacing={2}>
          {cityList.map((location: LocationProps) => (
            <Grid2 size={getCardSize()} key={location.name}>
              <WeatherCard>
                <WeatherCard.Title>
                  <span>{location.name}</span>
                  <WeatherCard.Temperature>
                    <span style={{ fontSize: '0.8rem' }}>
                      {getTemperature(location, temperature).toFixed(1)}
                      <sup style={{ marginInline: 1 }}>o</sup>
                      {temperature ? 'C' : 'F'}
                    </span>
                    {Icons[location.temperatureType]
                      ? Icons[location.temperatureType]
                      : null}
                  </WeatherCard.Temperature>
                </WeatherCard.Title>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <WeatherCard.Info
                    name={'windSpeed'}
                    value={location.windSpeed!}
                  />
                  <WeatherCard.Info
                    name={'humidity'}
                    value={location.windSpeed!}
                  />
                </Box>
                <WeatherCard.Actions sx={{ alignSelf: 'end' }}>
                  <IconButton onClick={() => handleRemoveCity(location.name)}>
                    <Delete sx={{ color: 'red' }} />
                  </IconButton>
                </WeatherCard.Actions>
              </WeatherCard>
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Typography textAlign={'center'} fontWeight={'semi-bold'}>
          No City Found
        </Typography>
      )}
    </div>
  );
};
