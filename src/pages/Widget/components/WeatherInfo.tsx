import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  TextField,
} from '@mui/material';
import { useMobile } from '../../../hooks/useMobile';
import { Add, Close } from '@mui/icons-material';
import { locations } from '../../../data/locations';
import { CityListProvider } from '../../../App';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

export const WeatherInfo = ({ clickHandler }: { clickHandler: () => void }) => {
  const { isMobile, isTablet } = useMobile();
  const getInputSize = () => {
    if (isMobile) return '100%';
    else if (isTablet) return '90%';
    else return '60%';
  };
  const { handleAddCity, list, handleRemoveCity } =
    useContext(CityListProvider);
  const addedLocation = new Set([...list.map((list) => list.name)]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.locations = JSON.stringify(
      list.filter((location) => addedLocation.has(location.name))
    );
  };

  return (
    <Box sx={{}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Weather App | Add</title>
        <meta
          name="description"
          content="Weather app to Access Live Info"
        />{' '}
      </Helmet>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: getInputSize(),
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            transition: 'display 10s',
          }}
        >
          <IconButton sx={{ alignSelf: 'end' }} onClick={clickHandler}>
            <Close />
          </IconButton>
          <Autocomplete
            multiple
            value={[...addedLocation]}
            onChange={(_, value) => {
              const city = value.slice(-1)[0];
              if (city === undefined) return;
              if (!addedLocation.has(city)) {
                addedLocation.add(city);
                handleAddCity(city);
              } else {
                addedLocation.delete(city);
                handleRemoveCity(city);
              }
            }}
            options={locations.map((location) => location.name)}
            renderInput={(params) => <TextField {...params} label="Weather" />}
          ></Autocomplete>
          <Button sx={{ alignSelf: 'end' }} type={'submit'} endIcon={<Add />}>
            Add
          </Button>
        </Box>
      </form>
    </Box>
  );
};
