import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { memo } from 'react';


const labelMap = {
    rate: 'Current Rate',
    ask: 'Asking Price',
    bid: 'Bidding Price',
    diff24h: '24h Difference',
};

const CoinRow = memo(({ rowKey, rowValue }) => {
    return (
        <Box key={rowKey} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 2,
            px: { xs: 2, sm: 8, md: 10 },
            gap: 1,
            flexDirection: { xs: 'column', sm: 'row' },
        }}>
            <Typography variant="h5" sx={{ width: '100%', textAlign: { xs: 'center', sm: 'left' }, fontWeight: 500 }}>
                {labelMap[rowKey] || rowKey}:
            </Typography>
            <Typography variant="h5" sx={{ width: '100%', textAlign: { xs: 'center', sm: 'right' } }}>
                {rowValue}
            </Typography>
        </Box>
    );
});

export default CoinRow;
