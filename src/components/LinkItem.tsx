import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const LinkItem = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    textDecoration: 'none',
    width: 240,
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',

    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[6],
    },

    '& .MuiTypography-root': {
        fontWeight: 500,
    },
}));

export default LinkItem;
