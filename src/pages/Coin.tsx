import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { currencyStore } from '../store/CurrencyStore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FakeChart from '../components/FakeChart';
import { CoinProps } from '../models/CurrencyRates';
import { useEffect } from 'react';
import Loader from '../components/Loader';
import CoinRow from '../components/CoinRow';


const Coin = observer(() => {
    useEffect(() => {
        currencyStore.fetchCurrencies();
    }, []);

    const { coinId } = useParams();
    const coin: CoinProps | undefined = currencyStore.currencies[coinId];

    if (!coin && !currencyStore.isLoading) {
        return <Typography>Sorry, we don't have the <b>{coinId.toUpperCase()}</b> coin.</Typography>;
    }
    if (!coin) {
        return <Loader />;
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            margin: 'auto',
            boxSizing: 'border-box',
        }}>
            <Paper elevation={3} sx={{
                p: 4,
                width: '100%',
                maxWidth: { xs: '100%', md: 800 },
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                boxSizing: 'border-box',
            }}>
                <Typography variant="h4" component="h1" sx={{ textAlign: 'center', mb: 3, fontWeight: 500 }}>
                    {coinId.toUpperCase()} Details
                </Typography>
                {Object.entries(coin as  Record<string, number> ).map(([rowKey, rowValue]) => (
                    <CoinRow key={rowKey} rowKey={rowKey} rowValue={rowValue}/>
                ))}
                <FakeChart />
            </Paper>
        </Box>
    );
});

export default Coin;
