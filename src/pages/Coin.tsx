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

const labelMap = {
    rate: 'Current Rate',
    ask: 'Asking Price',
    bid: 'Bidding Price',
    diff24h: '24h Difference',
};

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
                {Object.entries(coin).map(([coinKey, coinValue]) => (
                    <Box key={coinKey} sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 2,
                        px: { xs: 2, sm: 8, md: 10 },
                        gap: 1,
                        flexDirection: { xs: 'column', sm: 'row' },
                    }}>
                        <Typography variant="h5" sx={{ width: '100%', textAlign: { xs: 'center', sm: 'left' }, fontWeight: 500 }}>
                            {labelMap[coinKey] || coinKey}:
                        </Typography>
                        <Typography variant="h5" sx={{ width: '100%', textAlign: { xs: 'center', sm: 'right' } }}>
                            {coinValue}
                        </Typography>
                    </Box>
                ))}
                <FakeChart />
            </Paper>
        </Box>
    );
});

export default Coin;
