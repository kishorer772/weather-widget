import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
export const useMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return { isMobile, isTablet };
};
