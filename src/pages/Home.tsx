import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { isObjectEmpty } from '../utils';
import { currencyStore } from '../store/CurrencyStore';
import SearchBar from '../components/SearchBar';
import LinkItem from '../components/LinkItem';
import CenteringWrapper from '../components/CenteringWrapper';
import Loader from '../components/Loader';

const Home = observer(() => {

    useEffect(() => {
        currencyStore.setSearchTerm('');
        currencyStore.fetchCurrencies();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        currencyStore.setSearchTerm(event.target.value);
    };

    if (currencyStore.error) {
        return (
            <CenteringWrapper>
                <Typography color="error">{currencyStore.error}</Typography>
            </CenteringWrapper>
        );
    }

    if (currencyStore.isLoading) {
        return <Loader />;
    }

    if (isObjectEmpty(currencyStore.currencies)) {
        return (
            <CenteringWrapper>
                <Typography>No data</Typography>
            </CenteringWrapper>
        );
    }

    const currencies = currencyStore.searchTerm
        ? currencyStore.filteredCurrencies
        : currencyStore.currencies;

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 5, md: 10 },
        }}>
            <SearchBar onChange={handleSearchChange} />
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                gap: 2,
            }}>
                {
                    currencies && Object.entries(currencies).map(([currencyName, currency]) => (
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
