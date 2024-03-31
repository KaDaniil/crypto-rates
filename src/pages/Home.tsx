import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { currencyStore } from '../store/CurrencyStore';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SearchBar from '../components/SearchBar';

const LinkItem = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
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


const Home = observer(() => {

    useEffect(() => {
        currencyStore.setSearchTerm('');
        currencyStore.fetchCurrencies();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: Add debounce?
        currencyStore.setSearchTerm(event.target.value);
    };

    if (currencyStore.isLoading) {
         return <p>Loading...</p>;
    }

    const currencies = currencyStore.searchTerm
        ? currencyStore.filteredCurrencies
        : currencyStore.currencies;

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: {xs: 5, md: 10},
        }}>
            <SearchBar onChange={handleSearchChange} />
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                gap: 2,
            }}>
                {
                    Object.entries(currencies).map(([currencyName, currency]) => (
                        <LinkItem key={currencyName} to={currencyName} >
                                <Typography variant="subtitle1" sx={{ fontSize: 'h4.fontSize' }} noWrap>
                                    {currencyName?.toUpperCase()}
                                </Typography>
                                <Typography variant="body1" noWrap>
                                    {`${currency?.rate?.toFixed(6)}…`}
                                </Typography>
                        </LinkItem>
                    ))
                }
            </Box>
        </Box>
    );
});

export default Home;
