import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const CenteringWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
}));

export default CenteringWrapper;
