import { Box, Card, SxProps, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Icons } from '../../../assets/icons/TemperatureIcons';

export const WeatherCard = ({ children }: { children: ReactNode }) => {
  return (
    <Card
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '10vh',
        gap: 1.5,
        '&:hover': {
          backgroundColor: 'grey.100',
          cursor: 'pointer',
          // color: 'white',
        },
      }}
    >
      {children}
    </Card>
  );
};

WeatherCard.Title = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.25rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </div>
  );
};
WeatherCard.Temperature = ({ children }: { children: ReactNode[] }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {children[0]}
      {children[1]}
    </Box>
  );
};
WeatherCard.Actions = ({
  children,
  sx,
}: {
  children: ReactNode;
  sx: SxProps;
}) => {
  return <Box sx={{ ...sx }}>{children}</Box>;
};

WeatherCard.Info = ({ name, value }: { name: string; value: number }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {Icons[name] && Icons[name]}
      <Typography>{value}</Typography>
    </Box>
  );
};
